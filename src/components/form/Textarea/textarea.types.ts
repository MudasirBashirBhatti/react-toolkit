import { TextareaHTMLAttributes } from "react";
import { FieldProps } from "../Field";

interface TextareaProps
  extends
    Omit<FieldProps, "children" | "onClick">,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

export type { TextareaProps };
