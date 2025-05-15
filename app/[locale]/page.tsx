"use client"
import styles from './page.module.css'; // Caminho ajustado
import Hero from '../../components/Hero/Hero'; // Caminho ajustado
import CompanyCarousel from '../../components/CompanyCarousel/CompanyCarousel'; // Caminho ajustado
import AboutSection from '../../components/AboutSection/AboutSection'; // Caminho ajustado
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'; // Caminho ajustado
import AcademicSection from '../../components/AcademicSection/AcademicSection'; // Caminho ajustado
import ExchangeProgram from '../../components/ExchangeProgram/ExchangeProgram'; // Caminho ajustado
import ProfessionalExperienceSection from '../../components/ProfessionalExperienceSection/ProfessionalExperienceSection'; // Novo componente

const firstPhotoCarouselImages = [
  { id: 'sp1', src: '/About/Carrosel/F1.jpg', alt: 'Segunda Foto Pessoal 1' },
  { id: 'sp2', src: '/About/Carrosel/F2.jpg', alt: 'Segunda Foto Pessoal 2' },
  { id: 'sp3', src: '/About/Carrosel/F3.jpg', alt: 'Segunda Foto Pessoal 3' },
  { id: 'sp4', src: '/About/Carrosel/F4.jpg', alt: 'Segunda Foto Pessoal 4' },
  { id: 'sp5', src: '/About/Carrosel/F5.jpg', alt: 'Segunda Foto Pessoal 5' },
  { id: 'sp6', src: '/About/Carrosel/F6.jpg', alt: 'Segunda Foto Pessoal 6' },
  { id: 'sp7', src: '/About/Carrosel/F7.jpg', alt: 'Segunda Foto Pessoal 7' },
  { id: 'sp8', src: '/About/Carrosel/F8.jpg', alt: 'Segunda Foto Pessoal 8' },
  { id: 'sp18', src: '/About/Carrosel/F18.jpg', alt: 'Segunda Foto Pessoal 18' },
  { id: 'sp9', src: '/About/Carrosel/F9.jpg', alt: 'Segunda Foto Pessoal 9' },
  { id: 'sp10', src: '/About/Carrosel/F10.jpg', alt: 'Segunda Foto Pessoal 10' },
  { id: 'sp11', src: '/About/Carrosel/F11.jpg', alt: 'Segunda Foto Pessoal 11' },
  { id: 'sp12', src: '/About/Carrosel/F12.jpg', alt: 'Segunda Foto Pessoal 12' }, 
  { id: 'sp13', src: '/About/Carrosel/F13.jpg', alt: 'Segunda Foto Pessoal 13' },
  { id: 'sp14', src: '/About/Carrosel/F14.jpg', alt: 'Segunda Foto Pessoal 14' },
  { id: 'sp15', src: '/About/Carrosel/F15.jpg', alt: 'Segunda Foto Pessoal 15' },
  { id: 'sp17', src: '/About/Carrosel/F17.jpg', alt: 'Segunda Foto Pessoal 17' },
];

