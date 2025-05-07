import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        {/* Placeholder para a imagem de fundo. Você pode adicionar uma <Image> aqui depois */}
      </div>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Muito prazer! <br />
            Meu nome é Breno Santos
          </h1>
          <button className={styles.ctaButton}>Apoiar Intercâmbio</button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Fotos/Pessoal/20250416_120856.jpg" // Placeholder
            alt="Breno Santos"
            width={225} // Reduzido de 300 (aprox 25%)
            height={338} // Reduzido de 450 (aprox 25%), mantendo proporção
            className={styles.profileImage}
            priority // Otimizar carregamento para LCP
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 