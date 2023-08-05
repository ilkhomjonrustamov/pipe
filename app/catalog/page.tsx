import Intro from "@/components/intro/intro";
import styles from "./page.module.css";
import TopIntro from "@/components/utils/intro/intro";
import Catalog from "@/components/catalog/catalog";
import CatalogCard from "@/components/cards/catalogCard/catalogCard";
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
