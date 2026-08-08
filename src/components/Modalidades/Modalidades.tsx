import { modalidades } from "@/content/site";
import { VideoIcon, PulseIcon, UsersIcon } from "@/components/icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Modalidades.module.css";

const icons = {
  video: VideoIcon,
  "heart-pulse": PulseIcon,
  users: UsersIcon,
};

export default function Modalidades() {
  return (
    <section id="modalidades" className="section sectionSoft">
      <div className="container">
        <Reveal className={styles.header}>
          <span className="eyebrow">Modalidades</span>
          <h2>Modalidades de Atendimento</h2>
        </Reveal>
        <Reveal className={styles.grid}>
          {modalidades.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div className={styles.card} key={item.title}>
                <div className={styles.iconWrap}>
                  <Icon width={24} height={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
