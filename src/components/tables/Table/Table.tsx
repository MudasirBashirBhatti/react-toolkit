"use client";
import styles from "./Table.module.css";

type TableProps = {
  heading?: (string | number | React.ReactNode)[];
  variant?: "style1";
  className?: string;
  detail?: (string | number | React.ReactElement | null)[][];
  onClick?: (
    data: (string | number | React.ReactElement | null)[],
    index: number
  ) => void;
};

const Table = ({
  variant = "style1",
  className,
  heading = ["Counts", "Name", "link"],
  detail = [
    [
      1,
      "Mudasir",
      <a key={"link"} href="https://www.google.com">
        hello
      </a>,
    ],
    [
      1,
      "Mudasir",
      <a key={"link"} href="https://www.google.com">
        hello
      </a>,
    ],
  ],
  onClick,
}: TableProps) => {
  return (
    <div
      className={`${styles.parent} ${className} ${
        variant === "style1" ? styles.style1 : styles.style2
      } `}
    >
      <table className={`${styles.table} `}>
        <thead>
          <tr className={styles.heading}>
            {heading.map((e, index) => (
              <th key={`th-${index}`}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {detail.map((row, rowIndex) => (
            <tr
              onClick={() => onClick?.(row, rowIndex)}
              key={`tr-${rowIndex}`}
              className={styles.detail}
            >
              {row.map((cell, cellIndex) => (
                <td data-label={heading[cellIndex]} key={`td-${cellIndex}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
