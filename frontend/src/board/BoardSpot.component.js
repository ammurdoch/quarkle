import { useDrop } from "react-dnd";
import Tile from "../tile";

const SpotSize = 100;

const BoardSpot = ({ x, y, tile, onDrop }) => {
  const [, drop] = useDrop({
    accept: "tile",
    drop: (item, monitor) => {
      console.log("ondrop", item, monitor);
      onDrop(item);
    }
  });
  return (
    <>
      <div
        ref={drop}
        className="board-spot"
        style={{
          top: x * SpotSize,
          left: y * SpotSize,
          height: SpotSize,
          width: SpotSize
        }}
      >
        {tile && <Tile shape={tile.shape} color={tile.color} />}
      </div>
      <style jsx>
        {`
          .board-spot {
            // border: 1px solid black;
            position: absolute;
          }
        `}
      </style>
    </>
  );
};

export default BoardSpot;
