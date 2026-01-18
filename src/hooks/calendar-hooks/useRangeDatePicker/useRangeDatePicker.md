# `useRangeDatePicker` Hook Documentation

## Overview

`useRangeDatePicker` is a UI state management hook that controls the **open / close behavior** of a **date range picker** component.

It mirrors the behavior of a typical dropdown or popover-based range picker and provides a container `ref` that can be used for positioning or click-outside handling.

This hook focuses purely on **UI visibility control**, keeping range selection logic separate and composable.

---

## Features

- Manages **open / closed** state of a range date picker
- Provides a **container ref** for DOM access
- Exposes semantic helper methods (`show`, `hide`, `toggle`)
- Simple, predictable, and reusable
- Designed to work with range-selection hooks

---

## Function Signature

```ts
useRangeDatePicker(): {
  containerRef: React.RefObject<HTMLDivElement>;
  open: boolean;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}
```

---

## Return Value

The hook returns an object containing:

---

### **containerRef**

```ts
React.RefObject<HTMLDivElement>;
```

- Attach this ref to the range picker wrapper
- Useful for click-outside detection or popover positioning

---

### **open / isOpen**

```ts
boolean;
```

- Indicates whether the range picker is currently visible
- `isOpen` is provided as a semantic alias for readability

---

### **show**

```ts
() => void
```

Opens the range date picker.

---

### **hide**

```ts
() => void
```

Closes the range date picker.

---

### **toggle**

```ts
() => void
```

Toggles the open/closed state.

---

## Example Usage

### Range Date Picker Wrapper

```tsx
import { useRangeDatePicker } from "@/hooks/useRangeDatePicker";

const RangeDatePicker = () => {
  const { containerRef, isOpen, toggle, hide } = useRangeDatePicker();

  return (
    <div ref={containerRef} className="relative">
      <button onClick={toggle}>Select Date Range</button>

      {isOpen && (
        <div className="absolute top-full mt-2">{/* Range calendar UI */}</div>
      )}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

- Uses `useState` to track visibility
- Uses `useRef` to expose a container reference
- Provides helper methods for explicit state transitions

This keeps **UI control logic isolated** from range selection behavior.

---

## Common Use Cases

- Date range picker dropdowns
- Booking and reservation interfaces
- Analytics date range filters
- Report period selectors
- Popover-based calendar components

---

## Notes

- Does not include click-outside or escape-key handling by default
- Designed to be composed with other hooks
- Safe for SSR and client-side rendering

---

## Recommended Combinations

This hook pairs especially well with:

- `useAdvancedRangeSelection` → range logic
- `useDateRangeHover` → hover preview
- `useMultiMonthView` → multi-month calendars
- `useKeyboardNavigation` → keyboard accessibility

---

## Summary

`useRangeDatePicker` is a focused UI-control hook that:

- ✔ Manages range picker visibility
- ✔ Improves component readability
- ✔ Keeps UI and business logic separate
- ✔ Integrates seamlessly with range-based calendar hooks

It acts as the **UI controller layer** for any custom date range picker implementation.
