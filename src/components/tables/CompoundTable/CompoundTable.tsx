import styles from "./CompoundTable.module.css";

import { ReactNode } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableBody from "./TableBody";

type CompoundTableProps = {
  children: ReactNode;
  className?: string;
};

const CompoundTable = ({ children, className }: CompoundTableProps) => {
  const classes = [styles.tableWrapper, className].filter(Boolean).join(" ");
  return <table className={classes}>{children}</table>;
};

CompoundTable.Head = TableHead;
CompoundTable.Body = TableBody;
CompoundTable.Row = TableRow;
CompoundTable.Cell = TableCell;

export default CompoundTable;
