export interface DateSuggestion {
  label: string;
  type: "single" | "range";
  date?: Date;
  start?: Date;
  end?: Date;
}

export const useDateSuggestions = (): DateSuggestion[] => {
  const today = new Date();

  const addDays = (base: Date, days: number) => {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
  };

  const startOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay() || 7; // ISO (Monday = 1)
    d.setDate(d.getDate() - day + 1);
    return d;
  };

  const endOfWeek = (date: Date) => addDays(startOfWeek(date), 6);

  const startOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);

  const endOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return [
    {
      label: "Today",
      type: "single",
      date: today,
    },
    {
      label: "Tomorrow",
      type: "single",
      date: addDays(today, 1),
    },
    {
      label: "This Week",
      type: "range",
      start: startOfWeek(today),
      end: endOfWeek(today),
    },
    {
      label: "Next 7 Days",
      type: "range",
      start: today,
      end: addDays(today, 6),
    },
    {
      label: "This Month",
      type: "range",
      start: startOfMonth(today),
      end: endOfMonth(today),
    },
  ];
};
