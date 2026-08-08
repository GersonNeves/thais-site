import { whatsappHref } from "@/content/site";
import { WhatsappIcon } from "@/components/icons/Icons";
import styles from "./WhatsappFloat.module.css";

export default function WhatsappFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Falar no WhatsApp"
    >
      <WhatsappIcon width={32} height={32} />
    </a>
  );
}
