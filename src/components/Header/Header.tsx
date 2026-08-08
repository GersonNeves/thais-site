"use client";

import { useEffect, useState } from "react";
import { navLinks, hero, whatsappHref } from "@/content/site";
import { FlorescerIcon } from "@/components/icons/Icons";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>
          <FlorescerIcon
            animated={false}
            width={40}
            height={48}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>
            <span className={styles.logoName}>Thais Fontana</span>
            <span className={styles.logoTag}>Psicóloga Clínica</span>
          </span>
        </a>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.navGroup}>
          <ul
            className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${styles.navCta}`}
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
