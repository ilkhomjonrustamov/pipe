import Link from "next/link";
import styles from "./products.module.css";
import { arrow_right } from "@/public/icons";
import ProductCard from "@/app/[lang]/components/cards/productCard/productCard";

export default function Products() {
  return (
    <section>
      <div className={`${styles.container} box`}>
        <div className={styles.title_section}>
          <p className="section_title">Популярные продукты</p>
          <Link href={"/"} className={`${styles.link} link`}>
            Узнать больше {arrow_right}
          </Link>
        </div>
        <div className={styles.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}
