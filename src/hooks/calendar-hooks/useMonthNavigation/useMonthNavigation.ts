import { useState, useCallback } from "react";

export const useMonthNavigation = (initialDate = new Date()) => {
  const [visibleMonth, setVisibleMonth] = useState(initialDate);

  const nextMonth = useCallback(() => {
    setVisibleMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1));
  }, []);

  const prevMonth = useCallback(() => {
    setVisibleMonth((d) => new Date(d.getFullYear(), d.getMonth() - 1));
  }, []);

  return {
    visibleMonth,
    year: visibleMonth.getFullYear(),
    month: visibleMonth.getMonth(),
    nextMonth,
    prevMonth,
    setVisibleMonth,
  };
};
