import BoardSpot from "./BoardSpot.component";
import { useState, useEffect, useCallback } from "react";
import {
  graphql,
  useFragment,
  useRelayEnvironment,
  commitMutation
} from "relay-hooks";

const fragment = graphql`
  fragment BoardComponentFragment on GameNode {
    tilesPlayed {
      edges {
        node {
          x
          y
          tile {
            id
            shape
            color
          }
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation BoardComponentMutation(
    $gameId: String!
    $playerId: String!
    $tileId: ID!
    $position: PositionInput
  ) {
    makeMove(
      gameId: $gameId
      playerId: $playerId
      tileId: $tileId
      position: $position
    ) {
      ok
    }
  }
`;

const Board = ({ gameId, playerId, gameRef }) => {
  const game = useFragment(fragment, gameRef);
  const width = 25;
  const height = 25;
  const spots = [];
  for (let i = 0; i < width; i += 1) {
    for (let j = 0; j < height; j += 1) {
      spots.push([i, j]);
    }
  }

  const [filledSpots, setFilledSpots] = useState({});
  useEffect(() => {
    const _filledSpots = {};
    if (game && game.tilesPlayed && game.tilesPlayed.edges) {
      game.tilesPlayed.edges
        .filter(e => e && e.node)
        .forEach(({ node: { x, y, tile } }) => {
          const key = `${x},${y}`;
          _filledSpots[key] = tile;
        });
      setFilledSpots(_filledSpots);
    }
  }, [game]);

  const environment = useRelayEnvironment();
  const handleDrop = useCallback(
    (x, y) => tile => {
      // tile => setFilledSpots({ ...filledSpots, [key]: tile })
      commitMutation(environment, {
        mutation,
        variables: {
          gameId,
          playerId,
          tileId: tile.id,
          position: {
            x,
            y
          }
        },
        onCompleted: response => {
          console.log("makeMove", response);
        },
        onError: error => console.error(error)
      });
    },
    [environment, gameId, playerId]
  );

  return (
    <div className="board-container">
      <div
        className="board"
        style={{ height: height * 100, width: width * 100 }}
      >
        {spots.map(([x, y]) => {
          const key = `${x},${y}`;
          return (
            <BoardSpot
              key={key}
              x={x}
              y={y}
              tile={filledSpots[key]}
              onDrop={handleDrop(x, y)}
            />
          );
        })}
      </div>
      <style jsx>
        {`
          .board-container {
            flex-grow: 1;
            overflow: auto;
            border: 1px solid black;
            height: 100%;
          }
          .board {
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

export default Board;
