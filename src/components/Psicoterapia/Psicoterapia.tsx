import { psicoterapia } from "@/content/site";
import styles from "./Psicoterapia.module.css";

export default function Psicoterapia() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow eyebrowLight">Psicanálise</span>
        <h2 className={styles.heading}>{psicoterapia.heading}</h2>
        <p className={styles.text}>{psicoterapia.text}</p>
      </div>
    </section>
  );
}
