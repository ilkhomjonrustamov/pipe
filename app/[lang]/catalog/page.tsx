import Intro from "@/app/[lang]/components/intro/intro";
import styles from "./page.module.css";
import TopIntro from "@/app/[lang]/components/utils/intro/intro";
import Catalog from "@/app/[lang]/components/catalog/catalog";
import CatalogCard from "@/app/[lang]/components/cards/catalogCard/catalogCard";
export default function CatalogPage() {
  return (
    <section>
      <TopIntro
        title={"каталог продукции"}
        link={"/catalog"}
        link_name={"Продукции"}
      />
      <div className={`${styles.catalogs} box`}>
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </section>
  );
}
