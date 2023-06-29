import { Box, Slider, Typography } from "@mui/material";

const cellSizeMarks = [
  { value: 5, label: "5px" },
  { value: 15, label: "15px" },
  { value: 30, label: "30px" },
  { value: 50, label: "50px" },
];

const intervalMarks = [
  { value: 5, label: "5ms" },
  { value: 50, label: "50ms" },
  { value: 300, label: "300ms" },
  { value: 500, label: "500ms" },
];

const getCellSizeLabel = (value: number) => `${value}px`;
const getIntervalLabel = (value: number) => `${value}ms`;

const SettingsForm = ({
  cellSize,
  interval,
  onCellSizeChange,
  onIntervalChange,
}: {
  cellSize: number;
  interval: number;
  onIntervalChange: (interval: number) => void;
  onCellSizeChange: (cellSize: number) => void;
}) => {
  const handleCellSizeChange = (e: Event, value: number | number[]) => {
    onCellSizeChange(value as number);
  };

  const handleIntervalChange = (e: Event, value: number | number[]) => {
    onIntervalChange(value as number);
  };

  return (
    <Box sx={{ mx: 4, mb: 2 }}>
      <Typography id="input-slider" variant="overline">
        Cell Size
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        marks={cellSizeMarks}
        value={cellSize}
        valueLabelFormat={getCellSizeLabel}
        min={5}
        max={50}
        onChange={handleCellSizeChange}
      />
      <Typography id="input-slider" variant="overline">
        Interval
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        marks={intervalMarks}
        value={interval}
        valueLabelFormat={getIntervalLabel}
        min={5}
        step={5}
        max={500}
        onChange={handleIntervalChange}
      />
    </Box>
  );
};

export default SettingsForm;
