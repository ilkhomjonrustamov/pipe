import styles from "./intro.module.css";
import Link from "next/link";
import Image from "next/image";
type Props = {
  title: string | any;
  link_name: string | any;
  link: string | any;
};

export default function TopIntro({ title, link_name, link }: Props) {
  return (
    <section>
      <div>
        <div className={styles.top_container}>
          <div className={styles.topper}>
            <p className={styles.title}>{title}</p>
            <div className={styles.links}>
              <Link href={"/"} className={styles.link}>
                Главная
              </Link>
              <p>/</p>
              <Link href={link} className={styles.link}>
                {link_name}
              </Link>
            </div>
          </div>
          <Image
            src="/media/intro_top_back.png"
            className={styles.image}
            width={236}
            height={236}
            alt="pc"
          />
        </div>
      </div>
    </section>
  );
}
