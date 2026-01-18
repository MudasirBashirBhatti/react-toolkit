// import styles from "./shimmerAnimation.module.css";
// import styles from "./diagonalShimmer.module.css";
// import styles from "./pulseShimmer.module.css";
// import styles from "./verticalShimmer.module.css";
// import styles from "./multiShimmer.module.css";
// import styles from "./slowGlowShimmer.module.css";
// import styles from "./dualLayerShimmer.module.css";
// import styles from "./glowFadeShimmer.module.css";
// import styles from "./waveShimmer.module.css";
import styles from "./diagonalGlowShimmer.module.css";

type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return <div className={`${styles.diagonalGlow} ${className}`} {...props} />;
};

export default SkeletonBlock;
