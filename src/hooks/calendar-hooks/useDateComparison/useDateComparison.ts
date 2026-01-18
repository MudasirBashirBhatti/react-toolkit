export const useDateComparison = () => {
  const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

  const isBefore = (a: Date, b: Date) => a.getTime() < b.getTime();

  const isAfter = (a: Date, b: Date) => a.getTime() > b.getTime();

  const isInRange = (date: Date, start: Date, end: Date) =>
    date >= start && date <= end;

  return { isSameDay, isBefore, isAfter, isInRange };
};
