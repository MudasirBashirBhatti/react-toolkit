import React, { CSSProperties, ReactNode } from "react";
import CustomStar from "./CustomStar";

interface DynamicRatingProps {
  rating: number; // e.g., 3.5
  totalStars?: number; // default 5
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
  style?: CSSProperties;
  svg?: ReactNode; // custom SVG for all stars
}

const PreviewRating: React.FC<DynamicRatingProps> = ({
  rating,
  totalStars = 5,
  size = 24,
  activeColor,
  inactiveColor,
  className,
  style,
  svg,
}) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1;
        let fillPercentage = 0;

        if (rating >= starNumber) fillPercentage = 100;
        else if (rating > starNumber - 1)
          fillPercentage = (rating - (starNumber - 1)) * 100;

        return (
          <CustomStar
            key={index}
            fillPercentage={fillPercentage}
            size={size}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            className={className}
            style={style}
            svg={svg}
          />
        );
      })}
    </div>
  );
};

export default PreviewRating;
