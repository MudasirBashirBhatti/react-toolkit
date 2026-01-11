import styles from "./CompoundTable.module.css";
import { ReactNode } from "react";

type RowProps = {
  children: ReactNode;
  className?: string;
};

const TableRow = ({ children, className }: RowProps) => {
  const classes = [styles.tableRow, className].filter(Boolean).join(" ");
  return <tr className={classes}>{children}</tr>;
};
export default TableRow;
