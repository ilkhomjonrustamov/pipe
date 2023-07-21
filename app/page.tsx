import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/layout/header/header";
import Contacts from "@/components/contacts/contacts";
import AboutCompany from "@/components/home/about_company/about_company";
import Catalog from "@/components/catalog/catalog";
import Products from "@/components/home/products/products";
import Partners from "@/components/partners/partners";
// import Intro from "@/components/intro/intro";

export default function Home() {
  return (
    <>
      {/* <Intro /> */}
      <AboutCompany />
      <Catalog />
      <Products />
      <Partners />
      <Contacts />
    </>
  );
}
