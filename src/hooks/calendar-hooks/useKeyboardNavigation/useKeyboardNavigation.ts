import { useCallback } from "react";

export const useKeyboardNavigation = (onNavigate: (offset: number) => void) => {
  return useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          onNavigate(1);
          break;
        case "ArrowLeft":
          onNavigate(-1);
          break;
        case "ArrowDown":
          onNavigate(7);
          break;
        case "ArrowUp":
          onNavigate(-7);
          break;
      }
    },
    [onNavigate]
  );
};
