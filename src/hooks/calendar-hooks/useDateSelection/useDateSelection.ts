import { useState, useCallback } from "react";

export const useDateSelection = (
  initial: Date | null = null,
  onChange?: (date: Date | null) => void
) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initial);

  const selectDate = useCallback(
    (date: Date) => {
      setSelectedDate(date);
      onChange?.(date);
    },
    [onChange]
  );

  const clear = useCallback(() => {
    setSelectedDate(null);
    onChange?.(null);
  }, [onChange]);

  return {
    selectedDate,
    selectDate,
    clear,
  };
};
