import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Removendo completamente referências a next-intl por enquanto
import Header from "../../components/Header/Header";
import I18nProviderWrapper from "../../components/I18nProviderWrapper";
import '../globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minha Trajetória - Breno Santos",
  description: "Portfólio e campanha de intercâmbio de Breno Santos",
};

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale; 
  
  return (
    // Passando o locale para lang, mas sem provider i18n por agora
    <html lang={locale}>
      <body className={inter.className}>
        <I18nProviderWrapper locale={locale}>
          <Header />
          <main>{children}</main>
        </I18nProviderWrapper>
      </body>
    </html>
  );
} 