import SkeletonBlock from "../SkeletonBlock";
import styles from "./SkeletonCard.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.card}>
      <SkeletonBlock className={styles.profileIcon} />
      <SkeletonBlock className={styles.cardImage} />
      <SkeletonBlock className={styles.cardTitle} />
      <SkeletonBlock className={styles.cardSubtitle} />
      <SkeletonBlock className={styles.cardBadge} />
    </div>
  );
}
