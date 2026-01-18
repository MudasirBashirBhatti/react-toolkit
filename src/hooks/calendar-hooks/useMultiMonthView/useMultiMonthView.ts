import { useState } from "react";

export const useMultiMonthView = (
  initialDate: Date = new Date(),
  monthsToShow = 3,
) => {
  const [visibleMonth, setVisibleMonth] = useState(initialDate);

  const nextMonth = () =>
    setVisibleMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1),
    );
  const prevMonth = () =>
    setVisibleMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1),
    );

  const months = Array.from(
    { length: monthsToShow },
    (_, i) => new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + i),
  );

  return { visibleMonth, months, nextMonth, prevMonth, setVisibleMonth };
};
