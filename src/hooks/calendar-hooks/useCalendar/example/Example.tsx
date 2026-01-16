"use client";

import { useCalendar } from "@/hooks/calendar-hooks/useCalendar/useCalendar";
import styles from "./Example.module.css";

interface ExampleProps {
  weekStart?: 0 | 1;
  showExtraDays?: boolean;
}
const Example = ({ showExtraDays = true, weekStart = 0 }: ExampleProps) => {
  const days = useCalendar({
    year: 2026,
    month: 0,
    weekStart,
    showExtraDays,
  });
  return (
    <div className={styles.wrapper}>
      {days.map((d, index) => (
        <span
          className={`${styles.singleDay} ${
            d.isCurrentMonth ? styles.currentMonthDays : ""
          }`}
          key={index}
        >
          {d.day}
        </span>
      ))}
    </div>
  );
};

export default Example;
