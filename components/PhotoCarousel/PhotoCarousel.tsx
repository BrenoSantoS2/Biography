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
  { id: 'photo1', src: '/About/Corrosel/F1.jpg' },
  { id: 'photo2', src: '/About/Corrosel/F2.jpg' },
  { id: 'photo3', src: '/About/Corrosel/F3.jpg' },
  { id: 'photo4', src: '/About/Corrosel/F4.jpg' },
  { id: 'photo5', src: '/About/Corrosel/F5.jpg' },
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