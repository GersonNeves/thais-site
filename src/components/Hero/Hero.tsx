import Image from "next/image";
import { hero, whatsappHref } from "@/content/site";
import { FlorescerIcon } from "@/components/icons/Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <FlorescerIcon
        animated={false}
        width={640}
        height={770}
        className={styles.watermark}
      />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <span className="eyebrow">Psicóloga Clínica</span>
          <h1>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn">
            {hero.cta}
          </a>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.imageOuter}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/thais.jpg"
                alt="Thais Fontana, psicóloga clínica"
                fill
                sizes="(max-width: 992px) 90vw, 450px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
