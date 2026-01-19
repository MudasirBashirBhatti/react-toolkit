import styles from "./Tag.module.css";

type TagVariant = "soft" | "white" | "solid";

type TagProps = {
  label: string;
  variant?: TagVariant;
  onRemove?: () => void;
  className?: string;
};

export default function Tag({ label, variant = "soft", onRemove }: TagProps) {
  const classes = [styles.tag, styles[variant]].filter(Boolean).join(" ");
  return (
    <span className={classes}>
      <span className={styles.label}>{label}</span>

      {onRemove && (
        <button
          type="button"
          className={styles.close}
          onClick={onRemove}
          aria-label="Remove tag"
        >
          ×
        </button>
      )}
    </span>
  );
}
