import { especialidades } from "@/content/site";
import styles from "./Especialidades.module.css";

export default function Especialidades() {
  return (
    <section id="especialidades" className="section sectionWhite">
      <div className="container">
        <h2>Especialidades e Público-Alvo</h2>
        <div className={styles.grid}>
          {especialidades.map((item) => (
            <div className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
