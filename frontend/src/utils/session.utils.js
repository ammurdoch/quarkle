import * as jwt from "jsonwebtoken";
import { apiRefreshToken } from "./refreshToken.utils";

export const saveSession = (username, token, refreshToken) => {
  const session = {
    username,
    token,
    refreshToken
  };
  localStorage.setItem("session", JSON.stringify(session));
  return session;
};

export const loadSession = () => {
  let session = null;
  if (process.browser) {
    const sessionJson = localStorage.getItem("session");
    if (sessionJson) {
      session = JSON.parse(sessionJson);
    }
  }
  return session;
};

export class TokenError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}

export const isTokenExpired = token => {
  const decoded = jwt.decode(token);
  if (!decoded) return true;
  const nowTime = Date.now() / 1000;
  if (nowTime + 60 < decoded.exp) {
    return false;
  }
  return true;
};

export const deleteSession = () => {
  localStorage.removeItem("session");
};

export async function getOrRefreshToken() {
  const session = loadSession();
  if (session && session.token) {
    if (isTokenExpired(session.token)) {
      let response;
      try {
        response = await apiRefreshToken(session.refreshToken).toPromise();
      } catch (err) {
        throw new TokenError("SessionExpired", "Session expired");
      }
      if (response && response.response.errors) {
        throw new TokenError("SessionExpired", "Session expired");
      }
      const { token } = response.response.data.refreshToken;
      saveSession(session.username, token, session.refreshToken);
      return token;
    }
    return session.token;
  }
  return null;
}
