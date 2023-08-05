import { arrow_right, ellipse } from "@/public/icons";
import Link from "next/link";
import styles from "./productCard.module.css";
import Image from "next/image";
export default function ProductCard() {
  return (
    <Link href={"/products"} className={styles.product_container}>
      <div className={styles.catalog_name}>
        {ellipse}
        <p>Двухслойные гофрированные трубы с раструбом</p>
      </div>
      <div className={styles.images}>
        <Image
          src={"/media/product.png"}
          alt="product image"
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.product_name}>
          Адаптер с внутренней резьбой / под ключ
        </p>
        <p className={styles.product_link}>Подробнее {arrow_right}</p>
      </div>
    </Link>
  );
}
