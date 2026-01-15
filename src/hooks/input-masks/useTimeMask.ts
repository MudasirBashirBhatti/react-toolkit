import { useInputMask } from "./useInputMask";

/**
 * useTimeMask
 *
 * Formats time as HH:MM progressively
 * Clamps hours (0–23) and minutes (0–59)
 * Normalizes to HH:MM:SS for backend (PostgreSQL TIME)
 */
export function useTimeMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 4, // HHMM

    formatter: (val) => {
      const numbers = val.replace(/\D/g, "").slice(0, 4);

      let hour = numbers.slice(0, 2);
      let minute = numbers.slice(2, 4);

      // Clamp hour if fully entered
      if (hour.length === 2) {
        let hourNum = parseInt(hour, 10);
        hourNum = Math.max(0, Math.min(23, hourNum));
        hour = String(hourNum).padStart(2, "0");
      }

      // Clamp minute if fully entered
      if (minute.length === 2) {
        let minNum = parseInt(minute, 10);
        minNum = Math.max(0, Math.min(59, minNum));
        minute = String(minNum).padStart(2, "0");
      }

      if (numbers.length <= 2) return hour;
      return `${hour}:${minute}`;
    },

    normalizer: (val) => {
      const numbers = val.replace(/\D/g, "").slice(0, 4);
      if (numbers.length < 4) return numbers; // incomplete time

      let hour = parseInt(numbers.slice(0, 2), 10);
      let minute = parseInt(numbers.slice(2, 4), 10);

      hour = Math.max(0, Math.min(23, hour));
      minute = Math.max(0, Math.min(59, minute));

      // Backend-safe Postgres TIME
      return `${String(hour).padStart(2, "0")}:${String(minute).padStart(
        2,
        "0"
      )}:00`;
    },
  });
}
