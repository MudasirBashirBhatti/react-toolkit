export const useTimeZoneDate = (timeZone = "UTC") => {
  const toTimeZone = (date: Date) =>
    new Date(
      new Intl.DateTimeFormat("en-US", {
        timeZone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(date),
    );

  return { toTimeZone };
};
