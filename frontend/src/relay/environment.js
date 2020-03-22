import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store
} from "relay-runtime";
import { ajax } from "rxjs/ajax";
import { saveSession } from "../utils/session.utils";
import settings from "../settings";
import { getOrRefreshToken } from "../utils/session.utils";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { Observable } from "rxjs";

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });

async function fetchQuery(operation, variables, cacheConfig, uploadables) {
  const queryID = operation.text;
  const isMutation = operation.operationKind === "mutation";
  const isQuery = operation.operationKind === "query";
  const forceFetch = cacheConfig && cacheConfig.force;
  const fromCache = cache.get(queryID, variables);
  // console.log('operation', operation, variables, cacheConfig);
  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  let body;
  const headers = {
    Accept: "application/json"
  };
  const token = await getOrRefreshToken();
  if (token) {
    headers["Authorization"] = `JWT ${token}`;
  }
  if (uploadables) {
    if (!window.FormData) {
      throw new Error("Uploading files without `FormData` not supported.");
    }

    const formData = new FormData();
    formData.append("query", operation.text);
    formData.append("variables", JSON.stringify(variables));

    Object.entries(uploadables).forEach(([key, uploadable]) => {
      formData.append(key, uploadable);
    });

    body = formData;
  } else {
    headers["Content-Type"] = "application/json";
    body = {
      query: operation.text,
      variables
    };
  }
  return ajax
    .post(settings.apiUrl, body, headers)
    .toPromise()
    .then(response => {
      // console.log('response', response);
      if (response.status !== 200) {
        throw Error(`Network error ${response.status}`);
      }
      if (isQuery && response.response) {
        cache.set(queryID, variables, response.response);
      }
      // Clear cache on mutations
      if (isMutation) {
        cache.clear();
      }
      if (response.response.errors) {
        throw new Error(response.response.errors[0].message);
      }
      if (response.response.data.tokenAuth) {
        const { tokenAuth } = response.response.data;
        saveSession(
          tokenAuth.user.email,
          tokenAuth.token,
          tokenAuth.refreshToken
        );
      }
      return response.response;
    })
    .catch(err => {
      throw err;
    });
}

const setupSubscription = (config, variables) => {
  if (!process.browser) return;
  const query = config.text;
  const subscriptionClient =
    process.browser &&
    new SubscriptionClient(settings.apiWsUrl, {
      reconnect: true
    });
  return Observable.create(sink => {
    if (subscriptionClient) {
      const request = subscriptionClient.request({ query, variables });
      return request.subscribe(sink);
    }
  });
};

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery, setupSubscription);

export function clearCache() {
  cache.clear();
}

export default new Environment({
  network,
  store
});
