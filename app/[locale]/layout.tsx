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
  icons: {
    icon: "/favicon.png",  // ou outro formato, se quiser
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png", // opcional, se tiver
  },
};


// Definindo interfaces explícitas para as props
interface LocaleLayoutParamsData { // Renomeado para evitar conflito com o tipo Promise
  locale: string;
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<LocaleLayoutParamsData>; // params é uma Promise
}

// O componente agora é async
export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const resolvedParams = await params; // Await para resolver a Promise
  const locale = resolvedParams.locale; 
  
  return (
    <html lang={locale}> {/* Usar o locale resolvido */}
      <body className={inter.className}>
        <I18nProviderWrapper locale={locale}> {/* Usar o locale resolvido */}
          <Header />
          <main>{children}</main>
        </I18nProviderWrapper>
      </body>
    </html>
  );
}

