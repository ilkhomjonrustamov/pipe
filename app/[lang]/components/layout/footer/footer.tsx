import { facebook, instagram, linkedin, youtube } from "@/public/icons";
import styles from "./footer.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.top_container_inner_top}>
            <div className={styles.title_cont}>
              <p className="section_title_2">Свяжитесь с нами</p>
              <p className={styles.title_desc}>
                Если у вас есть вопросы или вы хотите обсудить сотруничество -
                пишите, звоните или закажите обратный звонок, и мы сами все
                расскажем
              </p>
            </div>
            <div className={styles.social_links_cont}>
              <p className={styles.social_links_title}>Социальные медиа</p>
              <div className={styles.social_links}>
                <Link href={"/"} className={styles.social_link}>
                  {youtube}
                </Link>
                <Link href={"/"} className={styles.social_link}>
                  {facebook}
                </Link>
                <Link href={"/"} className={styles.social_link}>
                  {instagram}
                </Link>
                <Link href={"/"} className={styles.social_link}>
                  {linkedin}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.top_container_inner_btm}>
            <div className={styles.contact}>
              <p className={styles.contact_title}>Phone number</p>
              <a
                href={`tel: `}
                target={"_blank"}
                rel="noreferrer"
                className={styles.phone}
              >
                +998 78 122 12 42
              </a>
              <a
                href={`tel: `}
                target={"_blank"}
                rel="noreferrer"
                className={styles.phone}
              >
                +998 78 122 12 42
              </a>
            </div>
            <div className={styles.contact}>
              <p className={styles.contact_title}>Email</p>
              <a
                href={`mailto: `}
                target={"_blank"}
                rel="noreferrer"
                className={styles.email}
              >
                info@P-pipe.com
              </a>
            </div>
            <div className={styles.contact}>
              <p className={styles.contact_title}>Address</p>
              <p className={styles.contact_info}>
                Юнусабадский район, массив Ташгрес, Улица Боги Шамол
              </p>
            </div>
          </div>
        </div>
        <div className={styles.btm_container}>
          <p className={styles.copyright}>Copyright © 2023 Premium Pipe Asia</p>
          <div className={styles.footer_links}>
            <Link href={"/"} className={styles.footer_link}>
              Главная
            </Link>
            <Link href={"/"} className={styles.footer_link}>
              О компании
            </Link>
            <Link href={"/"} className={styles.footer_link}>
              Пpoдукции
            </Link>
            <Link href={"/"} className={styles.footer_link}>
              Новости
            </Link>
            <Link href={"/"} className={styles.footer_link}>
              Контакты
            </Link>
          </div>
          <div className={styles.btm_mb}>
            <p className={styles.copyright_mobile}>
              Copyright © 2023 Premium Pipe Asia
            </p>
            <p className={styles.designedby}>
              Design by <Link href={"/"}>NDC</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
