"use client";

import Image from "next/image";
import styles from "./ExchangeProgram.module.css";
import { useTranslation } from "react-i18next";
import React from "react";

interface CostItemData {
  id: string;
  // item: string; // Será traduzido
  costBRL: string; // Manter como string para formatação original, ou tratar como número
  costEUR: string; // Manter como string para formatação original, ou tratar como número
}

const costTableItemIds: CostItemData[] = [
  { id: "passagem", costBRL: "R$ 9.000", costEUR: "€ 1.500" },
  { id: "seguro", costBRL: "R$ 2.100", costEUR: "€ 350" },
  { id: "acomodacao", costBRL: "R$ 18.000", costEUR: "€ 3.000" },
  { id: "alimentacao", costBRL: "R$ 12.000", costEUR: "€ 2.000" },
  { id: "transporte", costBRL: "R$ 2.400", costEUR: "€ 400" },
  { id: "material", costBRL: "R$ 3.000", costEUR: "€ 300" },
  { id: "despesasPessoais", costBRL: "R$ 9.000", costEUR: "€ 1500" },
  { id: "imprevistos", costBRL: "R$ 3.000", costEUR: "€ 500" },
  { id: "total", costBRL: "R$ 58.500", costEUR: "€ 9.550" },
];

// Placeholder para dados de arrecadação
const arrecadado = 4162;
const meta = 58500;
const progresso = (arrecadado / meta) * 100;

const ExchangeProgram = () => {
  const { t } = useTranslation();

  return (
    <section id="intercambio" className={styles.exchangeSection}>
      {/* Hero da Seção de Intercâmbio */}
      <div className={styles.exchangeHero}>
        <div className={styles.exchangeHeroBackground}>
          <Image
            src="/Exchange/Belgium.png"
            alt="Exchange Hero Background"
            fill
            className={styles.heroImage}
          />
        </div>

        {/* Contêiner interno para o conteúdo do hero */}
        <div className={`section-content-container ${styles.fullHeight}`}>
          <div className={styles.exchangeHeroContent}>
            <h2 className={styles.exchangeTitle}>
              {t("ExchangeProgram.sectionTitle")}
            </h2>
            <div className={styles.exchangeLocationContainer}>
              <p className={styles.exchangeLocation}>
                {t("ExchangeProgram.locationCountry")}
              </p>
              <p className={styles.exchangeLocation}>
                {t("ExchangeProgram.locationName")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo de Arrecadação e Custos - este terá seu próprio contêiner interno */}
      <div className="section-content-container">
        <div className={styles.contentArea}>
          <div className={styles.fundraisingContainer}>
            <div className={styles.pixSection}>
              <h3 className={styles.pixTitle}>
                {t("ExchangeProgram.pixTitle")}
              </h3>
              {/* Botão para doação via Pix */}
              <a
                href="https://cofrinhos.picpay.com/Ynl5ulJlbm8uc2FudG9zMTIwOC8xMC9kb2FvaW50ZXJjbWJpby9ERUZBVUxU"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pixButton} // Pode reutilizar ou criar um novo estilo
              >
                {t("ExchangeProgram.donatePixButtonText")}
              </a>
              {/* Botão para doação via PayPal */}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=R4928X6KMW6NQ"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.payPalButton} // Crie um estilo específico para este botão se necessário
              >
                {t("ExchangeProgram.donatePayPalButtonText")}
              </a>
            </div>
            <div className={styles.progressSection}>
              <h3 className={styles.progressTitle}>
                {t("ExchangeProgram.progressTitle")}
              </h3>
              <p className={styles.progressInfo}>
                {" "}
                {t("ExchangeProgram.progressInfo")}
              </p>
              <div className={styles.progressBarContainer}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${progresso > 100 ? 100 : progresso}%` }}
                >
                  {t("ExchangeProgram.progressText", {
                    arrecadado: arrecadado.toLocaleString("pt-BR"),
                    meta: meta.toLocaleString("pt-BR"),
                  })}
                </div>
              </div>
              <p className={styles.progressValues}>
                {t("ExchangeProgram.progressPercentageText", {
                  percentage: progresso.toFixed(1),
                })}
                <br />
                <br />
                <strong>{arrecadado}R$ / {meta}R$</strong>
              </p>
            </div>
          </div>
          <div>
            <h3 className={styles.tableTitle}>
              {t("ExchangeProgram.exchangeInfo")}
            </h3>
            <p className={styles.topicText}>
              {t(`ExchangeProgram.exchangeInfoText`)
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
            <h3 className={styles.tableTitle}>
              {t("ExchangeProgram.exchangeLetter")}
            </h3>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={"Exchange/Frame 32.png"} />
            </div>
          </div>
          <div className={styles.costsTableContainer}>
            <h3 className={styles.tableTitle}>
              {t("ExchangeProgram.costsTableTitle")}
            </h3>
            <table className={styles.costsTable}>
              <thead>
                <tr>
                  <th>{t("ExchangeProgram.costsTable.header.item")}</th>
                  <th>{t("ExchangeProgram.costsTable.header.costBRL")}</th>
                  <th>{t("ExchangeProgram.costsTable.header.costEUR")}</th>
                </tr>
              </thead>
              <tbody>
                {costTableItemIds.map((itemData) => (
                  <tr
                    key={itemData.id}
                    className={itemData.id === "total" ? styles.totalRow : ""}
                  >
                    <td>
                      {t(
                        `ExchangeProgram.costsTable.items.${itemData.id}.item`
                      )}
                    </td>
                    <td>{itemData.costBRL}</td>
                    <td>{itemData.costEUR}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeProgram;
