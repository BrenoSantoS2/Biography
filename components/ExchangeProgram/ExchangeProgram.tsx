"use client";

import Image from "next/image";
import styles from "./ExchangeProgram.module.css";
import { useTranslation } from "react-i18next";

interface CostItemData {
  id: string;
  // item: string; // Será traduzido
  costBRL: string; // Manter como string para formatação original, ou tratar como número
  costEUR: string; // Manter como string para formatação original, ou tratar como número
}

const costTableItemIds: CostItemData[] = [
  { id: "passagem", costBRL: "R$ 7.000", costEUR: "€ 1.300" },
  { id: "seguro", costBRL: "R$ 1.500", costEUR: "€ 280" },
  { id: "acomodacao", costBRL: "R$ 15.000", costEUR: "€ 2.800" },
  { id: "alimentacao", costBRL: "R$ 8.000", costEUR: "€ 1.500" },
  { id: "taxas", costBRL: "R$ 2.500", costEUR: "€ 470" },
  { id: "total", costBRL: "R$ 34.000", costEUR: "€ 6.350" },
];

// Placeholder para dados de arrecadação
const arrecadado = 12500; // Exemplo: R$ 12.500
const meta = 34000; // Exemplo: R$ 34.000
const progresso = (arrecadado / meta) * 100;

const ExchangeProgram = () => {
  const { t } = useTranslation();

  const handleCopyPix = () => {
    const pixKeyValue = t("ExchangeProgram.pixKeyValue"); // Pega a chave pix do arquivo de tradução
    navigator.clipboard
      .writeText(pixKeyValue)
      .then(() => alert(t("ExchangeProgram.alertPixCopied")))
      .catch((err) => {
        console.error("Erro ao copiar Pix: ", err);
        alert(t("ExchangeProgram.alertPixError"));
      });
  };

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
              <button onClick={handleCopyPix} className={styles.pixButton}>
                {t("ExchangeProgram.pixButtonText")}
              </button>
            </div>
            <div className={styles.progressSection}>
              <h3 className={styles.progressTitle}>
                {t("ExchangeProgram.progressTitle")}
              </h3>
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
              </p>
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
