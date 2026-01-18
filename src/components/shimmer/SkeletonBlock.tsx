// import styles from "./shimmerAnimation.module.css";
// import styles from "./diagonalShimmer.module.css";
// import styles from "./pulseShimmer.module.css";
// import styles from "./verticalShimmer.module.css";
// import styles from "./multiShimmer.module.css";
// import styles from "./slowGlowShimmer.module.css";
// import styles from "./dualLayerShimmer.module.css";
// import styles from "./glowFadeShimmer.module.css";
// import styles from "./waveShimmer.module.css";
// import styles from "./diagonalGlowShimmer.module.css";
// import styles from "./flickerShimmer.module.css";
// import styles from "./softGlowShimmer.module.css";
// import styles from "./verticalStripeShimmer.module.css";

// colored shimmers
// import styles from "./blueGradientShimmer.module.css";
// import styles from "./rainbowGradientShimmer.module.css";
// import styles from "./neonPulseShimmer.module.css";
// import styles from "./rainbowWaveShimmer.module.css";

// futuristic shimmers
// import styles from "./dotMatrixShimmer.module.css";
import styles from "./neonCircutShimmer.module.css";

type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return (
    <div className={`${styles.neonCircuitShimmer} ${className}`} {...props} />
  );
};

export default SkeletonBlock;
