import styles from "./CompoundTable.module.css";
import { ReactNode } from "react";

export interface TableCellProps {
  children: ReactNode;
  as?: "td" | "th"; // whether this is a data cell or header cell
  scope?: "col" | "row"; // optional, only used if as="th"
  className?: string;
  label?: string;
}

const TableCell = ({
  children,
  as = "td",
  scope,
  className,
  label,
}: TableCellProps) => {
  if (as === "th") {
    return (
      <th scope={scope} className={`${styles.th} ${className}`}>
        {children}
      </th>
    );
  }

  return (
    <td className={`${styles.td} ${className}`} data-label={label}>
      {children}
    </td>
  );
};

export default TableCell;
