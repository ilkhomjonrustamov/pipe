import { elbow_right } from "@/public/icons";
import styles from "./catalogCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { ICategories } from "@/server/interfaces";
export default function CategoriesCard({
  categories,
}: {
  categories: ICategories;
}) {
  return (
    <Link href={`/`} className={styles.catalog}>
      <p className={styles.catalog_title}>{categories?.title}</p>
      {elbow_right}
      <div className={styles.ellipse}></div>
      <div className={styles.images}>
        <Image
          src={categories?.image}
          width={220}
          height={190}
          alt="catalog"
          className={styles.image}
        />
      </div>
    </Link>
  );
}
