import { useMemo } from "react";

/**
 * Returns a list of days to show in a month calendar.
 *
 * The list contains:
 * - All days of the selected month
 * - Some extra days at the start (from the previous month)
 *
 * Each item in the list represents one calendar box and tells:
 * - the date
 * - the day number (1–31, or 0 for extra days)
 * - whether the day belongs to the selected month or not
 *
 * Example:
 * useCalendar(2024, 0, 0)
 *
 * Returns something like:
 * [
 *   { day: 0, isCurrentMonth: false },
 *   { day: 1, isCurrentMonth: true },
 *   { day: 2, isCurrentMonth: true },
 *   ...
 * ]
 */

export interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
}

export const useCalendar = ({
  month,
  weekStart = 0,
  year,
  showExtraDays,
}: {
  year: number;
  month: number;
  weekStart?: 0 | 1;
  showExtraDays?: boolean;
}) => {
  return useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1);
    const nativeStartDay = firstDayOfMonth.getDay();
    const startDay = (nativeStartDay - weekStart + 7) % 7;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: CalendarDay[] = [];

    // ===== Previous month days =====
    if (!showExtraDays) {
      for (let i = 0; i < startDay; i++) {
        days.push({
          date: new Date(year, month, i - startDay + 1),
          day: 0,
          isCurrentMonth: false,
        });
      }
    }

    if (showExtraDays) {
      const lastDayPrevMonth = new Date(year, month, 0).getDate();
      for (let i = 0; i < startDay; i++) {
        days.push({
          date: new Date(year, month - 1, lastDayPrevMonth - startDay + i + 1),
          day: lastDayPrevMonth - startDay + i + 1,
          isCurrentMonth: false,
        });
      }
    }

    // ===== Current month days =====
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        day: i,
        isCurrentMonth: true,
      });
    }

    // ===== Trailing next month days =====
    // const totalCells = Math.ceil(days.length / 7) * 7;
    const totalCells = 6 * 7; // maintain 42
    const trailingDays = totalCells - days.length;

    for (let i = 1; i <= trailingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        day: showExtraDays ? i : 0,
        isCurrentMonth: false,
      });
    }

    return days;
  }, [year, month, weekStart, showExtraDays]);
};
