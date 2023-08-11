import { Header } from "@/app/[locale]/components/layout/header/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/[locale]/components/layout/footer/footer";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium pipe",
  description: "Premium pipe",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${inter.className} all`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
