"use client";

import Image from 'next/image';
import styles from './ExchangeProgram.module.css';

interface CostItem {
  id: string;
  item: string;
  costBRL: string;
  costEUR: string;
  // Adicione mais colunas se necessário, conforme o Figma
}

// Placeholder para a tabela de custos
const costTableData: CostItem[] = [
  { id: 'passagem', item: 'Passagens Aéreas (Ida e Volta)', costBRL: 'R$ 7.000', costEUR: '€ 1.300' },
  { id: 'seguro', item: 'Seguro Viagem Obrigatório', costBRL: 'R$ 1.500', costEUR: '€ 280' },
  { id: 'acomodacao', item: 'Acomodação (5 meses)', costBRL: 'R$ 15.000', costEUR: '€ 2.800' },
  { id: 'alimentacao', item: 'Alimentação e Custos Básicos', costBRL: 'R$ 8.000', costEUR: '€ 1.500' },
  { id: 'taxas', item: 'Taxas Universitárias/Visto', costBRL: 'R$ 2.500', costEUR: '€ 470' },
  { id: 'total', item: 'TOTAL ESTIMADO', costBRL: 'R$ 34.000', costEUR: '€ 6.350' },
];

// Placeholder para dados de arrecadação
const arrecadado = 12500; // Exemplo: R$ 12.500
const meta = 34000; // Exemplo: R$ 34.000
const progresso = (arrecadado / meta) * 100;

const ExchangeProgram = () => {
  const handleCopyPix = () => {
    navigator.clipboard.writeText('SUA-CHAVE-PIX-AQUI') // Substitua pela sua chave Pix real
      .then(() => alert('Chave Pix copiada para a área de transferência!'))
      .catch(err => console.error('Erro ao copiar Pix: ', err));
  };

  return (
    <section id="intercambio" className={styles.exchangeSection}>
      {/* Hero da Seção de Intercâmbio */}
      <div className={styles.exchangeHero}>
        <div className={styles.exchangeHeroBackground}> 
          {/* Imagem de fundo placeholder ou cor. No Figma é image (24:628) e um overlay */}
        </div>
        <div className={styles.exchangeHeroContent}>
          <h2 className={styles.exchangeTitle}>Intercâmbio</h2>
          <p className={styles.exchangeLocation}>
            Thomas More<br />
            Mechelen - Bélgica
          </p>
        </div>
      </div>

      {/* Conteúdo de Arrecadação e Custos */}
      <div className={styles.contentArea}>
        <div className={styles.fundraisingContainer}>
          <div className={styles.pixSection}>
            <h3 className={styles.pixTitle}>Copiar Chave Pix</h3>
            <button onClick={handleCopyPix} className={styles.pixButton}>
              MINHA.CHAVE.PIX@EMAIL.COM
            </button> 
            {/* O Figma tem "Botão" escrito, mas mostrar a chave e copiar é mais útil */}
          </div>
          <div className={styles.progressSection}>
            <h3 className={styles.progressTitle}>Arrecadado</h3>
            <div className={styles.progressBarContainer}>
              <div 
                className={styles.progressBar}
                style={{ width: `${progresso > 100 ? 100 : progresso}%` }}
              >
                {`R$ ${arrecadado.toLocaleString('pt-BR')} / R$ ${meta.toLocaleString('pt-BR')}`}
              </div>
            </div>
            <p className={styles.progressValues}>{`${progresso.toFixed(1)}% da meta`}</p>
          </div>
        </div>

        <div className={styles.costsTableContainer}>
          <h3 className={styles.tableTitle}>Tabela de custos</h3>
          <table className={styles.costsTable}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Custo (BRL)</th>
                <th>Custo (EUR)</th>
                {/* Adicionar mais headers se houver mais colunas no Figma */}
              </tr>
            </thead>
            <tbody>
              {costTableData.map((item) => (
                <tr key={item.id} className={item.id === 'total' ? styles.totalRow : ''}>
                  <td>{item.item}</td>
                  <td>{item.costBRL}</td>
                  <td>{item.costEUR}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ExchangeProgram; 