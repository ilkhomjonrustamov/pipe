import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/app/[locale]/components/layout/header/header";
import Contacts from "@/app/[locale]/components/contacts/contacts";
import AboutCompany from "@/app/[locale]/components/home/about_company/about_company";
import Catalog from "@/app/[locale]/components/catalog/catalog";
import Products from "@/app/[locale]/components/home/products/products";
import Partners from "@/app/[locale]/components/partners/partners";
import Gallery from "@/app/[locale]/components/newshome/newshome";
import Intro from "@/app/[locale]/components/intro/intro";
import ContactsHome from "@/app/[locale]/components/contacts/contacts";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Alert from "./alert";
import NewsHome from "@/app/[locale]/components/newshome/newshome";
export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Intro />
      <AboutCompany />
      <Catalog />
      <Products />
      <NewsHome />
      <Partners />
      <ContactsHome />
    </>
  );
}
