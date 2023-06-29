import { Box, Button, Paper, Typography } from "@mui/material";
import { DimensionsType } from "../hooks/useDimensions";
import { GridType } from "../hooks/useGrid";
import SettingsForm from "./SettingsForm";
import SettingsInfo from "./SettingsInfo";

const Settings = ({
  width,
  height,
  grid,
  started,
  genCount,
  cellSize,
  interval,
  start,
  pause,
  reset,
  onIntervalChange,
  onCellSizeChange,
}: DimensionsType & {
  grid: GridType;
  started: boolean;
  genCount: number;
  cellSize: number;
  interval: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  onIntervalChange: (interval: number) => void;
  onCellSizeChange: (cellSize: number) => void;
}) => {
  const startButtonLabel = genCount === 0 ? "Start" : "Resume";

  return (
    <Paper
      elevation={10}
      sx={{
        position: "fixed",
        top: "50%",
        right: "50%",
        transform: "translate(50%,-50%)",
        background: "rgba(255, 255, 255, 0.95)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Conway&apos;s Game of Life
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color={started ? "error" : "primary"}
            onClick={started ? pause : start}
          >
            {started ? "Pause" : startButtonLabel}
          </Button>
          <Button variant="outlined" onClick={reset} sx={{ ml: 2 }}>
            Reset
          </Button>
        </Box>

        <SettingsForm
          cellSize={cellSize}
          interval={interval}
          onCellSizeChange={onCellSizeChange}
          onIntervalChange={onIntervalChange}
        />
        <SettingsInfo
          grid={grid}
          genCount={genCount}
          width={width}
          height={height}
        />
      </Box>
    </Paper>
  );
};

export default Settings;
