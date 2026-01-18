import shimmerStyles from "./shimmerAnimation.module.css";
type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return (
    <div className={`${shimmerStyles.skeleton} ${className}`} {...props} />
  );
};

export default SkeletonBlock;
