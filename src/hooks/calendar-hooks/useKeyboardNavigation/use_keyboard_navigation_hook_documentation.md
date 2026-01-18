# `useKeyboardNavigation` Hook Documentation

## Overview

`useKeyboardNavigation` is a utility hook that standardizes **keyboard arrow navigation logic** for calendar and grid-based components.

It translates **arrow key presses** into numeric offsets, allowing your UI to move focus or selection without embedding keyboard logic directly inside components.

This hook is especially useful for **accessible calendars**, **date pickers**, and **grid navigation** patterns.

---

## Features

- Handles arrow key navigation (`↑ ↓ ← →`)
- Converts key presses into **directional offsets**
- Uses `useCallback` for stable handler references
- Keeps keyboard logic reusable and centralized
- Improves accessibility (a11y)

---

## Function Signature

```ts
useKeyboardNavigation(
  onNavigate: (offset: number) => void
): (e: React.KeyboardEvent) => void
```

---

## Parameters

### **onNavigate** `(function)`

```ts
(offset: number) => void
```

A callback that receives a numeric offset based on the pressed key:

| Key          | Offset | Meaning                |
|-------------|--------|------------------------|
| ArrowRight  | `+1`   | Move forward one day   |
| ArrowLeft   | `-1`   | Move back one day      |
| ArrowDown   | `+7`   | Move forward one week |
| ArrowUp     | `-7`   | Move back one week    |

The consuming component decides how to apply this offset.

---

## Return Value

The hook returns a **keyboard event handler**:

```ts
(e: React.KeyboardEvent) => void
```

This handler can be attached directly to focusable elements.

---

## Example Usage

### Calendar Keyboard Navigation

```tsx
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { useFocusManagement } from '@/hooks/useFocusManagement';

const CalendarGrid = ({ dates }: { dates: Date[] }) => {
  const { focusedDateRef, setFocusedDate } = useFocusManagement();

  const onNavigate = (offset: number) => {
    if (!focusedDateRef.current) return;

    const next = new Date(focusedDateRef.current);
    next.setDate(next.getDate() + offset);
    setFocusedDate(next);
  };

  const handleKeyDown = useKeyboardNavigation(onNavigate);

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      {/* calendar cells */}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
switch (e.key) {
  case 'ArrowRight': onNavigate(1); break;
  case 'ArrowLeft':  onNavigate(-1); break;
  case 'ArrowDown':  onNavigate(7); break;
  case 'ArrowUp':    onNavigate(-7); break;
}
```

- Maps arrow keys to logical movement offsets
- Delegates navigation behavior to the caller
- Keeps the hook UI-agnostic

---

## Common Use Cases

- Calendar keyboard navigation
- Accessible date pickers
- Grid and table navigation
- Roving focus systems
- Power-user keyboard shortcuts

---

## Notes

- Does not call `preventDefault()` by default
- Offset values assume a **7-day calendar grid**
- Can be extended to support Home / End / PageUp keys

---

## Recommended Combinations

This hook pairs perfectly with:

- `useFocusManagement` → track focused date
- `useCalendar` → calendar structure
- `useDateSelection` → select via keyboard
- `useDatePicker` → open/close behavior

---

## Summary

`useKeyboardNavigation` is a focused accessibility helper hook that:

- ✔ Centralizes arrow-key logic
- ✔ Keeps components clean
- ✔ Improves keyboard accessibility
- ✔ Works seamlessly with focus & calendar hooks

It completes the **keyboard interaction layer** of a modern, accessible date picker system.