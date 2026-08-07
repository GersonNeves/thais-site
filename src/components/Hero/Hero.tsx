import Image from "next/image";
import { hero, whatsappHref } from "@/content/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <h1>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn">
            {hero.cta}
          </a>
        </div>
        <div className={styles.heroImage}>
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

      <div className={styles.shapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          />
        </svg>
      </div>
    </section>
  );
}
