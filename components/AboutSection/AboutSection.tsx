"use client";
import Image from "next/image";
import React from "react";
import styles from "./AboutSection.module.css";
import { useTranslation } from "react-i18next";

interface Topic {
  id: string;
  imageUrl: string;
  layout: "textLeft" | "textRight";
}

const aboutTopicIds: Pick<Topic, "id" | "imageUrl" | "layout">[] = [
  {
    id: "sobre-mim",
    imageUrl: "/About/Eu3.jpg",
    layout: "textLeft",
  },
  {
    id: "familia",
    imageUrl: "/About/family.jpg",
    layout: "textRight",
  }
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className="section-content-container">
        <div className={styles.divider}></div>
        <h2 className={styles.mainTitle}>{t("AboutSection.mainTitle")}</h2>
        <div className={styles.topicsContainer}>
          {aboutTopicIds.map((topic) => (
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
                  {t(`AboutSection.topics.${topic.id}.title`)}
                </h3>
                <p className={styles.topicText}>
                  {t(`AboutSection.topics.${topic.id}.text`)
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
                  alt={t(`AboutSection.topics.${topic.id}.imageAlt`)}
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

export default AboutSection;
