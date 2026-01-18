import SkeletonComponent from "@/components/shimmer/SkeletonComponent/SkeletonComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      welcome to ui library <SkeletonComponent />{" "}
    </div>
  );
}
