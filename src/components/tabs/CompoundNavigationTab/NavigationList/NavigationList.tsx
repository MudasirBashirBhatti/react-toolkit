import { ReactNode } from "react";
import styles from "./NavigationList.module.css";

const NavigationList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default NavigationList;
