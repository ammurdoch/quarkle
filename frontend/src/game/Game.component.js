import Hand from "../hand";
import ScoreBoard from "../score-board";
import Board from "../board";
import {
  graphql,
  STORE_OR_NETWORK,
  commitMutation,
  requestSubscription
} from "relay-runtime";
import { useQuery, useRelayEnvironment } from "relay-hooks";
import { useEffect, useRef, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, names } from "unique-names-generator";

const query = graphql`
  query GameComponentQuery($gameId: String!, $playerId: String!) {
    myGame(gameId: $gameId) {
      game {
        turn {
          id
          name
        }
        ...BoardComponentFragment
        ...ScoreBoardComponentFragment
      }
      you(playerId: $playerId) {
        id
        ...HandComponentFragment @arguments(playerId: $playerId)
      }
    }
  }
`;

const mutation = graphql`
  mutation GameComponentMutation(
    $gameId: String!
    $playerId: String!
    $playerName: String!
  ) {
    joinGame(gameId: $gameId, playerId: $playerId, playerName: $playerName) {
      myGame {
        game {
          turn {
            id
            name
          }
          ...BoardComponentFragment
          ...ScoreBoardComponentFragment
        }
        you(playerId: $playerId) {
          id
          ...HandComponentFragment @arguments(playerId: $playerId)
        }
      }
    }
  }
`;

const subscription = graphql`
  subscription GameComponentSubscription($gameId: String!, $playerId: String!) {
    followGame(gameId: $gameId) {
      myGame {
        game {
          turn {
            id
            name
          }
          ...BoardComponentFragment
          ...ScoreBoardComponentFragment
        }
        you(playerId: $playerId) {
          id
          ...HandComponentFragment @arguments(playerId: $playerId)
        }
      }
    }
  }
`;

const playerId = uuidv4();
const randomName = uniqueNamesGenerator({
  dictionaries: [names],
  length: 1
});
console.log("playerId", playerId);

const Game = ({ gameId }) => {
  const { props, error, retry } = useQuery(
    query,
    {
      gameId,
      playerId
    },
    { fetchPolicy: STORE_OR_NETWORK }
  );

  const environment = useRelayEnvironment();
  const first = useRef(false);
  useEffect(() => {
    if (gameId && !first.current) {
      first.current = true;
      requestSubscription(
        environment, // see Environment docs
        {
          subscription,
          variables: {
            gameId,
            playerId
          },
          onNext: response => console.log("onNext", response),
          onCompleted: () => {
            console.log("subscription closed");
          },
          onError: error => console.error(error),
          updater: store => {
            console.log("store", store);
            const game = store.getRootField("followGame", {
              gameId,
              playerId
            });
            console.log("game", game);
            if (game) {
              const gameId = game.getLinkedRecord("myGame").getDataID();
              console.log("gameId", gameId);
              const root = store.getRoot();
              console.log("root", root);
              const queryRoot = store.get(gameId);
              console.log("queryRoot", queryRoot);
              queryRoot.copyFieldsFrom(game.getLinkedRecord("myGame"));
            }
          }
        }
      );
      commitMutation(environment, {
        mutation,
        variables: {
          gameId,
          playerId,
          playerName: randomName
        },
        onCompleted: () => {
          console.log("complete");
          retry();
        },
        onError: error => console.error(error)
        // optimisticResponse?: Object,
        // optimisticUpdater?: ?(store: RecordSourceSelectorProxy) => void,
        // updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,
        // configs?: Array<DeclarativeMutationConfig>,
      });
    }
  }, [environment, gameId, retry]);
  const [whosTurnIsIt, itsYourTurn] = useMemo(() => {
    // props.myGame.game.turn.id
    // props.myGame.you.id
    let who;
    let yourTurn = false;
    if (
      props &&
      props.myGame &&
      props.myGame.game &&
      props.myGame.game.turn &&
      props.myGame.you
    ) {
      if (props.myGame.game.turn.id === props.myGame.you.id) {
        who = "It's your turn";
        yourTurn = true;
      } else {
        who = `It's ${props.myGame.game.turn.name}'s turn`;
      }
    }
    return [who, yourTurn];
  }, [props]);
  console.log("props", props, error);
  return (
    <>
      <header className="header">
        <h1>Quarkle</h1>
        <div>{whosTurnIsIt}</div>
        <div />
      </header>
      <main>
        <div className="game">
          {props && props.myGame && props.myGame.you && (
            <Hand handRef={props.myGame.you} isYourTurn={itsYourTurn} />
          )}
          <Board
            gameId={gameId}
            playerId={playerId}
            gameRef={props && props.myGame && props.myGame.game}
          />
          {props && props.myGame && props.myGame.game && (
            <ScoreBoard gameRef={props.myGame.game} />
          )}
        </div>
      </main>
      <style jsx>
        {`
          header {
            padding: 1rem;
            height: 100px;
            flex-grow: 0;
            flex-shrink: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            flex-grow: 0;
            flex-shrink: 0;
            height: calc(100vh - 200px);
          }
          .game {
            display: flex;
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Game;
