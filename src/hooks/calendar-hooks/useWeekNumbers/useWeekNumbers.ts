/**
 * useWeekNumbers
 * Purpose:
 * - Calculates the ISO week numbers for a given month of a specific year
 *
 * How it works:
 * - `getWeekNumber(date)`: computes the ISO week number for a given date
 *     • Weeks start on Monday
 *     • Week 1 is the week containing January 4th
 * - Loops through up to 6 weeks starting from the first day of the month
 * - Returns an array of week numbers corresponding to each week in that month
 *
 * Use case:
 * - Displaying week numbers in calendar headers
 * - Useful for scheduling apps, planners, or any weekly view
 */

export const useWeekNumbers = (year: number, month: number) => {
  const getWeekNumber = (date: Date) => {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((+d - +yearStart) / 86400000 + 1) / 7);
  };

  const firstDay = new Date(year, month, 1);
  const weeks: number[] = [];

  for (let i = 0; i < 6; i++) {
    const d = new Date(firstDay);
    d.setDate(firstDay.getDate() + i * 7);
    weeks.push(getWeekNumber(d));
  }

  return weeks;
};
