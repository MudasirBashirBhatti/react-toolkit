"use client";

import React, { useState } from "react";
import styles from "./GiveRating.module.css";

interface GiveRatingProps {
  totalStars?: number; // Total number of stars
  value?: number; // Controlled value
  defaultValue?: number; // Default uncontrolled value
  readOnly?: boolean; // Disable interaction
  onChange?: (rating: number) => void; // Callback
  activeStar?: React.ReactNode; // Optional custom active star
  inactiveStar?: React.ReactNode; // Optional custom inactive star
}

const GiveRating: React.FC<GiveRatingProps> = ({
  totalStars = 5,
  value,
  defaultValue = 0,
  readOnly = false,
  onChange,
  activeStar,
  inactiveStar,
}) => {
  // Internal state for uncontrolled
  const [internalRating, setInternalRating] = useState<number>(defaultValue);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  // Determine current rating (controlled or uncontrolled)
  const currentRating = value !== undefined ? value : internalRating;

  const handleClick = (star: number) => {
    if (readOnly) return;
    if (value === undefined) setInternalRating(star); // uncontrolled
    onChange?.(star);
  };

  const handleMouseEnter = (star: number) => {
    if (!readOnly) setHoveredRating(star);
  };

  const handleMouseLeave = () => {
    if (!readOnly) setHoveredRating(0);
  };

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1;
        const isActive = starNumber <= currentRating;
        const isHovered = starNumber <= hoveredRating;

        return (
          <span
            key={index}
            className={`${styles.star} ${readOnly ? styles.disabled : ""} ${
              isActive ? styles.active : ""
            } ${isHovered ? styles.hovered : ""}`}
            onClick={() => handleClick(starNumber)}
            onMouseEnter={() => handleMouseEnter(starNumber)}
            onMouseLeave={handleMouseLeave}
          >
            {isActive || isHovered ? activeStar || "★" : inactiveStar || "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default GiveRating;
