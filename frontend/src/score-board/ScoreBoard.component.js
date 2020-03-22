// import { graphql } from "relay-runtime";
import { useFragment, graphql } from "relay-hooks";

const fragment = graphql`
  fragment ScoreBoardComponentFragment on GameNode {
    players {
      edges {
        cursor
        node {
          id
          name
          score
        }
      }
    }
  }
`;

const ScoreBoard = ({ gameRef }) => {
  const game = useFragment(fragment, gameRef);
  return (
    <>
      <div className="score-board">
        <h2>Score Board</h2>
        {game &&
          game.players &&
          game.players.edges &&
          game.players.edges
            .filter(e => e && e.node)
            .map(edge => (
              <div className="score-board-player" key={edge.cursor}>
                <div className="score-board-player-name">{edge.node.name}</div>
                <div className="score-board-player-score">
                  {edge.node.score}
                </div>
              </div>
            ))}
      </div>
      <style jsx>
        {`
          .score-board {
            padding: 1rem;
            min-width: 200px;
            overflow: auto;
            height: 100%;
            padding-top: 0;
          }
          .score-board h2 {
            margin-top: 0;
          }
          .score-board-player {
            display: flex;
            justify-content: space-between;
            line-height: 1.5;
          }
          .score-board-player-name {
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default ScoreBoard;
