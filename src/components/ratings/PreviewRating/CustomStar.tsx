import React, { ReactNode, SVGProps, useId } from "react";

interface FractionalStarProps {
  fillPercentage: number;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  activeColor?: string;
  inactiveColor?: string;
  svg?: ReactNode; // <-- accept any ReactNode
}

const FractionalStar: React.FC<FractionalStarProps> = ({
  fillPercentage,
  size = 24,
  className,
  style,
  activeColor = "#ffc107",
  inactiveColor = "#e0e0e0",
  svg,
}) => {
  const reactId = useId();
  const gradientId = `grad-${reactId}`;

  // Only clone if svg is a valid ReactElement
  const svgElement = React.isValidElement<SVGProps<SVGSVGElement>>(svg)
    ? svg
    : null;

  return (
    <div
      style={{ width: size, height: size, display: "inline-block", ...style }}
      className={className}
    >
      {/* User SVG */}
      {svgElement ? (
        React.cloneElement(svgElement, {
          width: "100%",
          height: "100%",
          fill: `url(#${gradientId})`,
        })
      ) : (
        // Default star
        <svg width={size} height={size} viewBox="0 0 24 24">
          <defs>
            <linearGradient id={gradientId}>
              <stop offset={`${fillPercentage}%`} stopColor={activeColor} />
              <stop offset={`${fillPercentage}%`} stopColor={inactiveColor} />
            </linearGradient>
          </defs>
          <polygon
            points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9"
            fill={`url(#${gradientId})`}
          />
        </svg>
      )}
      {/* Gradient defs (hidden) */}
      <svg width={0} height={0}>
        <defs>
          <linearGradient id={gradientId}>
            <stop offset={`${fillPercentage}%`} stopColor={activeColor} />
            <stop offset={`${fillPercentage}%`} stopColor={inactiveColor} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FractionalStar;
