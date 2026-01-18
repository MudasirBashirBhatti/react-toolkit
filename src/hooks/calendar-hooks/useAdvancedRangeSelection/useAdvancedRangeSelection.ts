import { useState } from "react";

export interface RangeRules {
  maxDays?: number; // Maximum allowed days in a range
  minDays?: number; // Minimum required days in a range
}

/**
 * useAdvancedRangeSelection
 * Purpose:
 * - Manages selection of a date range with optional constraints
 *
 * How it works:
 * - `range`: current start and end dates of the range
 * - `selectDate(date)`: updates the range intelligently:
 *     • Starts a new range if start/end are empty
 *     • Swaps start/end if selected date is before start
 *     • Enforces min/max day constraints if provided
 * - `clear()`: resets the range to { start: null, end: null }
 * - `setRange()`: allows direct range updates
 *
 * Use case:
 * - Date pickers with rules like maximum booking days or minimum rental period
 * - Ensures user cannot select invalid date ranges
 */
export const useAdvancedRangeSelection = (rules?: RangeRules) => {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const selectDate = (date: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      const diff = Math.ceil(
        (date.getTime() - range.start.getTime()) / 86400000
      );
      if (
        (rules?.maxDays && diff > rules.maxDays) ||
        (rules?.minDays && diff < rules.minDays)
      )
        return;
      setRange({ start: range.start, end: date });
    }
  };

  const clear = () => setRange({ start: null, end: null });

  return { range, selectDate, clear, setRange };
};
