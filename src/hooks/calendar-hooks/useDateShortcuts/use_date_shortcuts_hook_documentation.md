# `useDateShortcuts` Hook Documentation

## Overview

`useDateShortcuts` is a small utility hook that provides **quick-access date and date-range shortcuts** commonly used in dashboards, reports, filters, and date pickers.

It allows users to instantly select frequently used time periods like **Today** or **Last 7 Days**, improving usability and reducing manual date input.

---

## Features

- Provides reusable **date shortcut functions**
- Supports both **single-date** and **date-range** shortcuts
- Uses native JavaScript `Date`
- Simple, predictable, and UI-friendly
- Ideal for analytics, reporting, and filter UIs

---

## Function Signature

```ts
useDateShortcuts(): {
  today: () => Date;
  last7Days: () => { start: Date; end: Date };
}
```

---

## Return Value

The hook returns an object containing shortcut helper functions.

---

### **today**

```ts
() => Date
```

Returns today’s date.

Example:
```ts
today(); // Date (now)
```

---

### **last7Days**

```ts
() => {
  start: Date;
  end: Date;
}
```

Returns an object representing the **last 7 days range**, inclusive of today.

- `start` → 6 days before today
- `end` → today

---

## Sample Output

```ts
{
  today: ƒ,
  last7Days: ƒ,
}
```

Example result:

```ts
last7Days();
// {
//   start: Date (6 days ago),
//   end: Date (today)
// }
```

---

## Example Usage

### With Date Range Selection

```tsx
import { useDateShortcuts } from '@/hooks/useDateShortcuts';
import { useAdvancedRangeSelection } from '@/hooks/useAdvancedRangeSelection';

const DateShortcutButtons = () => {
  const { today, last7Days } = useDateShortcuts();
  const { setRange } = useAdvancedRangeSelection();

  return (
    <div className="flex gap-2">
      <button onClick={() => {
        const d = today();
        setRange({ start: d, end: d });
      }}>
        Today
      </button>

      <button onClick={() => {
        const range = last7Days();
        setRange(range);
      }}>
        Last 7 Days
      </button>
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
const today = new Date();
```

- Captures today’s date once when the hook is initialized

```ts
last7Days: () => ({
  start: new Date(today.getTime() - 6 * 86400000),
  end: today,
});
```

- Calculates date ranges using millisecond offsets
- Keeps logic simple and dependency-free

---

## Common Use Cases

- Analytics dashboards (Last 7 days)
- Reports and charts
- Date filter shortcuts
- Booking and activity history views
- Admin panels

---

## Notes

- Time values are preserved in returned dates
- Day length is calculated using `86400000 ms`
- For longer-running apps, consider recalculating `today`

---

## Recommended Combinations

This hook pairs especially well with:

- `useAdvancedRangeSelection` → apply ranges
- `useDateSelection` → single-day selection
- `useDateFormatting` → display formatting
- `useDatePicker` → UI control

---

## Summary

`useDateShortcuts` is a simple yet powerful UX helper hook that:

- ✔ Provides instant date selections
- ✔ Reduces user effort
- ✔ Centralizes shortcut logic
- ✔ Fits naturally into date picker and filter systems

It complements `useDateSuggestions` by focusing on **programmatic shortcuts** for filters and reports.

