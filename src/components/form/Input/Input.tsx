import { Field } from "../Field/Field";
import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export const Input = ({
  label,
  hint,
  error,
  id,
  disabled,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) => {
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
      <input id={id} disabled={disabled} className={styles.input} {...props} />
    </Field>
  );
};
