import { ReactNode } from "react";
import { useNavigationTab, ValueType } from "../CompoundNavigationTab";
import styles from "./NavigationPanel.module.css";

const NavigationPanel = ({
  value,
  children,
}: {
  value: ValueType;
  children: ReactNode;
}) => {
  const { activeValue } = useNavigationTab();
  if (activeValue !== value) return null;
  return <div className={styles.panel}>{children}</div>;
};
export default NavigationPanel;
