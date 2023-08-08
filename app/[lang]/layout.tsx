import { Header } from "@/app/[lang]/components/layout/header/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/[lang]/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });
import {
  getLocalePartsFrom,
  locales,
  ValidLocale,
  getTranslator,
} from "@/i18n";
import { Locale, i18n } from "@/i18n.config";
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Premium pipe",
  description: "Premium pipe",
};
// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const translate = await getTranslator(
    `${params.lang}` as ValidLocale // our middleware ensures this is valid
  );
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} all`}>
        <Header lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
