"use client";
import Image from 'next/image';
import styles from './Hero.module.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <Image
          src="/Hero/background.png" // SUBSTITUA PELO CAMINHO CORRETO DA SUA IMAGEM DE FUNDO
          alt={t('Hero.backgroundAlt', "Imagem de fundo da seção hero")}
          layout="fill"
          objectFit="cover" // Garante que a imagem cubra o contêiner, mantendo a proporção
          quality={75} // Ajuste a qualidade conforme necessário
          priority // Se for LCP, considere adicionar priority
          className={styles.heroBackgroundImage} // Classe para possível estilização adicional (ex: opacity)
        />
        <div className={styles.heroBackgroundOverlay}></div> {/* Overlay separado */}
      </div>
      <div className="section-content-container">
        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              {t('Hero.greeting')} <br />
              {t('Hero.nameIntroduction')}
            </h1>
            <button className={styles.ctaButton}  onClick={() => handleScrollTo('intercambio')}>{t('Hero.ctaButton')}</button>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/Hero/myImage.png" 
              alt={t("Hero.imageAlt", "Breno Santos")}
              width={432} 
              height={577} 
              className={styles.profileImage}
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 