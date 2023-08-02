import { arrow_right, calendar, eye } from "@/public/icons";
import styles from "./newsCard.module.css";
import Image from "next/image";
import Link from "next/link";
export default function NewsCard() {
  return (
    <Link href={"/news/1"} className={styles.container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={"/media/gallery.png"}
          alt="news"
          width={400}
          height={250}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>
          ЕТБга аъзолик эҳтимоли, Ўзбекистонга келаётган Mastercard ва Exeed —
          иқтисодий таймлайн
        </p>
        <div className={styles.enter}>
          <p className={styles.publishedday}>
            {calendar}
            16.05.2023
          </p>
          <p className={styles.watched}>
            {eye}
            32841
          </p>
        </div>
        <div className={styles.more}>
          <p>Подробнее</p>
          {arrow_right}
        </div>
      </div>
    </Link>
  );
}
