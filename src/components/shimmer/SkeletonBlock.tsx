// import styles from "./shimmerAnimation.module.css";
// import styles from "./diagonalShimmer.module.css";
// import styles from "./pulseShimmer.module.css";
// import styles from "./verticalShimmer.module.css";
import styles from "./multiShimmer.module.css";

type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return <div className={`${styles.multiShimmer} ${className}`} {...props} />;
};

export default SkeletonBlock;
