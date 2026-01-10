"use client";
import styles from "./BasicTab.module.css";

type valueType = string | null | undefined | number | boolean;
interface INavigationTabProps {
  tabs: {
    label: string;
    value: valueType;
  }[];
  activeValue: valueType;
  onTabChange: ({ index, value }: { index: number; value: valueType }) => void;
  variant?: "style1";
  className?: string;
}

const BasicTab: React.FC<INavigationTabProps> = ({
  tabs = [],
  activeValue,
  onTabChange,
  variant = "style1",
  className,
}) => {
  return (
    <ul className={`${styles.tabsWrapper} ${styles[variant]} ${className}`}>
      {tabs.map((tab, index) => (
        <li
          // className={activeValue === tab.value ? styles.activeTab : ""}
          className={
            (activeValue ?? null) === (tab.value ?? null)
              ? styles.activeTab
              : ""
          }
          key={index}
          onClick={() => onTabChange({ index, value: tab.value })}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default BasicTab;
