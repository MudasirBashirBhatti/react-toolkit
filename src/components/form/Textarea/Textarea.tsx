import { Field } from "../Field/Field";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./textarea.types";

export const Textarea = ({
  label,
  hint,
  error,
  id,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: TextareaProps) => {
  return (
    <Field
      label={label}
      hint={hint}
      error={error}
      disabled={disabled}
      id={id}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      <textarea
        id={id}
        disabled={disabled}
        className={styles.textarea}
        {...props}
      />
    </Field>
  );
};
