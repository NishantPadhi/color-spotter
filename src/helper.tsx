import "./styles.css";

export const getRandomColors = function () {
  var ratio = 0.618033988749895;

  var hue = (Math.random() + ratio) % 1;
  var saturation = Math.round(Math.random() * 100) % 85;
  var lightness = Math.round(Math.random() * 100) % 85;

  var color =
    "hsl(" + Math.round(360 * hue) + "," + saturation + "%," + lightness + "%)";
  var oddColor =
    "hsl(" +
    Math.round(360 * hue) +
    "," +
    saturation +
    "%," +
    (lightness + 5) +
    "%)";

  return {
    color,
    oddColor,
  };
};

export const Box = ({ color, id }) => {
  return <div id={id} style={{ background: color }} className="box"></div>;
};

export const indexMatcher = (row, col, randomRow, randomCol) => {
  return row === randomRow && col === randomCol;
};

export const getRandomNumber = (gridSize) =>
  Math.round(Math.random() * (gridSize - 1));
