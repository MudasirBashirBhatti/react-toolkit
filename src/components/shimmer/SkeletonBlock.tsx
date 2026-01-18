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
// import styles from "./skeletonHologramShimmer.module.css";
// import styles from "./binaryCodeShimmer.module.css";
// import styles from "./brainWaveShimmer.module.css";
// import styles from "./cyberShimmer.module.css";
// import styles from "./plasmaEnergyShimmer.module.css";
// import styles from "./neuralSynapseShimmer.module.css";
// import styles from "./digitalParticleShimmer.module.css";
// import styles from "./holographicGlitchShimmer.module.css";

// next gen effects
// import styles from "./quantumEntanglementShimmer.module.css";
// import styles from "./neuralMatrixGridShimmer.module.css";
// import styles from "./holographicShimmer.module.css";
// import styles from "./cyberCynthWaveShimmer.module.css";
// import styles from "./quantumFluxFieldShimmer.module.css";
// import styles from "./aiNeuralNetwork.module.css";
// import styles from "./starFieldShimmer.module.css";
// import styles from "./neuralPathway.module.css";
// import styles from "./quantumCollapse.module.css";
// import styles from "./dataDecryption.module.css";
// import styles from "./thoughtProcess.module.css";
// import styles from "./holographicReconstruct.module.css";
// import styles from "./neuralActivation.module.css";
// import styles from "./quantumTeleportation.module.css";
// import styles from "./dataCompression.module.css";
// import styles from "./aiLearning.module.css";
// import styles from "./hologramDecode.module.css";
// import styles from "./chromaticShimmer.module.css";
// import styles from "./liquidMercury.module.css";
// import styles from "./bioluminescent.module.css";
// import styles from "./quantumFoamShimmer.module.css";
// import styles from "./auroraBorealis.module.css";
// import styles from "./plasmaDischarge.module.css";
// import styles from "./crystalRefraction.module.css";
// import styles from "./stardustNebula.module.css";
// import styles from "./fireflySwarm.module.css";
// import styles from "./hyperspaceTunnel.module.css";
// import styles from "./rainbowPrism.module.css";

// school and coleges shimmer effects
// import styles from "./wisdomFlow.module.css";
// import styles from "./penWriting.module.css";
// import styles from "./scienceBubbles.module.css";
// import styles from "./equationSolving.module.css";
// import styles from "./historyTimeline.module.css";
// import styles from "./artBrush.module.css";
// import styles from "./musicNotesFlow.module.css";
// import styles from "./sportsActivity.module.css";
// import styles from "./graduationCap.module.css";
// import styles from "./libraryBooks.module.css";
// import styles from "./classroomChalkboard.module.css";
// import styles from "./computerBinary.module.css";

// job portals shimmer effects
// import styles from "./effects/jobportals/resumeUpload.module.css";
// import styles from "./effects/jobportals/skillTags.module.css";
// import styles from "./effects/jobportals/connectionNetwork.module.css";
// import styles from "./effects/jobportals/jobMatch.module.css";
// import styles from "./effects/jobportals/proposalSubmit.module.css";
// import styles from "./effects/jobportals/moneyTransaction.module.css";
// import styles from "./effects/jobportals/reviewStars.module.css";
// import styles from "./effects/jobportals/milestoneBadgeShimmer.module.css";
// import styles from "./effects/jobportals/professionalWave.module.css";
// import styles from "./effects/jobportals/corporateStripe.module.css";
// import styles from "./effects/jobportals/minimalistPulse.module.css";
import styles from "./effects/jobportals/glassShimmer.module.css";

type SkeletonBlockProps = React.HtmlHTMLAttributes<HTMLDivElement>;
const SkeletonBlock = ({ className, ...props }: SkeletonBlockProps) => {
  return <div className={`${styles.glassShimmer} ${className}`} {...props} />;
};

export default SkeletonBlock;
