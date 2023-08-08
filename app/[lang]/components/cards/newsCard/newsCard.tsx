import { arrow_right, calendar, eye } from "@/public/icons";
import styles from "./newsCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { INews } from "@/server/interfaces";
export default function NewsCard({ article }: { article: INews }) {
  return (
    <Link href={`/news/${article.slug}`} className={styles.container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={article.image ? article.image : "/media/gallery.png"}
          alt="news"
          width={400}
          height={250}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{article.title}</p>
        <div className={styles.enter}>
          <p className={styles.publishedday}>
            {calendar}
            {article.date}
          </p>
          <p className={styles.watched}>
            {eye}
            {article.views}
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
