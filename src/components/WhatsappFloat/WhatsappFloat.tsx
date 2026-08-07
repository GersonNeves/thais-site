import { whatsappHref } from "@/content/site";
import { ChatIcon } from "@/components/icons/Icons";
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
      <ChatIcon width={30} height={30} />
    </a>
  );
}
