import i18n from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

export const supportedLngs = ['pt', 'en', 'es'];
export const fallbackLng = 'pt';

i18n
  // Carrega traduções sob demanda da pasta /public/locales (ou messages/)
  // veja https://github.com/i18next/i18next-resources-to-backend
  .use(resourcesToBackend((language: string, namespace: string) => 
    import(`../messages/${language}.json`) // Ajuste o path se necessário
  ))
  // Detecta o idioma do usuário
  // saiba mais: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Passa a instância i18n para react-i18next.
  .use(initReactI18next)
  // Inicializa i18next
  // saiba mais: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true, // Descomente para depuração
    fallbackLng: fallbackLng, // Idioma padrão se o detectado não estiver disponível
    supportedLngs: supportedLngs, // Lista de idiomas suportados
    interpolation: {
      escapeValue: false, // Não necessário para React, pois ele já escapa
    },
    detection: {
      // Ordem e de onde detectar o idioma
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'navigator'],
      // Chaves a procurar em pesquisas, cookies, localStorage
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      // Cache do idioma detectado nesses locais
      caches: ['localStorage', 'cookie'],
    },
    // O backend irá carregar todos os namespaces (arquivos json) por padrão
    // Se você dividir suas traduções em múltiplos arquivos (namespaces), 
    // pode especificar aqui ou carregar sob demanda
    // ns: ['common', 'header', 'footer'], 
    // defaultNS: 'common'
  });

export default i18n; 