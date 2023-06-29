import { useCallback, useEffect, useState } from "react";
import { DimensionsType, useDimensions } from "./useDimensions";

export type GridType = number[][];

const createGrid = ({ width, height }: DimensionsType): GridType => {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () =>
      Math.floor(Math.random() * 3) === 1 ? 1 : 0
    )
  );
};

const getAdjacentPopulation = ({
  grid,
  row,
  col,
  width,
  height,
}: DimensionsType & {
  grid: GridType;
  row: number;
  col: number;
}) => {
  let count = 0;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      let ny = row + dy;
      let nx = col + dx;
      if (ny === -1) ny = height - 1;
      if (nx === -1) nx = width - 1;
      if (ny === height) ny = 0;
      if (nx === width) nx = 0;
      if (grid[ny][nx] === 1) count = count + 1;
      if (count === 4) break;
    }
    if (count === 4) break;
  }

  return count;
};

export const useGrid = (cellSize: number) => {
  const { width, height } = useDimensions(cellSize);
  const [grid, setGrid] = useState<GridType>([]);
  const [genCount, setGenCount] = useState(0);

  useEffect(() => {
    setGrid(createGrid({ width, height }));
    setGenCount(0);
  }, [width, height]);

  const reset = useCallback(() => {
    setGrid(createGrid({ width, height }));
    setGenCount(0);
  }, [width, height]);

  const tick = useCallback(() => {
    setGrid((prevState) => {
      return prevState.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const population = getAdjacentPopulation({
            grid: prevState,
            row: rowIndex,
            col: colIndex,
            width,
            height,
          });

          if (cell === 1) {
            return population === 2 || population === 3 ? 1 : 0;
          } else {
            return population === 3 ? 1 : 0;
          }
        })
      );
    });
    setGenCount((prevState) => prevState + 1);
  }, [height, width]);

  return { grid, genCount, width, height, reset, tick };
};
