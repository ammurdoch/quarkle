import Clover from "./Clover2.svg";
import Circle from "./Circle.svg";
import Diamond from "./Diamond.svg";
import Square from "./Square.svg";
import Star from "./Star.svg";
import Sun from "./Sun.svg";
import { useDrag } from "react-dnd";

const Colors = {
  red: "#db2828",
  yellow: "#fbbd08",
  green: "#21ba45",
  blue: "#2185d0",
  orange: "#f2711c",
  violet: "#6435c9",
  purple: "#a333c8"
};

const Tile = ({ id, shape, color, canMove }) => {
  const [, drag] = useDrag({
    item: { id, type: "tile", shape, color },
    canDrag: () => !!canMove
  });
  return (
    <>
      <div ref={drag} className="tile">
        {shape === "clover" && <Clover color={Colors[color] || "white"} />}
        {shape === "circle" && <Circle color={Colors[color] || "white"} />}
        {shape === "diamond" && <Diamond color={Colors[color] || "white"} />}
        {shape === "square" && <Square color={Colors[color] || "white"} />}
        {shape === "star" && <Star color={Colors[color] || "white"} />}
        {shape === "sun" && <Sun color={Colors[color] || "white"} />}
      </div>
      <style jsx>
        {`
          .tile {
            height: 100px;
            width: 100px;
            background: #3d3d3d;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Tile;
