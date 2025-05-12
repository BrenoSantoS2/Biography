import React from 'react';
import styles from './ProfessionalExperienceSection.module.css';
import ContentCarousel from '../ContentCarousel/ContentCarousel';
import { useTranslation } from 'react-i18next';

// Interface para os dados de cada card de experiência
interface ExperienceItemData {
  id: string;
  type: string; // Alterado para string para acomodar tipos traduzidos
  photoUrl?: string;
  title: string;
  subtitle: string;
  descriptionLines: string[];
  link?: string;
  technologies?: string;
}

// Ordem canônica das chaves de categoria
const orderedCategoryKeys = ['trabalho', 'projeto', 'outros'];

const ProfessionalExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  
  const professionalExperiences: ExperienceItemData[] = Object.entries(t('ProfessionalExperienceSection.experiences', { returnObjects: true })).map(([id, exp]: [string, any]) => ({
    id,
    type: exp.type,
    title: exp.title,
    subtitle: exp.subtitle,
    descriptionLines: exp.descriptionLines,
    link: exp.link,
    technologies: exp.technologies, // Adicionado para pegar as tecnologias do JSON
    photoUrl: exp.photoUrl || '/placeholder-image.jpg' // Usar photoUrl do JSON se existir, senão placeholder
  }));

  const groupExperiencesByType = (experiences: ExperienceItemData[]) => {
    return experiences.reduce((acc, exp) => {
      const type = exp.type;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(exp);
      return acc;
    }, {} as Record<string, ExperienceItemData[]>);
  };

  const groupedExperiences = groupExperiencesByType(professionalExperiences);

  return (
    <div id="experiencia-profissional-detalhada" className={styles.professionalExperienceContainer}>
      {orderedCategoryKeys.map(categoryKey => {
        // Obtém o tipo de categoria real (traduzido, singular) para usar como chave no agrupamento
        const currentCategoryType = t(`ProfessionalExperienceSection.categoryTypes.${categoryKey}`);
        // Obtém o título do carrossel (traduzido, plural)
        const carouselTitle = t(`ProfessionalExperienceSection.categoryTitles.${categoryKey}`);
        
        const experiencesInCategory = groupedExperiences[currentCategoryType];
        
        if (!experiencesInCategory || experiencesInCategory.length === 0) {
          return null; 
        }

        return (
          <ContentCarousel key={categoryKey} title={carouselTitle}>
            {experiencesInCategory.map((exp) => (
              <div key={exp.id} className={styles.experienceItem}>
                {exp.photoUrl && (
                  <div 
                    className={styles.experienceItemPhoto}
                    style={{ backgroundImage: `url(${exp.photoUrl})` }}
                  ></div>
                )}
                {!exp.photoUrl && (
                   <div className={styles.experienceItemPhoto}></div> // Placeholder se não houver photoUrl
                )}
                <div className={styles.experienceItemContent}>
                  <h4>{exp.title}</h4>
                  <p><em>{exp.subtitle}</em></p>
                  {exp.technologies && <p><strong>{t('ProfessionalExperienceSection.technologiesLabel', 'Tecnologias')}:</strong> {exp.technologies}</p>}
                  <ul>
                    {exp.descriptionLines.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                  {exp.link && <a href={exp.link} target="_blank" rel="noopener noreferrer">{t('ProfessionalExperienceSection.seeMoreLabel', 'Ver Mais')}</a>}
                </div>
              </div>
            ))}
          </ContentCarousel>
        );
      })}
    </div>
  );
};

export default ProfessionalExperienceSection; 