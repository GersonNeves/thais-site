import { alemDaClinica } from "@/content/site";
import styles from "./AlemDaClinica.module.css";

export default function AlemDaClinica() {
  return (
    <section className="section sectionWhite">
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className="textCenter">{alemDaClinica.heading}</h2>
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
