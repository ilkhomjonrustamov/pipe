import Intro from "@/app/[locale]/components/intro/intro";
import styles from "./page.module.css";
import TopIntro from "@/app/[locale]/components/utils/intro/intro";
import Catalog from "@/app/[locale]/components/catalog/catalog";
import CatalogCard from "@/app/[locale]/components/cards/catalogCard/catalogCard";
import axios from "axios";
import { getCategories } from "@/server/api";
import { ICategories } from "@/server/interfaces";

export default async function CatalogPage() {
  const catalogs: ICategories[] = await getCategories();

  return (
    <section>
      <TopIntro
        title={"каталог продукции"}
        link={"/catalog"}
        link_name={"Продукции"}
      />
      <div className={`${styles.catalogs} box`}>
        {catalogs.length > 0
          ? catalogs.map((categories) => {
              return (
                <CatalogCard key={categories.id} categories={categories} />
              );
            })
          : null}
      </div>
    </section>
  );
}
