import { Box, LinearProgress, Typography } from "@mui/material";
import { DimensionsType } from "../hooks/useDimensions";
import { GridType } from "../hooks/useGrid";

const SettingsInfo = ({
  grid,
  genCount,
  width,
  height,
}: DimensionsType & {
  grid: GridType;
  genCount: number;
}) => {
  const totalCells = width * height;
  const liveCells = grid.reduce(
    (acc1, row) => acc1 + row.reduce((acc2, cell) => acc2 + cell, 0),
    0
  );
  const deadCells = totalCells - liveCells;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {`Generation: ${genCount}`}
      </Typography>
      <Typography variant="body2">{`Total: ${totalCells} (${width} cols × ${height} rows)`}</Typography>
      <Typography variant="body2">{`Live: ${liveCells}`}</Typography>
      <Typography variant="body2">{`Dead: ${deadCells}`}</Typography>
      <Typography variant="body2" sx={{ mb: 0.5 }}>
        Live / Dead:
      </Typography>
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={(liveCells / deadCells) * 100}
      />
    </Box>
  );
};

export default SettingsInfo;
