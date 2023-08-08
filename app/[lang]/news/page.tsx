import TopIntro from "@/app/[lang]/components/utils/intro/intro";
import styles from "./page.module.css";
import Partners from "@/app/[lang]/components/partners/partners";
import Image from "next/image";
import NewsCard from "@/app/[lang]/components/cards/newsCard/newsCard";
import axios from "axios";
import { getNews } from "@/server/api";
import { INews } from "@/server/interfaces";

export default async function News() {
  const news: INews[] = await getNews();

  return (
    <section>
      <TopIntro title={"Наши новости"} link={"/news"} link_name={"Новости"} />
      <div className={`${styles.container} container`}>
        {news.length > 0
          ? news.map((article) => {
              return <NewsCard key={article.id} article={article} />;
            })
          : null}
      </div>
    </section>
  );
}
