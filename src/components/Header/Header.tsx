"use client";

import { useEffect, useState } from "react";
import { navLinks, hero, siteConfig, whatsappHref } from "@/content/site";
import { FlorescerIcon } from "@/components/icons/Icons";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
            <span className={styles.logoCrp}>{siteConfig.crp}</span>
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
                <a
                  href={link.href}
                  className={activeHref === link.href ? styles.navLinkActive : ""}
                  onClick={() => setMenuOpen(false)}
                >
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
