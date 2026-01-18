# `useTimeSelection` Hook Documentation

## Overview

`useTimeSelection` is a utility hook that manages **date + time selection** together.

It allows you to take an existing date and apply **hour and minute values**, producing a full `Date` object that includes time information.

This hook is especially useful for:

- Date & time pickers
- Scheduling systems
- Booking and appointment flows
- Reminders and notifications

---

## Features

- Manages a single **DateTime** value
- Allows selecting time independently of date
- Preserves date while updating hours/minutes
- Supports an optional initial value
- Simple and composable API

---

## Function Signature

```ts
useTimeSelection(
  initialDate?: Date | null
): {
  selectedDateTime: Date | null;
  selectDateTime: (date: Date, hours: number, minutes: number) => void;
  setSelectedDateTime: React.Dispatch<React.SetStateAction<Date | null>>;
}
```

---

## Parameters

### **initialDate** `(Date | null, optional)`

Initial date-time value.

- Default: `null`
- Useful for editing existing events or prefilled forms

Example:

```ts
new Date(2026, 0, 15, 10, 30);
```

---

## Return Value

The hook returns an object containing:

---

### **selectedDateTime**

```ts
Date | null;
```

Represents the currently selected **date and time**.

---

### **selectDateTime**

```ts
(date: Date, hours: number, minutes: number) => void
```

Creates a new `Date` by:

- Copying the provided date
- Applying `hours` and `minutes`
- Resetting seconds and milliseconds to `0`

This ensures a clean and predictable DateTime value.

---

### **setSelectedDateTime**

```ts
(date: Date | null) => void
```

Allows direct control over the DateTime state.

Useful for:

- Clearing the selection
- Setting values programmatically
- Syncing with external state

---

## Example Usage

### Date & Time Picker

```tsx
import { useTimeSelection } from "@/hooks/useTimeSelection";

const DateTimePicker = () => {
  const { selectedDateTime, selectDateTime } = useTimeSelection();

  return (
    <div>
      <button onClick={() => selectDateTime(new Date(2026, 0, 15), 14, 30)}>
        Set 14:30
      </button>

      <p>
        {selectedDateTime ? selectedDateTime.toString() : "No time selected"}
      </p>
    </div>
  );
};
```

---

## Sample Output

```ts
selectedDateTime;
// Date: Thu Jan 15 2026 14:30:00
```

---

## How It Works (Internal Logic)

```ts
const newDate = new Date(date);
newDate.setHours(hours, minutes, 0, 0);
```

- Clones the provided date
- Applies time safely
- Avoids mutating the original date object

---

## Common Use Cases

- Appointment scheduling
- Event creation forms
- Booking systems
- Reminder setup
- Calendar events with time

---

## Notes

- Hours should be in `0–23` range
- Minutes should be in `0–59` range
- Timezone behavior follows browser settings

---

## Recommended Combinations

This hook pairs especially well with:

- `useDateSelection` → pick the date
- `useDateFormatting` → display date & time
- `useRecurrence` → recurring date-times
- `useDatePicker` → open/close UI

---

## Summary

`useTimeSelection` is a clean and practical hook that:

- ✔ Combines date and time selection
- ✔ Keeps DateTime logic centralized
- ✔ Avoids date mutation bugs
- ✔ Integrates seamlessly with calendar systems

It completes the **date + time selection layer** of a modern scheduling and booking architecture.
