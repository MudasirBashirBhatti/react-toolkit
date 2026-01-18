import { useRef } from "react";

export const useFocusManagement = () => {
  const focusedDateRef = useRef<Date | null>(null);

  const setFocusedDate = (date: Date) => {
    focusedDateRef.current = date;
  };

  return { focusedDateRef, setFocusedDate };
};
