import Image from 'next/image';
import styles from './AboutSection.module.css';

interface Topic {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  layout: 'textLeft' | 'textRight';
}

const aboutTopics: Topic[] = [
  {
    id: 'sobre-mim',
    title: 'Um pouco sobre mim',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat fermentum tortor non ultrices. In hac habitasse platea dictumst. Sed dapibus odio ante, sit amet sagittis sem blandit ac. Phasellus condimentum eros eget est congue tincidunt. Vestibulum ante nunc, ornare nec ipsum a, ultrices tincidunt turpis. Etiam nec tincidunt dolor, at fringilla augue. Nam posuere hendrerit faucibus. Quisque sed aliquam augue. Suspendisse at fermentum ante, a tincidunt odio. Proin interdum, purus non auctor semper, eros justo malesuada arcu, vitae tempus ante nibh in sem. Curabitur commodo ipsum risus, sit amet varius sem commodo at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod consequat sem in scelerisque.',
    imageUrl: '/Fotos/Pessoal/20250411_061326.jpg',
    imageAlt: 'Foto sobre mim',
    layout: 'textLeft',
  },
  {
    id: 'familia',
    title: 'Família',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat fermentum tortor non ultrices. In hac habitasse platea dictumst. Sed dapibus odio ante, sit amet sagittis sem blandit ac. Phasellus condimentum eros eget est congue tincidunt. Vestibulum ante nunc, ornare nec ipsum a, ultrices tincidunt turpis. Etiam nec tincidunt dolor, at fringilla augue. Nam posuere hendrerit faucibus. Quisque sed aliquam augue. Suspendisse at fermentum ante, a tincidunt odio. Proin interdum, purus non auctor semper, eros justo malesuada arcu, vitae tempus ante nibh in sem. Curabitur commodo ipsum risus, sit amet varius sem commodo at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod consequat sem in scelerisque.',
    imageUrl: '/Fotos/Pessoal/20250412_080635.jpg',
    imageAlt: 'Foto de família',
    layout: 'textRight',
  },
  {
    id: 'infancia',
    title: 'Infância',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat fermentum tortor non ultrices. In hac habitasse platea dictumst. Sed dapibus odio ante, sit amet sagittis sem blandit ac. Phasellus condimentum eros eget est congue tincidunt. Vestibulum ante nunc, ornare nec ipsum a, ultrices tincidunt turpis. Etiam nec tincidunt dolor, at fringilla augue. Nam posuere hendrerit faucibus. Quisque sed aliquam augue. Suspendisse at fermentum ante, a tincidunt odio. Proin interdum, purus non auctor semper, eros justo malesuada arcu, vitae tempus ante nibh in sem. Curabitur commodo ipsum risus, sit amet varius sem commodo at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod consequat sem in scelerisque.',
    imageUrl: '/Fotos/Pessoal/20250416_115932.jpg',
    imageAlt: 'Foto da infância',
    layout: 'textLeft',
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.divider}></div>
      <h2 className={styles.mainTitle}>Sobre</h2>
      <div className={styles.topicsContainer}>
        {aboutTopics.map((topic) => (
          <div
            key={topic.id}
            className={`${styles.topicItem} ${topic.layout === 'textRight' ? styles.textRight : styles.textLeft}`}
          >
            <div className={styles.topicTextContainer}>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicText}>{topic.text}</p>
            </div>
            <div className={styles.topicImageContainer}>
              <Image
                src={topic.imageUrl}
                alt={topic.imageAlt}
                width={360}
                height={360}
                className={styles.topicImage}
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection; 