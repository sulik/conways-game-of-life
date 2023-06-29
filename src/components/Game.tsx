import { useCallback, useState } from "react";
import { useGrid } from "../hooks/useGrid";
import { useInterval } from "../hooks/useInterval";
import { DEFAULT_CELL_SIZE_PX, DEFAULT_INTERVAL_MS } from "../constants";
import Settings from "./Settings";
import Grid from "./Grid";

const Game = () => {
  const [cellSize, setCellSize] = useState(DEFAULT_CELL_SIZE_PX);
  const [interval, setInterval] = useState(DEFAULT_INTERVAL_MS);

  const { grid, genCount, width, height, tick, reset } = useGrid(cellSize);
  const { start, pause, started } = useInterval(tick, interval);

  const handleCellSizeChange = useCallback((newCellSize: number) => {
    setCellSize(newCellSize);
  }, []);

  const handleIntervalChange = useCallback((newInterval: number) => {
    setInterval(newInterval);
  }, []);

  return (
    <>
      <Settings
        width={width}
        height={height}
        grid={grid}
        started={started}
        genCount={genCount}
        start={start}
        pause={pause}
        reset={reset}
        cellSize={cellSize}
        interval={interval}
        onCellSizeChange={handleCellSizeChange}
        onIntervalChange={handleIntervalChange}
      />
      <Grid data={grid} cellSize={cellSize} />
    </>
  );
};

export default Game;
