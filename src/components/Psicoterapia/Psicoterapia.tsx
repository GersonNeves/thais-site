import { psicoterapia } from "@/content/site";
import styles from "./Psicoterapia.module.css";

export default function Psicoterapia() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="textCenter">{psicoterapia.heading}</h2>
        <div className="maxWText textCenter">
          <p>{psicoterapia.text}</p>
        </div>
      </div>
    </section>
  );
}
