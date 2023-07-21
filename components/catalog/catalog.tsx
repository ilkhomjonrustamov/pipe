import Link from "next/link";
import styles from "./catalog.module.css";
import { arrow_right } from "@/public/icons";
import { elbow_right } from "../../public/icons";
import Image from "next/image";
export default function Catalog() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.section_top}>
          <p className="section_title">каталог продукции</p>
          <Link href={"/"} className="link">
            Узнать больше {arrow_right}{" "}
          </Link>
        </div>
        <div className={styles.catalogs}>
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>{" "}
          <Link href={"/"} className={styles.catalog}>
            <p className={styles.catalog_title}>
              Полипропиленовые трубы/композиты
            </p>
            {elbow_right}
            <div className={styles.ellipse}></div>
            <div className={styles.image}>
              <Image
                src={"/media/catalog.png"}
                width={220}
                height={190}
                alt="catalog"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
