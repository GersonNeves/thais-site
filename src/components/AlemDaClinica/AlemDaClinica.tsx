import { alemDaClinica } from "@/content/site";
import { FlorescerIcon } from "@/components/icons/Icons";
import styles from "./AlemDaClinica.module.css";

export default function AlemDaClinica() {
  return (
    <section className={`section sectionWhite ${styles.section}`}>
      <FlorescerIcon
        animated={false}
        width={420}
        height={505}
        className={styles.watermark}
      />
      <div className="container">
        <div className={styles.wrapper}>
          <h2>{alemDaClinica.heading}</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              {alemDaClinica.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.col}>
              <blockquote className={styles.quote}>
                &ldquo;{alemDaClinica.quote.text}&rdquo;
                <br />
                <strong className={styles.quoteAuthor}>
                  — {alemDaClinica.quote.author}
                </strong>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
