import { elbow_right } from "@/public/icons";
import styles from "./catalogCard.module.css";
import Link from "next/link";
import Image from "next/image";
export default function CatalogCard() {
  return (
    <Link href={"/catalog"} className={styles.catalog}>
      <p className={styles.catalog_title}>Полипропиленовые трубы/композиты</p>
      {elbow_right}
      <div className={styles.ellipse}></div>
      <div className={styles.images}>
        <Image
          src={"/media/catalog.png"}
          width={220}
          height={190}
          alt="catalog"
          className={styles.image}
        />
      </div>
    </Link>
  );
}
