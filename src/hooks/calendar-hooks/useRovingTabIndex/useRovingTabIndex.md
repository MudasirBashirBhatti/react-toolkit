# `useRovingTabIndex` Hook Documentation

## Overview

`useRovingTabIndex` is an accessibility-focused hook that implements the **roving tabindex pattern**.

It ensures that **only one interactive element is focusable at a time** (`tabIndex = 0`), while all others are removed from the tab order (`tabIndex = -1`).

This pattern is a core requirement for **accessible keyboard navigation** in components such as:

- Calendars
- Menus
- Lists
- Tabs
- Grids

---

## Features

- Implements the WAI-ARIA **roving tabindex** pattern
- Ensures correct keyboard focus behavior
- Keeps focus logic declarative and reusable
- Lightweight and dependency-free
- Works seamlessly with keyboard navigation hooks

---

## Function Signature

```ts
useRovingTabIndex(
  activeId: string
): (id: string) => { tabIndex: number }
```

---

## Parameters

### **activeId** `(string)`

The ID of the element that should currently be focusable.

- The active element receives `tabIndex = 0`
- All other elements receive `tabIndex = -1`

Example:

```ts
"2026-01-15";
```

---

## Return Value

The hook returns a function that generates `tabIndex` props.

```ts
(id: string) => ({ tabIndex: number });
```

This function is typically spread directly onto focusable elements.

---

## Example Usage

### Calendar Day Roving Focus

```tsx
import { useRovingTabIndex } from "@/hooks/useRovingTabIndex";
import { useFocusManagement } from "@/hooks/useFocusManagement";

const CalendarGrid = ({ days }: { days: { id: string; date: Date }[] }) => {
  const { focusedDateRef } = useFocusManagement();
  const rovingTabIndex = useRovingTabIndex(
    focusedDateRef.current?.toISOString() ?? "",
  );

  return (
    <div role="grid">
      {days.map((day) => (
        <button key={day.id} role="gridcell" {...rovingTabIndex(day.id)}>
          {day.date.getDate()}
        </button>
      ))}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
(id: string) => ({
  tabIndex: id === activeId ? 0 : -1,
});
```

- Compares each element’s ID with `activeId`
- Assigns the correct `tabIndex` value
- Leaves actual focus movement to keyboard handlers

---

## Common Use Cases

- Calendar day navigation
- Roving focus in menus
- Listbox and option navigation
- Tab panels
- Custom grid components

---

## Notes

- This hook **does not move focus automatically**
- Must be used alongside keyboard handlers
- Follows WAI-ARIA Authoring Practices

---

## Recommended Combinations

This hook pairs perfectly with:

- `useKeyboardNavigation` → arrow-key logic
- `useFocusManagement` → focused item tracking
- `useDatePicker` → focus lifecycle
- `useCalendar` → grid rendering

---

## Summary

`useRovingTabIndex` is a critical accessibility helper that:

- ✔ Enforces correct tab order
- ✔ Enables keyboard-friendly UIs
- ✔ Keeps focus logic declarative
- ✔ Completes the a11y layer of calendar systems

It plays a key role in building \*\*WCAG-compliant, keyboard-accessible date pick
