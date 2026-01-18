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
// import styles from "./neonCircutShimmer.module.css";
// import styles from "./pulseLineShimmer.module.css";
// import styles from "./holoShimmer.module.css";
// import styles from "./neonGridShimmer.module.css";
// import styles from "./laserShimmer.module.css";
// import styles from "./quantumNoiseShimmer.module.css";
// import styles from "./hudScanShimmer.module.css";
// import styles from "./cyberDataShimmer.module.css";
// import styles from "./energyCoreShimmer.module.css";
// import styles from "./glitchShimmer.module.css";
// import styles from "./hologramFlickerShimmer.module.css";
// import styles from "./neuralWaveShimmer.module.css";
// import styles from "./skeletonNeuralShimmer.module.css";
import styles from "./skeletonHologramShimmer.module.css";

type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return (
    <div className={`${styles.skeletonHologram} ${className}`} {...props} />
  );
};

export default SkeletonBlock;
