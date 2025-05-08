"use client"
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <a className={styles.logo}>{t('Header.logo')}</a>
          <LanguageSwitcher />
        </div>
      <div className={styles.navActionsContainer}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button onClick={() => handleScrollTo('sobre')} className={styles.navLinkButton}>
                {t('Header.nav_about')}
              </button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => handleScrollTo('profissional')} className={styles.navLinkButton}>
                {t('Header.nav_professional')}
              </button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => handleScrollTo('academico')} className={styles.navLinkButton}>
                {t('Header.nav_academic')}
              </button>
            </li>
          </ul>
        </nav>
        <button onClick={() => handleScrollTo('intercambio')} className={styles.donateButton}>
          {t('Header.donate_button')}
        </button>
      </div>
    </header>
  );
};

export default Header; 