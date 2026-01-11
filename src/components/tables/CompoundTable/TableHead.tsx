import styles from "./CompoundTable.module.css";
import {
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
  ReactNode,
} from "react";
import TableRow from "./TableRow";
import TableCell, { TableCellProps } from "./TableCell";

interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

const TableHead = ({ children, className }: TableHeadProps) => {
  const classes = [styles.tableHead, className].filter(Boolean).join(" ");
  return (
    <thead className={classes}>
      {Children.map(children, (row) => {
        // Check that the row is a TableRow React element
        if (isValidElement(row) && row.type === TableRow) {
          const typedRow = row as ReactElement<{ children: ReactNode }>;

          return cloneElement(typedRow, {
            children: Children.map(typedRow.props.children, (cell) => {
              // Check if child is a TableCell
              if (
                isValidElement<TableCellProps>(cell) &&
                cell.type === TableCell
              ) {
                return cloneElement(cell as ReactElement<TableCellProps>, {
                  as: "th",
                  scope: "col",
                });
              }
              return cell;
            }),
          });
        }

        return row;
      })}
    </thead>
  );
};

export default TableHead;
