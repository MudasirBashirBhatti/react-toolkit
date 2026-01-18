# `useDatePicker` Hook Documentation

## Overview

`useDatePicker` is a small UI state management hook that controls the **open / close behavior** of a date picker component.

It also exposes a `ref` that can be attached to the date picker container, making it ideal for:

- Dropdown-style date pickers
- Popovers and modals
- Click-outside handling
- Controlled calendar visibility

---

## Features

- Manages **open / closed** state of a date picker
- Provides a **container ref** for DOM access
- Exposes semantic helper methods (`show`, `hide`, `toggle`)
- Simple and UI-focused
- Works with any calendar or date selection logic

---

## Function Signature

```ts
useDatePicker(): {
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
React.RefObject<HTMLDivElement>
```

- Attach this ref to the date picker wrapper
- Useful for click-outside or positioning logic

---

### **open / isOpen**

```ts
boolean
```

- Represents whether the date picker is currently visible
- `isOpen` is provided as a semantic alias for readability

---

### **show**

```ts
() => void
```

Sets the date picker state to **open**.

---

### **hide**

```ts
() => void
```

Sets the date picker state to **closed**.

---

### **toggle**

```ts
() => void
```

Toggles the open/closed state.

---

## Example Usage

```tsx
import { useDatePicker } from '@/hooks/useDatePicker';

const DatePickerWrapper = () => {
  const { containerRef, isOpen, toggle, hide } = useDatePicker();

  return (
    <div ref={containerRef} className="relative">
      <button onClick={toggle}>Select Date</button>

      {isOpen && (
        <div className="absolute top-full mt-2">
          {/* Calendar Component */}
        </div>
      )}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

- Uses `useState` to track visibility
- Uses `useRef` to expose a container DOM reference
- Provides helper methods for predictable state updates

This keeps UI logic **separated from date logic**.

---

## Common Use Cases

- Dropdown date pickers
- Calendar popovers
- Range picker containers
- Modal-style date selectors
- Controlled calendar visibility

---

## Notes

- Does not include click-outside handling by default
- Designed to be composed with other hooks
- Safe for SSR and client components

---

## Recommended Combinations

This hook pairs well with:

- `useCalendar` → calendar grid
- `useAdvancedRangeSelection` → range logic
- `useDateSuggestions` → quick presets
- `useDateConstraints` → disabled dates

---

## Summary

`useDatePicker` is a clean, UI-focused hook that:

- ✔ Manages date picker visibility
- ✔ Improves component readability
- ✔ Keeps state logic reusable
- ✔ Integrates seamlessly with calendar hooks

It acts as the **UI controller layer** for any custom date picker or calendar component.

