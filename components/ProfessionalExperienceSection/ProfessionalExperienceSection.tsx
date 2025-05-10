import React from 'react';
import styles from './ProfessionalExperienceSection.module.css';
import ContentCarousel from '../ContentCarousel/ContentCarousel';

// Interface para os dados de cada card de experiência
interface ExperienceItemData {
  id: string;
  type: 'Estágio' | 'Projeto' | 'Mentoria' | 'Trabalho' | 'Outros'; // Adicionado Trabalho e Outros
  photoUrl?: string; // Opcional, para a imagem do card
  title: string;
  subtitle: string;
  descriptionLines: string[];
  link?: string;
  technologies?: string;
}

// Dados de exemplo populados
const professionalExperiences: ExperienceItemData[] = [
  {
    id: 'estagio1',
    type: 'Estágio',
    title: 'Empresa de Tecnologia XPTO | Desenvolvedor Front-End Jr.',
    subtitle: 'Jan 2023 - Jun 2023',
    descriptionLines: [
      'Desenvolvimento e manutenção de interfaces com React e TypeScript.',
      'Colaboração em equipe ágil para entrega de novas funcionalidades.',
    ],
    photoUrl: '/placeholder-image.jpg'
  },
  {
    id: 'trabalho1',
    type: 'Trabalho',
    title: 'Agência Web Criativa | Desenvolvedor Web Pleno',
    subtitle: 'Jul 2023 - Atual',
    descriptionLines: [
      'Liderança técnica no desenvolvimento de e-commerces com Shopify.',
      'Criação de temas e aplicativos customizados para clientes.'
    ],
    photoUrl: '/placeholder-image.jpg'
  },
  {
    id: 'projeto1',
    type: 'Projeto',
    title: 'Sistema de Gerenciamento de Intercâmbio (Pessoal)',
    subtitle: 'Tecnologias: Next.js, Firebase, TypeScript',
    descriptionLines: [
      'Plataforma para organizar informações e doações para intercâmbio.',
    ],
    link: '#',
    photoUrl: '/placeholder-image.jpg'
  },
  {
    id: 'mentoria1',
    type: 'Mentoria',
    title: 'Mentoria em Desenvolvimento Web | Programa TechLead',
    subtitle: 'Universidade ABC | Mentor Voluntário',
    descriptionLines: [
      'Orientação de alunos iniciantes na área de desenvolvimento web.',
    ],
    photoUrl: '/placeholder-image.jpg'
  },
  {
    id: 'outros1',
    type: 'Outros',
    title: 'Palestra sobre Carreira em TI',
    subtitle: 'Evento: Semana de Tecnologia Local',
    descriptionLines: [
      'Apresentação sobre tendências e dicas para iniciar na área de TI.'
    ],
    photoUrl: '/placeholder-image.jpg'
  },
  {
    id: 'projeto2',
    type: 'Projeto',
    title: 'App Mobile para Organização de Estudos',
    subtitle: 'Tecnologias: React Native, SQLite',
    descriptionLines: [
      'Aplicativo para ajudar estudantes a gerenciar horários e tarefas.',
    ],
    photoUrl: '/placeholder-image.jpg'
  },
  {
    id: 'estagio2',
    type: 'Estágio',
    title: 'Startup Inovadora Z | Estagiário de UI/UX Design',
    subtitle: 'Jul 2022 - Dez 2022',
    descriptionLines: [
      'Criação de protótipos e wireframes para novas features do app.',
    ],
    photoUrl: '/placeholder-image.jpg'
  },
];

// Helper para agrupar experiências por tipo
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

const ProfessionalExperienceSection: React.FC = () => {
  const groupedExperiences = groupExperiencesByType(professionalExperiences);
  const categoriesOrder: Array<ExperienceItemData['type']> = ['Trabalho', 'Estágio', 'Projeto', 'Mentoria', 'Outros']; // Define a ordem desejada

  return (
    <div className={styles.professionalExperienceContainer}> {/* Um container geral para a seção */}
      {categoriesOrder.map(categoryName => {
        const experiencesInCategory = groupedExperiences[categoryName];
        if (!experiencesInCategory || experiencesInCategory.length === 0) {
          return null; // Não renderiza o carrossel se não houver itens na categoria
        }

        return (
          <ContentCarousel key={categoryName} title={categoryName}>
            {experiencesInCategory.map((exp) => (
              <div key={exp.id} className={styles.experienceItem}>
                {exp.photoUrl && (
                  <div 
                    className={styles.experienceItemPhoto}
                    style={{ backgroundImage: `url(${exp.photoUrl})` }}
                  ></div>
                )}
                {!exp.photoUrl && (
                   <div className={styles.experienceItemPhoto}></div>
                )}
                <div className={styles.experienceItemContent}>
                  <h4>{exp.title}</h4>
                  <p><em>{exp.subtitle}</em></p>
                  {exp.technologies && <p><strong>Tecnologias:</strong> {exp.technologies}</p>}
                  <ul>
                    {exp.descriptionLines.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                  {exp.link && <a href={exp.link} target="_blank" rel="noopener noreferrer">Ver Mais</a>}
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