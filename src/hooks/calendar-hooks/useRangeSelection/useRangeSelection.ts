import { useState, useCallback } from "react";

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export const useRangeSelection = (
  initial?: DateRange,
  onChange?: (range: DateRange) => void,
) => {
  const [range, setRange] = useState<DateRange>({
    start: initial?.start ?? null,
    end: initial?.end ?? null,
  });

  const selectDate = useCallback(
    (date: Date) => {
      setRange((prev) => {
        let nextRange: DateRange;

        if (!prev.start || (prev.start && prev.end)) {
          nextRange = { start: date, end: null };
        } else if (date < prev.start) {
          nextRange = { start: date, end: prev.start };
        } else {
          nextRange = { start: prev.start, end: date };
        }

        onChange?.(nextRange);
        return nextRange;
      });
    },
    [onChange],
  );

  const clear = useCallback(() => {
    const empty = { start: null, end: null };
    setRange(empty);
    onChange?.(empty);
  }, [onChange]);

  return {
    range,
    selectDate,
    clear,
  };
};
