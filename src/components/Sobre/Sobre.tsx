import Image from "next/image";
import { sobre } from "@/content/site";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className={`container ${styles.sobreContainer}`}>
        <div className={styles.imgWrap}>
          <div className={styles.imgFrame}>
            <Image
              src="/images/thais.jpg"
              alt="Thais Fontana"
              fill
              sizes="(max-width: 992px) 90vw, 350px"
            />
          </div>
        </div>
        <div className={styles.text}>
          <h2>{sobre.heading}</h2>
          {sobre.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
