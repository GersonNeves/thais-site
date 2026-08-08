import { footer, siteConfig, whatsappHref } from "@/content/site";
import { FlorescerIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className="container textCenter">
        <Reveal className={styles.cta}>
          <span className="eyebrow eyebrowLight">Contato</span>
          <h2>{footer.heading}</h2>
          <p className={`maxWText ${styles.ctaText}`}>{footer.text}</p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.ctaButton}`}
          >
            {footer.cta}
          </a>
        </Reveal>

        <div className={styles.socialLinks}>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profissional"
          >
            <InstagramIcon width={32} height={32} />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profissional"
          >
            <LinkedinIcon width={32} height={32} />
          </a>
        </div>

        <div className={styles.florescerFooter}>
          <FlorescerIcon width={45} height={54} />
        </div>

        <p className={styles.legal}>
          {footer.legal}
          <br />
          &copy; 2026 Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
