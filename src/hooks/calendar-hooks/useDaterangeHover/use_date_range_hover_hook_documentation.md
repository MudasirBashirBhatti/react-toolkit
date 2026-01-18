# `useDateRangeHover` Hook Documentation

## Overview

`useDateRangeHover` is a lightweight UI state hook that tracks the **currently hovered date** during date range selection.

It is commonly used in **range date pickers** to provide a **live preview** of the range while the user is hovering over dates before confirming the end date.

This hook focuses purely on **UI interaction state**, keeping hover logic cleanly separated from selection logic.

---

## Features

- Tracks the currently hovered date
- Enables live **range preview** in calendars
- Simple and predictable state management
- Easy to compose with range selection hooks
- Minimal and performance-friendly

---

## Function Signature

```ts
useDateRangeHover(): {
  hoveredDate: Date | null;
  setHoveredDate: React.Dispatch<React.SetStateAction<Date | null>>;
}
```

---

## Return Value

The hook returns an object containing:

---

### **hoveredDate**

```ts
Date | null
```

- Represents the date currently under the user’s cursor
- `null` when no date is being hovered

---

### **setHoveredDate**

```ts
(date: Date | null) => void
```

- Updates the hovered date state
- Can be set on mouse enter / leave events

---

## Example Usage

### Range Picker Hover Preview

```tsx
import { useDateRangeHover } from '@/hooks/useDateRangeHover';
import { useAdvancedRangeSelection } from '@/hooks/useAdvancedRangeSelection';
import { useDateComparison } from '@/hooks/useDateComparison';

const CalendarDay = ({ date }: { date: Date }) => {
  const { hoveredDate, setHoveredDate } = useDateRangeHover();
  const { range } = useAdvancedRangeSelection();
  const { isInRange } = useDateComparison();

  const isPreviewRange =
    range.start && !range.end && hoveredDate &&
    isInRange(date, range.start, hoveredDate);

  return (
    <div
      onMouseEnter={() => setHoveredDate(date)}
      onMouseLeave={() => setHoveredDate(null)}
      className={isPreviewRange ? 'bg-blue-100' : ''}
    >
      {date.getDate()}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
```

- Uses React state to track hover
- No side effects or calculations
- Designed for composition with other hooks

---

## Common Use Cases

- Date range hover previews
- Interactive booking calendars
- Airbnb-style range pickers
- Visual feedback during selection
- UX improvements in calendar UIs

---

## Notes

- Hover state is **UI-only** and not persisted
- Best used alongside `useAdvancedRangeSelection`
- Reset hover state on mouse leave for clean UX

---

## Recommended Combinations

This hook pairs especially well with:

- `useAdvancedRangeSelection` → confirmed range
- `useDateComparison` → range checks
- `useDatePicker` → open/close control
- `useCalendar` → calendar grid

---

## Summary

`useDateRangeHover` is a focused UX helper hook that:

- ✔ Enables live range previews
- ✔ Improves date picker interactivity
- ✔ Keeps hover logic isolated
- ✔ Integrates seamlessly with range systems

It completes the interac