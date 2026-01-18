import { useState } from "react";

export const useDateRangeHover = () => {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  return { hoveredDate, setHoveredDate };
};
