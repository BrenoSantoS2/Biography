"use client";
import React from 'react';
import styles from './ContentCarousel.module.css';

interface ContentCarouselProps {
  title?: string; // Título opcional para a seção do carrossel
  children: React.ReactNode; // Conteúdo a ser renderizado dentro do carrossel
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ title, children }) => {
  return (
    <section className={styles.contentCarouselSection}>
      <div className="section-content-container">
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        <div className={styles.carouselContainer}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel; 