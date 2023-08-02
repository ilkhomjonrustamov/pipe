import styles from "./products_intro.module.css";
import Link from "next/link";
import Image from "next/image";
export default function ProductsIntro() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.links}>
            <Link href={"/"} className={styles.link_back}>
              Главная
            </Link>
            <p>/</p>
            <Link href={"/products"} className={styles.link}>
              Продукции
            </Link>
          </div>
          <p className={styles.title}>Pакор с внутренней резьбой</p>
          <p className={styles.desc}>
            Premium pipe Asia polyplast{" "}
            <span>
              is a leading supplier, manufacturer of polymer pipes.non-pressure,
              sewer, casing polymer pipes for the transportation of drinking
              water, gas and corrosive liquid media used in housing and communal
              services, chemical, mining, pulp and paper and metallurgical
              industries.
            </span>
          </p>
        </div>
        <div className={styles.images}>
          <Image
            src={"/media/ima.png"}
            width={905}
            height={760}
            alt="product top intro"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
