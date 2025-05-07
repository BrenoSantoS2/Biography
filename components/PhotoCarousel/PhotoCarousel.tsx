import Image from 'next/image';
import styles from './PhotoCarousel.module.css';

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

// Usaremos algumas imagens da pasta Pessoal como placeholders
const carouselImages: CarouselImage[] = [
  { id: 'photo1', src: '/Fotos/Pessoal/20250411_061325.jpg', alt: 'Foto Pessoal 1' },
  { id: 'photo2', src: '/Fotos/Pessoal/20250412_080644.jpg', alt: 'Foto Pessoal 2' },
  { id: 'photo3', src: '/Fotos/Pessoal/20250416_115942.jpg', alt: 'Foto Pessoal 3' },
  { id: 'photo4', src: '/Fotos/Pessoal/20250412_080636.jpg', alt: 'Foto Pessoal 4' },
  { id: 'photo5', src: '/Fotos/Pessoal/20250416_120857.jpg', alt: 'Foto Pessoal 5' },
];

interface PhotoCarouselProps {
  title?: string; // Título opcional para reutilização
  images?: CarouselImage[]; // Imagens opcionais para reutilização
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ 
  title = "Photos", 
  images = carouselImages 
}) => {
  return (
    <section className={styles.photoCarouselSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.carouselContainer}>
        {images.map((image) => (
          <div key={image.id} className={styles.carouselItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={470}
              height={300}
              className={styles.carouselImage}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel; 