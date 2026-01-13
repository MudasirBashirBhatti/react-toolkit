"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  showCloseButton,
}) => {
  // ESC to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
    };
  }, []);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      {showCloseButton && (
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <RxCross2 />
        </button>
      )}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
