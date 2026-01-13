"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./SidePanel.module.css";
import { RxCross2 } from "react-icons/rx";

interface SidePanelProps {
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
  width?: string;
  side?: "left" | "right";
}

const SidePanel: React.FC<SidePanelProps> = ({
  children,
  onClose,
  showCloseButton = true,
  width = "400px",
  side = "right",
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  // Handle close with animation
  const handleClose = () => {
    setIsOpen(false);
  };

  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Scroll lock + focus
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    lastFocusedElement.current = document.activeElement as HTMLElement;

    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    panelRef.current?.focus();

    return () => {
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
      lastFocusedElement.current?.focus();
    };
  }, []);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      onClose(); // call parent only after slide-out ends
    }
  };

  return createPortal(
    <div
      className={styles.overlay}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${styles.panel} ${
          side === "left" ? styles.left : styles.right
        } ${isOpen ? styles.enter : styles.exit}`}
        style={{ width }}
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
        tabIndex={-1}
      >
        {showCloseButton && (
          <button
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close"
          >
            <RxCross2 />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default SidePanel;
