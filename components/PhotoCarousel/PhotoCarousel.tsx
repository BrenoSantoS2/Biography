"use client";
import Image from 'next/image';
import styles from './PhotoCarousel.module.css';
import { useTranslation } from 'react-i18next';

interface CarouselImageInput {
  id: string;
  src: string;
  // alt: string; // Será traduzido
}

// Os textos fixos foram removidos daqui, serão obtidos via t()
const defaultCarouselImageIds: CarouselImageInput[] = [
  { id: 'photo1', src: '/Fotos/Pessoal/20250411_061325.jpg' },
  { id: 'photo2', src: '/Fotos/Pessoal/20250412_080644.jpg' },
  { id: 'photo3', src: '/Fotos/Pessoal/20250416_115942.jpg' },
  { id: 'photo4', src: '/Fotos/Pessoal/20250412_080636.jpg' },
  { id: 'photo5', src: '/Fotos/Pessoal/20250416_120857.jpg' },
];

interface PhotoCarouselProps {
  titleKey?: string; // Chave de tradução para o título
  images?: CarouselImageInput[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
  titleKey, // Recebe a CHAVE de tradução para o título
  images = defaultCarouselImageIds 
}) => {
  const { t } = useTranslation(); // Hook de tradução

  // Se titleKey não for fornecido, usa um default. Se fornecido, traduz.
  const carouselTitle = titleKey ? t(titleKey) : t('PhotoCarousel.defaultTitle');

  return (
    <section className={styles.photoCarouselSection}>
      <div className="section-content-container">
        <h2 className={styles.sectionTitle}>{carouselTitle}</h2>
        <div className={styles.carouselContainer}>
          {images.map((image) => (
            <div key={image.id} className={styles.carouselItem}>
              <Image
                src={image.src}
                alt={t(`PhotoCarousel.images.${image.id}.alt`)}
                width={470}
                height={300}
                className={styles.carouselImage}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel; 