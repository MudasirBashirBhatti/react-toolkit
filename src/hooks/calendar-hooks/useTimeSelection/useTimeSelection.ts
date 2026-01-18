import { useState } from "react";
export const useTimeSelection = (initialDate: Date | null = null) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(
    initialDate,
  );

  const selectDateTime = (date: Date, hours: number, minutes: number) => {
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, 0, 0);
    setSelectedDateTime(newDate);
  };

  return { selectedDateTime, selectDateTime, setSelectedDateTime };
};
