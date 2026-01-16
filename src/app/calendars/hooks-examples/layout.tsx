import Link from "next/link";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.mainWrapper}>
      <ul>
        <li>
          <Link href={"/calendars/hooks-examples/use-calendar"}>
            useCalendar
          </Link>
        </li>
      </ul>

      {/* content will be here */}
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default layout;
