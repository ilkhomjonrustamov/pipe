"use client";

import Link from "next/link";
import styles from "./gallery.module.css";
import Image from "next/image";

export default function Gallery() {
  return (
    <section>
      <div className={`box ${styles.box}`}>
        <div className={styles.title_section}>
          <p className="section_title">Новости компании</p>
          <Link href={"/"} className={styles.link_top}>
            Посмотрит все
          </Link>
        </div>
        <div className={styles.news}>
          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>Подробнее</p>
              </div>
            </div>
          </Link>

          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>Подробнее</p>
              </div>
            </div>
          </Link>

          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>Подробнее</p>
              </div>
            </div>
          </Link>

          <Link href={"/"} className={styles.new}>
            <div className={styles.img_cont}>
              <Image
                src={"/media/news.png"}
                className={styles.img}
                alt="news"
                width={348}
                height={238}
              />
            </div>
            <div className={styles.product_btm}>
              <p className={styles.product_desc}>
                Приглашаем вас и ваших спетьсялистов посетить семинар на тему
                Index - Medical Solution
              </p>
              <div className={styles.product_btm1}>
                <p className={styles.day}>06.08.23</p>
                <p className={styles.link_btm}>Подробнее</p>
              </div>
            </div>
          </Link>
        </div>
        <Link href={"/"} className={styles.link_top_mb}>
          Посмотрит все
        </Link>
      </div>
    </section>
  );
}
