import { ReactNode } from "react";

interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorIcon?: ReactNode;
  children: ReactNode;
  id?: string;
}
export type { FieldProps };
