import { especialidades } from "@/content/site";
import styles from "./Especialidades.module.css";

export default function Especialidades() {
  return (
    <section id="especialidades" className="section sectionWhite">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Especialidades</span>
          <h2>Especialidades e Público-Alvo</h2>
        </div>
        <div className={styles.grid}>
          {especialidades.map((item, index) => (
            <div className={styles.card} key={item.title}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
