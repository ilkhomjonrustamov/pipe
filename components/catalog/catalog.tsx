import Link from "next/link";
import styles from "./catalog.module.css";
import { arrow_right } from "@/public/icons";
import { elbow_right } from "../../public/icons";
import Image from "next/image";
import CatalogCard from "../cards/catalogCard/catalogCard";
export default function Catalog() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.section_top}>
          <p className="section_title">каталог продукции</p>
          <Link href={"/catalog"} className="link">
            Узнать больше {arrow_right}
          </Link>
        </div>
        <div className={styles.catalogs}>
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
          <CatalogCard />
        </div>
      </div>
    </section>
  );
}
