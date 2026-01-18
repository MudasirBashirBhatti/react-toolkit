/**
 * useToday
 * Purpose:
 * - Provides the current date and a helper to check if a date is today
 *
 * How it works:
 * - `today`: a Date object representing the current date/time
 * - `isToday(date)`: returns true if the given date is the same calendar day as today
 *
 * Use case:
 * - Highlighting the current day in calendars or date pickers
 * - Quickly checking if a date matches today without comparing times
 */

export const useToday = () => {
  const today = new Date();

  const isToday = (date: Date) => date.toDateString() === today.toDateString();

  return { today, isToday };
};
