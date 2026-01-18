export const useDateShortcuts = () => {
  const today = new Date();

  return {
    today: () => today,
    last7Days: () => ({
      start: new Date(today.getTime() - 6 * 86400000),
      end: today,
    }),
  };
};
