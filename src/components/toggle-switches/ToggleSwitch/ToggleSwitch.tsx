import { forwardRef, ChangeEvent } from "react";
import styles from "./ToggleSwitch.module.css";
import { useToggleState } from "../useToggleState";

export interface ToggleSwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  (
    { checked, defaultChecked = false, onChange, disabled = false, className },
    ref
  ) => {
    const { value, setValue } = useToggleState<boolean>({
      value: checked,
      defaultValue: defaultChecked,
      onChange,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      setValue(e.target.checked);
    };

    return (
      <label className={`${styles.switch} ${className || ""}`}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          checked={value}
          disabled={disabled}
          onChange={handleChange}
          className={styles.input}
        />
        <span className={styles.slider} />
      </label>
    );
  }
);

ToggleSwitch.displayName = "ToggleSwitch";

export default ToggleSwitch;
