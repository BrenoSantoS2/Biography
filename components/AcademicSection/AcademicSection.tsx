import Image from 'next/image';
import styles from '../AboutSection/AboutSection.module.css'; // Reutilizando estilos da AboutSection

interface Topic {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  layout: 'textLeft' | 'textRight';
}

// Dados placeholder para a seção Acadêmico
const academicTopics: Topic[] = [
  {
    id: 'academico-geral',
    title: 'Formação Principal', // Placeholder Title
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat fermentum tortor non ultrices. In hac habitasse platea dictumst. Sed dapibus odio ante, sit amet sagittis sem blandit ac. Phasellus condimentum eros eget est congue tincidunt. Vestibulum ante nunc, ornare nec ipsum a, ultrices tincidunt turpis.',
    imageUrl: '/Fotos/Pessoal/20250416_115933.jpg', // Placeholder image
    imageAlt: 'Foto acadêmica 1',
    layout: 'textLeft',
  },
  {
    id: 'cursos-extras',
    title: 'Cursos Complementares', // Placeholder Title
    text: 'Etiam nec tincidunt dolor, at fringilla augue. Nam posuere hendrerit faucibus. Quisque sed aliquam augue. Suspendisse at fermentum ante, a tincidunt odio. Proin interdum, purus non auctor semper, eros justo malesuada arcu, vitae tempus ante nibh in sem.',
    imageUrl: '/Fotos/Pessoal/20250416_115940.jpg', // Placeholder image
    imageAlt: 'Foto acadêmica 2',
    layout: 'textRight',
  },
  {
    id: 'conquistas-academicas',
    title: 'Projetos e Conquistas', // Placeholder Title
    text: 'Curabitur commodo ipsum risus, sit amet varius sem commodo at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec euismod consequat sem in scelerisque.',
    imageUrl: '/Fotos/Pessoal/20250416_120856.jpg', // Placeholder image
    imageAlt: 'Foto acadêmica 3',
    layout: 'textLeft',
  },
];

const AcademicSection = () => {
  return (
    <section id="academico" className={styles.aboutSection}>
      <div className={styles.divider}></div>
      <h2 className={styles.mainTitle}>ACADÊMICO</h2> {/* Título específico desta seção */}
      <div className={styles.topicsContainer}>
        {academicTopics.map((topic) => (
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

export default AcademicSection; 