import Link from "next/link";
import styles from "./catalog.module.css";
import { arrow_right } from "@/public/icons";
import { elbow_right } from "../../../../public/icons";
import Image from "next/image";
import CatalogCard from "../cards/catalogCard/catalogCard";
import { getCategories } from "@/server/api";
import { ICategories } from "@/server/interfaces";
export default async function Catalog() {
  const catalogs: ICategories[] = await getCategories();
  return (
    <section>
      <div className={`${styles.container} box`}>
        <div className={styles.section_top}>
          <p className="section_title">каталог продукции</p>
          <Link href={"/catalog"} className={`link ${styles.link}`}>
            Узнать больше {arrow_right}
          </Link>
        </div>
        <div className={styles.catalogs}>
          {catalogs.length > 0
            ? catalogs.map((categories) => {
                return (
                  <CatalogCard key={categories.id} categories={categories} />
                );
              })
            : null}
        </div>
        <Link href={"/catalog"} className={`link ${styles.mobile_link}`}>
          Узнать больше {arrow_right}
        </Link>
      </div>
    </section>
  );
}
