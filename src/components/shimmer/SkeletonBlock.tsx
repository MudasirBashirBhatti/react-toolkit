// import styles from "./shimmerAnimation.module.css";
// import styles from "./diagonalShimmer.module.css";
// import styles from "./pulseShimmer.module.css";
import styles from "./verticalShimmer.module.css";

type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return (
    <div className={`${styles.verticalShimmer} ${className}`} {...props} />
  );
};

export default SkeletonBlock;
