export interface RecurrenceRule {
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  interval?: number; // every n units
  weekdays?: number[]; // 0=Sun, 6=Sat
}

export const useRecurrence = (start: Date, rule: RecurrenceRule) => {
  const getOccurrences = (count: number = 10) => {
    const occurrences: Date[] = [];
    const current = new Date(start);

    while (occurrences.length < count) {
      switch (rule.frequency) {
        case "daily":
          current.setDate(current.getDate() + (rule.interval || 1));
          break;
        case "weekly":
          current.setDate(current.getDate() + 7 * (rule.interval || 1));
          break;
        case "monthly":
          current.setMonth(current.getMonth() + (rule.interval || 1));
          break;
        case "yearly":
          current.setFullYear(current.getFullYear() + (rule.interval || 1));
          break;
      }
      if (!rule.weekdays || rule.weekdays.includes(current.getDay())) {
        occurrences.push(new Date(current));
      }
    }

    return occurrences;
  };

  return { getOccurrences };
};
