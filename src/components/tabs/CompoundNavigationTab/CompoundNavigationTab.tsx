"use client";
import styles from "./CompoundNavigationTab.module.css";

import { createContext, ReactNode, useContext, useState } from "react";
import NavigationList from "./NavigationList/NavigationList";
import NavigationTab from "./NavigationTab/NavigationTab";
import NavigationPanel from "./NavigationPanel/NavigationPanel";

export type ValueType = string | number | boolean | null | undefined;
interface ContextType {
  activeValue: ValueType;
  onChange: (value: ValueType) => void;
}

const navigationTabContext = createContext<ContextType | null>(null);
export const useNavigationTab = () => {
  const ctx = useContext(navigationTabContext);
  if (!ctx) {
    throw new Error(
      "Navigation tab components must be used in navigation components"
    );
  }
  return ctx;
};

interface NavigationTabProps {
  children: ReactNode;
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: (value: ValueType) => void;
  variant?: "style1";
  className?: string;
}

const CompoundNavigationTab = ({
  value,
  defaultValue,
  onChange,
  children,
  className,
  variant = "style1",
}: NavigationTabProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value ?? internalValue;

  const handleChange = (val: ValueType) => {
    if (!value) setInternalValue(val); // update internal state if uncontrolled
    onChange?.(val); // notify parent if exists
  };

  // applied classes to main wrapper
  const classes = [styles.tabsWrapper, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <navigationTabContext.Provider
      value={{ activeValue: activeValue, onChange: handleChange }}
    >
      <div className={classes}>{children}</div>
    </navigationTabContext.Provider>
  );
};
export default CompoundNavigationTab;

CompoundNavigationTab.List = NavigationList;
CompoundNavigationTab.Tab = NavigationTab;
CompoundNavigationTab.Panel = NavigationPanel;
