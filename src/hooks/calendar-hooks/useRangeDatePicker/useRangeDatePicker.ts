import { useState, useRef } from "react";

export const useRangeDatePicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return {
    containerRef,
    open,
    isOpen: open,
    show: () => setOpen(true),
    hide: () => setOpen(false),
    toggle: () => setOpen((v) => !v),
  };
};
