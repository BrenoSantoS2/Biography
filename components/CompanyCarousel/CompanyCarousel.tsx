"use client";
import Image from 'next/image';
import styles from './CompanyCarousel.module.css';
import { useTranslation } from 'react-i18next';

interface CompanyItemData {
  id: string;
  logoUrl: string;
}

const companyData: CompanyItemData[] = [
  {
    id: 'btg1',
    logoUrl: '/Company/btg.png',
  },
  {
    id: 'mckinsey',
    logoUrl: '/Company/mckinsey.jpg',
  },
  {
    id: 'btg2',
    logoUrl: '/Company/btg.png',
  },
  {
    id: 'bancopan',
    logoUrl: '/Company/pan.jpeg', 
  },
  {
    id: 'bloomberg',
    logoUrl: '/Company/bloomberg.png',
  },
  {
    id: 'salesforce',
    logoUrl: '/Company/salesforce.png',
  },
  {
    id: 'foursummit',
    logoUrl: '/Company/four.png',
  },
  {
    id: 'ismart',
    logoUrl: '/Company/ismart.jpg',
  },
  {
    id: 'fundaçãoEstudar',
    logoUrl: '/Company/fundacaoEstudar.jpg',
  },
  {
    id: 'amazon',
    logoUrl: '/Company/amazon.png',
  },
  {
    id: 'skyone',
    logoUrl: '/Company/skyone.png',
  },
  {
    id: 'lala',
    logoUrl: '/Company/lala.jpg',
  },
  {
    id: 'inteli',
    logoUrl: '/Company/inteli.jpg',
  },
  {
    id: 'gamelab',
    logoUrl: '/Company/gamelab.png',
  },
];

// Duplica os dados para o efeito de loop infinito
const duplicatedCompanyData = [...companyData, ...companyData];

const CompanyCarousel = () => {
  const { t } = useTranslation();

  return (
    <section id="profissional" className={styles.carouselSection}>
      <div className="section-content-container">
        <h2 className={styles.sectionTitle}>{t('CompanyCarousel.sectionTitle')}</h2>
        <div className={styles.carouselViewport}>
          <div className={styles.carouselContainer}>
            {duplicatedCompanyData.map((company, index) => (
              <div key={`${company.id}-${index}`} className={styles.carouselItem}>
                <h3 className={styles.companyName}>{t(`CompanyCarousel.companies.${company.id}.name`)}</h3>
                <div className={styles.logoWrapper}>
                  <Image
                    src={company.logoUrl}
                    alt={t(`CompanyCarousel.companies.${company.id}.logoAlt`, { companyName: t(`CompanyCarousel.companies.${company.id}.name`) })}
                    fill
                    className={styles.companyLogo}
                    sizes="144px"
                  />
                </div>
                <p className={styles.description}>{t(`CompanyCarousel.companies.${company.id}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel; 