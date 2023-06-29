import { useEffect, useState } from "react";

export interface DimensionsType {
  width: number;
  height: number;
}

const getViewport = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { width, height };
};

const getDimensions = (vw: number, vh: number, cellSize: number) => {
  const width = Math.max(3, Math.floor(vw / cellSize));
  const height = Math.max(3, Math.floor(vh / cellSize));
  return { width, height };
};

export const useDimensions = (cellSize: number): DimensionsType => {
  const [viewport, setViewport] = useState(getViewport());
  const [dimensions, setDimensions] = useState(
    getDimensions(viewport.width, viewport.height, cellSize)
  );

  useEffect(() => {
    const resize = () => {
      const { width, height } = getViewport();
      setViewport({ width, height });
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    setDimensions(getDimensions(viewport.width, viewport.height, cellSize));
  }, [cellSize, viewport.height, viewport.width]);

  return dimensions;
};
