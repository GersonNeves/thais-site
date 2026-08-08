import Image from "next/image";
import { sobre } from "@/content/site";
import Reveal from "@/components/Reveal/Reveal";
import { THAIS_PHOTO_BLUR_DATA_URL } from "@/lib/imagePlaceholders";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className="section sectionSoft">
      <Reveal className={`container ${styles.sobreContainer}`}>
        <div className={styles.imgWrap}>
          <div className={styles.imgOuter}>
            <div className={styles.imgFrame}>
              <Image
                src="/images/thais.jpg"
                alt="Thais Fontana"
                fill
                sizes="(max-width: 992px) 90vw, 380px"
                placeholder="blur"
                blurDataURL={THAIS_PHOTO_BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <span className="eyebrow">Sobre Mim</span>
          <h2>{sobre.heading}</h2>
          {sobre.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
