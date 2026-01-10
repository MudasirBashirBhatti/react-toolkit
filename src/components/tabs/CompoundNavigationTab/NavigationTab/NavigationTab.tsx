import { useNavigationTab, ValueType } from "../CompoundNavigationTab";
import styles from "./NavigationTab.module.css";

const NavigationTab = ({
  value,
  children,
  disabled,
}: {
  value: ValueType;
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  const { activeValue, onChange } = useNavigationTab();
  const isActive = (activeValue ?? null) === (value ?? null);

  return (
    <li
      role="tab"
      aria-selected={isActive}
      className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
      onClick={() => !disabled && onChange(value)}
    >
      {children}
    </li>
  );
};

export default NavigationTab;
