"use client";
import React, { ReactNode, useState } from "react";
import styles from "./Faq.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

export interface FaqProps {
  items: FaqItem[];
  initiallyOpenIndex?: number;
  isCtaVisible?: boolean;
  className?: string;
}

const Faq: React.FC<FaqProps> = ({
  items,
  initiallyOpenIndex = -1,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(initiallyOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const mainClasses = [styles.faq, className].filter(Boolean).join(" ");

  return (
    <div className={mainClasses}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            className={`${styles.item} ${
              index === openIndex ? styles.active : ""
            }`}
            key={index}
          >
            {/* question wrapper */}
            <button
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {/* counters */}
              <span className={styles.counter}>
                {index < 9 ? `0${index + 1}` : index + 1}/
              </span>

              {/* question */}
              <span className={styles.heading}>{item.question}</span>

              {/* icon */}
              <span className={styles.icon}>
                {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </span>
            </button>

            {/* answer wrapper */}
            <div
              className={styles.answer}
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
