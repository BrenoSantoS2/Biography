"use client";
import Image from "next/image";
import React from "react";
import styles from "../AboutSection/AboutSection.module.css"; // Reutilizando estilos da AboutSection
import { useTranslation } from "react-i18next"; // Importado

interface TopicData {
  id: string;
  imageUrl: string;
  layout: "textLeft" | "textRight";
}

// Dados placeholder para a seção Acadêmico (somente IDs e dados não traduzíveis)
const academicTopicIds: TopicData[] = [
  {
    id: "academico-geral",
    imageUrl: "/Fotos/Pessoal/20250416_115933.jpg", // Placeholder image
    layout: "textLeft",
  },
  {
    id: "cursos-extras",
    imageUrl: "/Fotos/Pessoal/20250416_115940.jpg", // Placeholder image
    layout: "textRight",
  },
  {
    id: "conquistas-academicas",
    imageUrl: "/Fotos/Pessoal/20250416_120856.jpg", // Placeholder image
    layout: "textLeft",
  },
];

const AcademicSection = () => {
  const { t } = useTranslation(); // Hook de tradução

  return (
    <section id="academico" className={styles.aboutSection}>
      <div className="section-content-container">
        <div className={styles.divider}></div>
        <h2 className={styles.mainTitle}>{t("AcademicSection.mainTitle")}</h2>
        <div className={styles.topicsContainer}>
          {academicTopicIds.map((topic) => (
            <div
              key={topic.id}
              className={`${styles.topicItem} ${
                topic.layout === "textRight"
                  ? styles.textRight
                  : styles.textLeft
              }`}
            >
              <div className={styles.topicTextContainer}>
                <h3 className={styles.topicTitle}>
                  {t(`AcademicSection.topics.${topic.id}.title`)}
                </h3>
                <p className={styles.topicText}>
                  {t(`AcademicSection.topics.${topic.id}.text`)
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </div>
              <div className={styles.topicImageContainer}>
                <Image
                  src={topic.imageUrl}
                  alt={t(`AcademicSection.topics.${topic.id}.imageAlt`)}
                  width={360}
                  height={360}
                  className={styles.topicImage}
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
