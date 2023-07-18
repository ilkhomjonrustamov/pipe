import { arrow_down, gmail, phone } from "@/public/icons";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
export function Header() {
  return (
    <section>
      <div>
        <div className={styles.top}>
          <div className={styles.city}>
            <p className={styles.city_title}>Город:</p>
            <p className={styles.city_name}>Ташкент</p>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contacts}>
              <a
                href={`mailto: `}
                target={"_blank"}
                rel="noreferrer"
                className={styles.mail}
              >
                {gmail}
                info@premiumpipe.com
              </a>
              <a
                href={`tel: `}
                target={"_blank"}
                rel="noreferrer"
                className={styles.phone}
              >
                {phone} +333333 {arrow_down}
              </a>
            </div>
            <div>
              <p>RU {arrow_down}</p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className={styles.btm_left}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/logo.png"}
                width={140}
                height={56}
                alt="logo of the company"
                className={styles.img}
              />
            </div>
            <div className={styles.nav_links}>
              <Link href={"/"} className={styles.nav_link}>
                Главная
              </Link>
              <Link href={"/"} className={styles.nav_link}>
                Пpoдукции
              </Link>
              <Link href={"/"} className={styles.nav_link}>
                О компании
              </Link>
              <Link href={"/"} className={styles.nav_link}>
                Новости
              </Link>
              <Link href={"/"} className={styles.nav_link}>
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
