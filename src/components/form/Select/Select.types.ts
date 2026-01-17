// Select.types.ts
import type { FieldProps } from "../Field/Field.types";
import type { ReactNode } from "react";

/** Each option in the select */
export interface Option {
  value: string | number;
  label: string;
  icon?: ReactNode;
}

/** Props for Select component */
export interface SelectProps extends Omit<FieldProps, "children"> {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
}