// Dados para o segundo carrossel de fotos (pode ser diferente ou o mesmo)
const secondPhotoCarouselImages = [
  { id: 'sp1', src: '/Academic/Carrosel/F1.jpg', alt: 'Segunda Foto Pessoal 1' },
  { id: 'sp2', src: '/Academic/Carrosel/F2.jpg', alt: 'Segunda Foto Pessoal 2' },
  { id: 'sp3', src: '/Academic/Carrosel/F3.jpg', alt: 'Segunda Foto Pessoal 3' },
  { id: 'sp4', src: '/Academic/Carrosel/F4.jpg', alt: 'Segunda Foto Pessoal 4' },
  { id: 'sp5', src: '/Academic/Carrosel/F5.jpg', alt: 'Segunda Foto Pessoal 5' },
  { id: 'sp6', src: '/Academic/Carrosel/F6.jpg', alt: 'Segunda Foto Pessoal 6' },
  { id: 'sp7', src: '/Academic/Carrosel/F7.jpg', alt: 'Segunda Foto Pessoal 7' },
  { id: 'sp8', src: '/Academic/Carrosel/F8.jpg', alt: 'Segunda Foto Pessoal 8' },
  { id: 'sp9', src: '/Academic/Carrosel/F9.jpg', alt: 'Segunda Foto Pessoal 9' },
  { id: 'sp10', src: '/Academic/Carrosel/F10.jpg', alt: 'Segunda Foto Pessoal 10' },
  { id: 'sp11', src: '/Academic/Carrosel/F11.jpg', alt: 'Segunda Foto Pessoal 11' },
  { id: 'sp12', src: '/Academic/Carrosel/F12.jpg', alt: 'Segunda Foto Pessoal 12' },
  { id: 'sp13', src: '/Academic/Carrosel/F13.jpg', alt: 'Segunda Foto Pessoal 13' },
  { id: 'sp14', src: '/Academic/Carrosel/F14.jpg', alt: 'Segunda Foto Pessoal 14' },
  { id: 'sp15', src: '/Academic/Carrosel/F15.jpg', alt: 'Segunda Foto Pessoal 15' },
  { id: 'sp16', src: '/Academic/Carrosel/F16.jpg', alt: 'Segunda Foto Pessoal 16' },
  { id: 'sp17', src: '/Academic/Carrosel/F17.jpg', alt: 'Segunda Foto Pessoal 17' },
  { id: 'sp18', src: '/Academic/Carrosel/F18.jpg', alt: 'Segunda Foto Pessoal 18' },
  { id: 'sp19', src: '/Academic/Carrosel/F19.jpg', alt: 'Segunda Foto Pessoal 19' },
  { id: 'sp20', src: '/Academic/Carrosel/F20.jpg', alt: 'Segunda Foto Pessoal 20' },
  { id: 'sp21', src: '/Academic/Carrosel/F21.jpg', alt: 'Segunda Foto Pessoal 21' },
  { id: 'sp22', src: '/Academic/Carrosel/F22.jpg', alt: 'Segunda Foto Pessoal 22' },
  { id: 'sp23', src: '/Academic/Carrosel/F23.jpg', alt: 'Segunda Foto Pessoal 23' },
  { id: 'sp24', src: '/Academic/Carrosel/F24.jpg', alt: 'Segunda Foto Pessoal 24' },
  { id: 'sp25', src: '/Academic/Carrosel/F25.jpg', alt: 'Segunda Foto Pessoal 25' },
  { id: 'sp26', src: '/Academic/Carrosel/F26.jpg', alt: 'Segunda Foto Pessoal 26' },
  { id: 'sp27', src: '/Academic/Carrosel/F27.jpg', alt: 'Segunda Foto Pessoal 27' },
  { id: 'sp28', src: '/Academic/Carrosel/F28.jpg', alt: 'Segunda Foto Pessoal 28' },
  { id: 'sp29', src: '/Academic/Carrosel/F29.jpg', alt: 'Segunda Foto Pessoal 29' },
  { id: 'sp30', src: '/Academic/Carrosel/F30.jpg', alt: 'Segunda Foto Pessoal 30' },
  { id: 'sp31', src: '/Academic/Carrosel/F31.jpg', alt: 'Segunda Foto Pessoal 31' },
  { id: 'sp32', src: '/Academic/Carrosel/F32.jpg', alt: 'Segunda Foto Pessoal 32' },
  { id: 'sp33', src: '/Academic/Carrosel/F33.jpg', alt: 'Segunda Foto Pessoal 33' },
  { id: 'sp34', src: '/Academic/Carrosel/F34.jpg', alt: 'Segunda Foto Pessoal 34' },
  { id: 'sp35', src: '/Academic/Carrosel/F35.jpg', alt: 'Segunda Foto Pessoal 35' },
  { id: 'sp36', src: '/Academic/Carrosel/F36.jpg', alt: 'Segunda Foto Pessoal 36' },
  { id: 'sp37', src: '/Academic/Carrosel/F37.jpg', alt: 'Segunda Foto Pessoal 37' },
  { id: 'sp38', src: '/Academic/Carrosel/F38.jpg', alt: 'Segunda Foto Pessoal 38' },
  { id: 'sp39', src: '/Academic/Carrosel/F39.jpg', alt: 'Segunda Foto Pessoal 39' },
  { id: 'sp40', src: '/Academic/Carrosel/F40.jpg', alt: 'Segunda Foto Pessoal 40' },
  { id: 'sp41', src: '/Academic/Carrosel/F41.jpg', alt: 'Segunda Foto Pessoal 41' },
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
      <ProfessionalExperienceSection />
      <ExchangeProgram />
    </div>
  );
}