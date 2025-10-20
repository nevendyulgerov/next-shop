import { useCallback, useEffect, useRef } from "react";

export const useCloseOutside = <T extends HTMLElement>(
  callback: () => void,
) => {
  const ref = useRef<T>(null);

  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [onMouseDown]);

  return ref;
};
