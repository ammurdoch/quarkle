import Tile from "../tile";
import { graphql, useFragment } from "relay-hooks";

const fragment = graphql`
  fragment HandComponentFragment on PlayerNode
    @argumentDefinitions(playerId: { type: "String!", defaultValue: "" }) {
    id
    name
    score
    hand(playerId: $playerId) {
      edges {
        cursor
        node {
          id
          shape
          color
        }
      }
    }
  }
`;

const Hand = ({ handRef, isYourTurn }) => {
  const you = useFragment(fragment, handRef);
  console.log("hand", you);
  return (
    <div className="hand-container">
      <h2>My Hand</h2>
      <div className="hand">
        {you &&
          you.hand &&
          you.hand.edges &&
          you.hand.edges
            .filter(e => e && e.node)
            .map(({ node, cursor }) => (
              <Tile
                key={cursor}
                id={node.id}
                shape={node.shape}
                color={node.color}
                canMove={isYourTurn}
              />
            ))}
      </div>
      <style jsx>
        {`
          h2 {
            margin-top: 0;
          }
          .hand-container {
            padding: 1rem;
            width: 248px;
            flex-shrink: 0;
            overflow: auto;
            padding-top: 0;
          }
          .hand {
            display: flex;
            flex-wrap: wrap;
            margin: -0.5rem;
          }
          :global(.hand > .tile) {
            margin: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default Hand;
