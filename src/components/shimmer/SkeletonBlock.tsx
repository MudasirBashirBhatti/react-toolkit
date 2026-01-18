// import styles from "./shimmerAnimation.module.css";
import styles from "./diagonalShimmer.module.css";
type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return (
    <div className={`${styles.diagonalShimmer} ${className}`} {...props} />
  );
};

export default SkeletonBlock;
