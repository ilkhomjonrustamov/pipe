import TopIntro from "@/components/utils/intro/intro";
import styles from "./page.module.css";
import Partners from "@/components/partners/partners";
import Image from "next/image";
import NewsCard from "@/components/cards/newsCard/newsCard";
export default function News() {
  return (
    <section>
      <TopIntro title={"Наши новости"} link={"/news"} link_name={"Новости"} />
      <div className={`${styles.container} container`}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
}
