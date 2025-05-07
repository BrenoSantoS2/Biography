import Image from 'next/image';
import styles from './CompanyCarousel.module.css';

interface CompanyItem {
  id: string;
  name: string;
  description: string;
  logoUrl: string; // Usaremos placeholders por enquanto
}

const companies: CompanyItem[] = [
  {
    id: 'btg1',
    name: 'BTG Pactual',
    description: 'Mentoria',
    logoUrl: '/file.svg', // Placeholder
  },
  {
    id: 'mckinsey',
    name: 'McKinsey & Company',
    description: 'Treinamento',
    logoUrl: '/file.svg', // Placeholder
  },
  {
    id: 'btg2',
    name: 'BTG Pactual',
    description: '2x Estágio de férias UX Design',
    logoUrl: '/file.svg', // Placeholder
  },
  {
    id: 'bancopan',
    name: 'Banco Pan',
    description: 'Estágio Regular em Auditoria Interna',
    logoUrl: '/file.svg', // Placeholder
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    description: 'Mentoria (6 meses)',
    logoUrl: '/file.svg', // Placeholder
  },
  {
    id: 'salesforce',
    name: 'Sales Force',
    description: 'Mentoria (6 meses)',
    logoUrl: '/file.svg', // Placeholder
  },
  {
    id: 'foursummit',
    name: 'Four Summit',
    description: 'Convidado para conferência',
    logoUrl: '/file.svg', // Placeholder
  },
];

const CompanyCarousel = () => {
  return (
    <section id="profissional" className={styles.carouselSection}>
      <h2 className={styles.sectionTitle}>Por onde eu já passei</h2>
      <div className={styles.carouselContainer}>
        {companies.map((company) => (
          <div key={company.id} className={styles.carouselItem}>
            <h3 className={styles.companyName}>{company.name}</h3>
            <div className={styles.logoWrapper}>
              <Image
                src={company.logoUrl}
                alt={`${company.name} logo`}
                width={144}
                height={108}
                className={styles.companyLogo}
              />
            </div>
            <p className={styles.description}>{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyCarousel; 