export const useDateHighlights = (
  events: { date: Date; label: string }[] = []
) => {
  const isHighlighted = (date: Date) =>
    events.some((event) => event.date.toDateString() === date.toDateString());

  const getLabel = (date: Date) =>
    events.find((event) => event.date.toDateString() === date.toDateString())
      ?.label;

  return { isHighlighted, getLabel };
};
