"use client"
import styles from './page.module.css'; // Caminho ajustado
import Hero from '../../components/Hero/Hero'; // Caminho ajustado
import CompanyCarousel from '../../components/CompanyCarousel/CompanyCarousel'; // Caminho ajustado
import AboutSection from '../../components/AboutSection/AboutSection'; // Caminho ajustado
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'; // Caminho ajustado
import AcademicSection from '../../components/AcademicSection/AcademicSection'; // Caminho ajustado
import ExchangeProgram from '../../components/ExchangeProgram/ExchangeProgram'; // Caminho ajustado

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
      <PhotoCarousel title="Minhas Fotos" /> {/* Usará tradução para o título */}
      <AcademicSection />
      <PhotoCarousel title="Mais Momentos" images={secondPhotoCarouselImages} /> {/* Usará tradução para o título */}
      <ExchangeProgram />
    </div>
  );
} 