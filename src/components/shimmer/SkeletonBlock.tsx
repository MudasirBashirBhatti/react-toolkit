// import styles from "./shimmerAnimation.module.css";
// import styles from "./diagonalShimmer.module.css";
import styles from "./pulseShimmer.module.css";
type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return <div className={`${styles.pulseShimmer} ${className}`} {...props} />;
};

export default SkeletonBlock;
