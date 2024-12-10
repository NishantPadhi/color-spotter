import { useState } from "react";
import "./styles.css";
import { getRandomColors, getRandomNumber, indexMatcher, Box } from "./helper";

let { color, oddColor } = getRandomColors();

export default function App() {
  const [gridSize, setGridSize] = useState(4);
  const [isWrong, setIsWrong] = useState(false);
  let randomRow = getRandomNumber(gridSize);
  let randomCol = getRandomNumber(gridSize);

  const handleClickHandler = (e) => {
    const id = e.target.getAttribute("id");
    const [row, col] = id.split("-");
    if (+row === randomRow && +col === randomCol) {
      setGridSize((prev) => prev + 1);
      ({ color, oddColor } = getRandomColors());
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setGridSize(4);
        setIsWrong(false);
        ({ color, oddColor } = getRandomColors());
      }, 2000);
    }
  };

  return (
    <main>
      <h1>Score: {gridSize - 4}</h1>
      <div
        className={`parentDiv ${isWrong ? "apply-shake" : ""}`}
        onClick={handleClickHandler}
      >
        {[...Array(gridSize)].map((_, rowIndex) => {
          return (
            <div style={{ display: "flex" }}>
              {[...Array(gridSize)].map((_, colIndex) => (
                <Box
                  id={`${rowIndex}-${colIndex}`}
                  color={
                    indexMatcher(rowIndex, colIndex, randomRow, randomCol)
                      ? oddColor
                      : color
                  }
                />
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
}
