'use client';

import { useTranslation } from 'react-i18next'; // Importar hook
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition, useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';

interface LanguageOption {
  value: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { value: 'pt', label: 'Português', flag: '🇧🇷' },
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation(); // Obter instância i18n
  const currentLocale = i18n.language; // Obter idioma atual do i18next
  const router = useRouter();
  const pathname = usePathname(); 
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    
    const currentPathWithoutLocaleMatch = pathname.match(/^\/[a-z]{2}(\/.*)?$/);
    const currentPathWithoutLocale = currentPathWithoutLocaleMatch 
      ? currentPathWithoutLocaleMatch[1] || '/'
      : pathname;

    // Mudar idioma no i18next E navegar para a URL correta
    startTransition(() => {
      i18n.changeLanguage(nextLocale).then(() => {
        router.replace(`/${nextLocale}${currentPathWithoutLocale}`);
        // O refresh pode ser necessário se as traduções não atualizarem dinamicamente
        // router.refresh(); 
      });
    });
  };

  // Sincroniza o idioma do i18n com o locale da URL na montagem inicial
  useEffect(() => {
    const urlLocale = pathname.split('/')[1];
    if (urlLocale && i18n.language !== urlLocale && languages.some(lang => lang.value === urlLocale)) {
      i18n.changeLanguage(urlLocale);
    }
  }, [pathname, i18n]);

  return (
    <div className={styles.languageSelectorWrapper}>
      <select 
        className={styles.selector}
        value={currentLocale} 
        onChange={handleChange}
        disabled={isPending}
        aria-label="Selecionar Idioma"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
} 