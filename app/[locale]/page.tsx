"use client"
import styles from './page.module.css'; // Caminho ajustado
import Hero from '../../components/Hero/Hero'; // Caminho ajustado
import CompanyCarousel from '../../components/CompanyCarousel/CompanyCarousel'; // Caminho ajustado
import AboutSection from '../../components/AboutSection/AboutSection'; // Caminho ajustado
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'; // Caminho ajustado
import AcademicSection from '../../components/AcademicSection/AcademicSection'; // Caminho ajustado
import ExchangeProgram from '../../components/ExchangeProgram/ExchangeProgram'; // Caminho ajustado

const firstPhotoCarouselImages = [
  { id: 'sp1', src: '/About/Carrosel/F1.jpg', alt: 'Segunda Foto Pessoal 1' },
  { id: 'sp2', src: '/About/Carrosel/F2.jpg', alt: 'Segunda Foto Pessoal 2' },
  { id: 'sp3', src: '/About/Carrosel/F3.jpg', alt: 'Segunda Foto Pessoal 3' },
  { id: 'sp4', src: '/About/Carrosel/F4.jpg', alt: 'Segunda Foto Pessoal 4' },
  { id: 'sp5', src: '/About/Carrosel/F5.jpg', alt: 'Segunda Foto Pessoal 5' },
  { id: 'sp6', src: '/About/Carrosel/F6.jpg', alt: 'Segunda Foto Pessoal 6' },
  { id: 'sp7', src: '/About/Carrosel/F7.jpg', alt: 'Segunda Foto Pessoal 7' },
  { id: 'sp8', src: '/About/Carrosel/F8.jpg', alt: 'Segunda Foto Pessoal 8' },
  { id: 'sp9', src: '/About/Carrosel/F9.jpg', alt: 'Segunda Foto Pessoal 9' },
];

// Dados para o segundo carrossel de fotos (pode ser diferente ou o mesmo)
const secondPhotoCarouselImages = [
  { id: 'sp1', src: '/Fotos/Pessoal/20250416_115933.jpg', alt: 'Segunda Foto Pessoal 1' },
  { id: 'sp2', src: '/Fotos/Pessoal/20250416_115940.jpg', alt: 'Segunda Foto Pessoal 2' },
  { id: 'sp3', src: '/Fotos/Pessoal/20250411_061326.jpg', alt: 'Segunda Foto Pessoal 3' },
  { id: 'sp4', src: '/Fotos/Pessoal/20250412_080635.jpg', alt: 'Segunda Foto Pessoal 4' },
];

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Hero />
      <CompanyCarousel />
      <AboutSection />
      <PhotoCarousel images={firstPhotoCarouselImages} /> {/* Usará tradução para o título */}
      <AcademicSection />
      <PhotoCarousel images={secondPhotoCarouselImages} /> {/* Usará tradução para o título */}
      <ExchangeProgram />
    </div>
  );
}