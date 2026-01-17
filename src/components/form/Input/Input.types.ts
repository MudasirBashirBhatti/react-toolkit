import { InputHTMLAttributes } from "react";
import { FieldProps } from "../Field";

export interface InputProps
  extends Omit<FieldProps, "children">, InputHTMLAttributes<HTMLInputElement> {}
