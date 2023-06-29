import { useRef, useEffect, useCallback, useState } from "react";

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (started) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay, started]);

  const start = useCallback(() => {
    setStarted(true);
  }, []);

  const pause = useCallback(() => {
    setStarted(false);
  }, []);

  return { start, pause, started };
};
