import { useInputMask } from "./useInputMask";

/**
 * useDateMask
 *
 * A reusable date input mask hook for React.
 * Only allows numeric input and formats it as a date (DD/MM/YYYY) progressively.
 */
export function useDateMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 8, // DDMMYYYY

    formatter: (val) => {
      const numbers = val.replace(/\D/g, "").slice(0, 8);

      let day = numbers.slice(0, 2);
      let month = numbers.slice(2, 4);
      const year = numbers.slice(4, 8);

      // Clamp day if fully entered
      if (day.length === 2) {
        let dayNum = parseInt(day, 10);
        dayNum = Math.max(1, Math.min(31, dayNum));
        day = String(dayNum).padStart(2, "0");
      }

      // Clamp month if fully entered
      if (month.length === 2) {
        let monthNum = parseInt(month, 10);
        monthNum = Math.max(1, Math.min(12, monthNum));
        month = String(monthNum).padStart(2, "0");
      }

      // Clamp day based on month & year if full date entered
      if (numbers.length === 8) {
        const dayNum = parseInt(day, 10);
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10);

        // JS Date: months are 1-based here for last day computation
        const maxDay = new Date(yearNum, monthNum, 0).getDate();
        const finalDay = Math.min(dayNum, maxDay);
        day = String(finalDay).padStart(2, "0");
      }

      if (numbers.length <= 2) return day;
      if (numbers.length <= 4) return `${day}/${month}`;
      return `${day}/${month}/${year}`;
    },

    normalizer: (val) => {
      const numbers = val.replace(/\D/g, "").slice(0, 8);
      if (numbers.length < 8) return numbers; // incomplete date

      let day = parseInt(numbers.slice(0, 2), 10);
      let month = parseInt(numbers.slice(2, 4), 10);
      const year = parseInt(numbers.slice(4, 8), 10);

      // Clamp month
      month = Math.max(1, Math.min(12, month));

      // Clamp day based on month & leap years
      const maxDay = new Date(year, month, 0).getDate();
      day = Math.max(1, Math.min(maxDay, day));

      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
        2,
        "0"
      )}`;
    },
  });
}
