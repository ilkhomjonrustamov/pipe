import styles from "./page.module.css";
import TopIntro from "../../components/utils/intro/intro";
import Image from "next/image";
import { search } from "@/public/icons";
export default function Cart() {
  return (
    <section>
      <TopIntro
        link={"/app/cart"}
        link_name={"Результат поиска"}
        title={"Результат поиска"}
      />
      <div className={styles.container}>
        <div className={styles.search_cont}>
          <input type="text" placeholder={`Поиск `} className={styles.search} />
        </div>
        <div className={styles.noresult_container}>
          <p className={styles.noresult_title}>
            По вашему запросу ничего не найдено
          </p>
          <div className={styles.image_container}>
            <Image
              src={"/media/noresult.png"}
              alt="noresult"
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
