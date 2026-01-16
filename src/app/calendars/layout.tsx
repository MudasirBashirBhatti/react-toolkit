import { ReactNode } from "react";
import styles from "./layout.module.css";
import Link from "next/link";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layoutWrapper}>
      <h1>Documentations Related to Calendar</h1>
      <ul className={styles.buttonsWrapper}>
        <li>
          <Link href={"/calendars/hooks-examples"}>Hooks Docuementation</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
