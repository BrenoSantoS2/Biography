'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n'; // Corrigido o caminho
import { useEffect } from 'react';

interface I18nProviderWrapperProps {
  children: React.ReactNode;
  locale: string; // Recebe o locale da URL
}

// Este wrapper garante que a inicialização do i18n ocorra no cliente
export default function I18nProviderWrapper({ 
  children, 
  locale 
}: I18nProviderWrapperProps) {

  // Força a mudança de idioma no i18next sempre que o locale da URL mudar
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 