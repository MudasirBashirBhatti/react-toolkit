import styles from "./CompoundTable.module.css";
import { ReactNode } from "react";

type CellProps = {
  children: ReactNode;
  className?: string;
};

const TableBody = ({ children, className }: CellProps) => {
  const classes = [styles.tableBody, className].filter(Boolean).join(" ");
  return <tbody className={classes}>{children}</tbody>;
};
export default TableBody;
