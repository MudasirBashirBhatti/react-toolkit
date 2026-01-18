# `useDateSuggestions` Hook Documentation

## Overview

`useDateSuggestions` is a utility hook that provides **predefined date and date-range suggestions** to improve user experience in date-based UIs.

Instead of forcing users to manually select dates, this hook offers **quick-select options** such as *Today*, *Tomorrow*, *This Week*, and *Next 7 Days*.

It is ideal for **date pickers**, **range selectors**, **filters**, and **booking systems**.

---

## Features

- Provides common **single-date** suggestions
- Provides common **date-range** suggestions
- Improves UX with one-click date selection
- Uses native JavaScript `Date`
- No external dependencies
- Easy to integrate with existing calendar hooks

---

## Function Signature

```ts
useDateSuggestions(): DateSuggestion[]
```

---

## Types

```ts
export interface DateSuggestion {
  label: string;
  type: 'single' | 'range';
  date?: Date;      // For single-date suggestions
  start?: Date;     // Range start date
  end?: Date;       // Range end date
}
```

---

## Return Value

The hook returns an array of **date suggestion objects**.

Each suggestion includes:

- `label` → Text shown to the user
- `type` → `single` or `range`
- `date` → Used when type is `single`
- `start` / `end` → Used when type is `range`

---

## Sample Output

```ts
[
  { label: 'Today', type: 'single', date: Date },
  { label: 'Tomorrow', type: 'single', date: Date },
  { label: 'This Week', type: 'range', start: Date, end: Date },
  { label: 'Next 7 Days', type: 'range', start: Date, end: Date },
  { label: 'This Month', type: 'range', start: Date, end: Date },
]
```

---

## Example Usage

### With Range Selection

```tsx
import { useDateSuggestions } from '@/hooks/useDateSuggestions';
import { useAdvancedRangeSelection } from '@/hooks/useAdvancedRangeSelection';

const DateSuggestionsBar = () => {
  const suggestions = useDateSuggestions();
  const { setRange } = useAdvancedRangeSelection();

  return (
    <div className="flex gap-2">
      {suggestions.map((s) => (
        <button
          key={s.label}
          onClick={() => {
            if (s.type === 'single' && s.date) {
              setRange({ start: s.date, end: s.date });
            }
            if (s.type === 'range' && s.start && s.end) {
              setRange({ start: s.start, end: s.end });
            }
          }}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

- Calculates **today’s date** once
- Uses helper functions to:
  - Add days
  - Determine start/end of week
  - Determine start/end of month
- Returns static, predictable suggestion objects

All calculations rely on **native JavaScript Date APIs**.

---

## Common Use Cases

- Date picker quick actions
- Booking & reservation filters
- Analytics date filters
- Reports (Last 7 days / This month)
- Calendar shortcut buttons

---

## Notes

- Week starts on **Monday (ISO-style)**
- Suggestions are recalculated on each hook call
- Can be extended for custom or dynamic suggestions

---

## Extending the Hook

You can easily add:

- Last 7 / Last 30 days
- Custom suggestion injection
- Locale-based week start
- Business-day-only ranges

---

## Summary

`useDateSuggestions` is a UX-focused helper hook that:

- ✔ Reduces user effort
- ✔ Encourages faster date selection
- ✔ Works seamlessly with range and calendar hooks
- ✔ Keeps date logic centralized

It pairs perfectly with `useCalendar`, `useAdvancedRangeSelection`, and `useDateFormatting` to build modern, user-friendly date selection experiences.

