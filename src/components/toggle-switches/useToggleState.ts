import { useState } from "react";

interface UseToggleState<T> {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}

export function useToggleState<T>({
  value,
  defaultValue,
  onChange,
}: UseToggleState<T>) {
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  const currentValue = isControlled ? value : internalValue;

  const setValue = (nextValue: T) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return {
    value: currentValue,
    setValue,
    isControlled,
  };
}
