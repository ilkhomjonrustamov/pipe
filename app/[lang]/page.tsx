import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/app/[lang]/components/layout/header/header";
import Contacts from "@/app/[lang]/components/contacts/contacts";
import AboutCompany from "@/app/[lang]/components/home/about_company/about_company";
import Catalog from "@/app/[lang]/components/catalog/catalog";
import Products from "@/app/[lang]/components/home/products/products";
import Partners from "@/app/[lang]/components/partners/partners";
import Gallery from "@/app/[lang]/components/gallery/gallery";
import Intro from "@/app/[lang]/components/intro/intro";
import ContactsHome from "@/app/[lang]/components/contacts/contacts";

// export default function Home() {
//   return (
//     <>
//       <Intro />
//       <AboutCompany />
//       <Catalog />
//       <Products />
//       <Gallery />
//       <Partners />
//       <ContactsHome />
//     </>
//   );
// }
// page.tsx

import {
  getLocalePartsFrom,
  locales,
  ValidLocale,
  getTranslator,
} from "@/i18n";
export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function Home({ params }: { params: { lang: string } }) {
  const translate = await getTranslator(
    `${params.lang}` as ValidLocale // our middleware ensures this is valid
  );
  return (
    <div>
      <h1>{translate("welcome.helloWorld")}</h1>
      <h2>
        {translate("welcome.happyYear", {
          year: new Date().getFullYear(),
        })}
      </h2>
    </div>
  );
}
