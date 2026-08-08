"use client";

import { useState } from "react";
import { faq } from "@/content/site";
import styles from "./Faq.module.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section sectionWhite">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className="eyebrow">FAQ</span>
          <h2>Dúvidas Frequentes</h2>
        </div>
        <div className={styles.accordion}>
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={styles.item} key={item.question}>
                <button
                  type="button"
                  className={styles.header}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span
                    className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}
                >
                  <div className={styles.contentInner}>
                    {item.answer.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
