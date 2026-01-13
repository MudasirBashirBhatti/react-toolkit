"use client";
import React, { ReactNode, useState } from "react";
import styles from "./Accordion.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

export interface AccordionItemProps {
  header: ReactNode;
  children: ReactNode;
  counter?: number; // optional for FAQ style numbering
}

export interface AccordionProps {
  items: AccordionItemProps[];
  initiallyOpenIndex?: number;
  openIndex?: number; // controlled mode
  onChange?: (index: number) => void; // callback for controlled
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  initiallyOpenIndex = -1,
  openIndex: controlledIndex,
  onChange,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number>(initiallyOpenIndex);

  const currentOpenIndex = controlledIndex ?? openIndex;

  const toggle = (index: number) => {
    const newIndex = currentOpenIndex === index ? -1 : index;

    if (onChange) onChange(newIndex); // controlled callback
    if (controlledIndex === undefined) setOpenIndex(newIndex); // uncontrolled
  };

  return (
    <div className={`${styles.accordion} ${className || ""}`}>
      {items.map((item, index) => {
        const isOpen = index === currentOpenIndex;

        return (
          <div
            className={`${styles.item} ${isOpen ? styles.active : ""}`}
            key={index}
          >
            <button
              className={styles.question}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${index}`}
              id={`accordion-header-${index}`}
            >
              {item.counter !== undefined && (
                <span className={styles.counter}>
                  {item.counter < 9 ? `0${item.counter + 1}` : item.counter + 1}
                  /
                </span>
              )}
              <span className={styles.heading}>{item.header}</span>
              <span className={styles.icon}>
                {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </span>
            </button>

            <div
              className={styles.answer}
              id={`accordion-panel-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
            >
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
