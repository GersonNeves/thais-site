import Image from "next/image";
import { alemDaClinica } from "@/content/site";
import { FlorescerIcon } from "@/components/icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import { THAIS_ARTE_BLUR_DATA_URL } from "@/lib/imagePlaceholders";
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
        <Reveal className={styles.wrapper}>
          <h2>{alemDaClinica.heading}</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              {alemDaClinica.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className={styles.col}>
              <div className={styles.artFrame}>
                <Image
                  src="/images/thais-arte.jpg"
                  alt="Pintura em aquarela feita pela Thais"
                  fill
                  sizes="(max-width: 992px) 90vw, 400px"
                  placeholder="blur"
                  blurDataURL={THAIS_ARTE_BLUR_DATA_URL}
                />
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{alemDaClinica.quote.text}&rdquo;
                <br />
                <strong className={styles.quoteAuthor}>
                  — {alemDaClinica.quote.author}
                </strong>
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
