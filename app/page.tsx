import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/layout/header/header";
import Contacts from "@/components/contacts/contacts";
import AboutCompany from "@/components/home/about_company/about_company";
import Catalog from "@/components/catalog/catalog";
import Products from "@/components/home/products/products";
import Partners from "@/components/partners/partners";
import Gallery from "@/components/gallery/gallery";
import Intro from "@/components/intro/intro";
import ContactsHome from "@/components/contacts/contacts";

export default function Home() {
  return (
    <>
      <Intro />
      <AboutCompany />
      <Catalog />
      <Products />
      <Gallery />
      <Partners />
      <ContactsHome />
    </>
  );
}
