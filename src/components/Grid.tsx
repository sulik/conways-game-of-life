import { styled } from "@mui/material/styles";
import { GridType } from "../hooks/useGrid";

const GridContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "cellSize",
})(({ cellSize }: { cellSize: number }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .row": {
    display: "flex",
  },
  "& .cell": {
    display: "flex",
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    border: "1px solid rgba(128, 0, 128, 0.1)",
    "&.live": {
      background: "rgba(128, 0, 128, 0.85)",
      border: "1px solid rgba(128, 0, 128, 0.95)",
    },
  },
}));

const Grid = ({ data, cellSize }: { data: GridType; cellSize: number }) => {
  return (
    <GridContainer cellSize={cellSize}>
      {data.map((row, rowIndex) => (
        <div className="row" key={`row-${rowIndex}`}>
          {row.map((cell, colIndex) => (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              className={`cell${cell === 1 ? " live" : ""}`}
            />
          ))}
        </div>
      ))}
    </GridContainer>
  );
};

export default Grid;
