"use client";
import {
  arrow_down,
  bag,
  chevron_down,
  gmail,
  location,
  phone,
  search,
} from "@/public/icons";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <div className={styles.top_cont}>
          <div className={styles.top}>
            <div className={styles.city}>
              <p className={styles.city_name}>
                {location}
                Тошкент вилояти, Охангарон шахар, Ангрен Эркин Иктисодий зонаси
                Бирлик МФЙ, 40-уй
              </p>
            </div>
            <div className={styles.contacts_cont}>
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
                  {phone} +998 78 122 12 42 {arrow_down}
                </a>
              </div>
              <div>
                <p className={styles.lng}>RU {arrow_down}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btm}>
          <div className={styles.btm_left}>
            <div className={styles.img_cont}>
              <Link href={"/"}>
                <Image
                  src={"/media/logo.png"}
                  width={140}
                  height={56}
                  alt="logo of the company"
                  className={styles.img}
                />
              </Link>
            </div>
            <div className={styles.nav_links}>
              <Link href={"/"} className={styles.nav_link}>
                Главная
              </Link>
              <Link href={"/products"} className={styles.nav_link}>
                Пpoдукции {chevron_down}
              </Link>
              <Link href={"/about"} className={styles.nav_link}>
                О компании
              </Link>
              <Link href={"/news"} className={styles.nav_link}>
                Новости
              </Link>
              <Link href={"/gallery"} className={styles.nav_link}>
                Галерея
              </Link>
              <Link href={"/contacts"} className={styles.nav_link}>
                Контакты
              </Link>
            </div>
          </div>
          <div className={styles.btm_right}>
            <Link href={"/search"}>
              <input
                type="text"
                placeholder={`Поиск `}
                className={styles.search}
              />
            </Link>

            <Link href={"/cart"} className={styles.cart}>
              {bag} Корзина
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.mobile_top}>
          <div className={styles.img_cont}>
            <Link href={"/"}>
              <Image
                src={"/media/logo.png"}
                width={140}
                height={56}
                alt="logo of the company"
                className={styles.img}
              />
            </Link>
          </div>
          <div>
            <p className={styles.mobile_lng}> Рус {chevron_down} </p>
          </div>
        </div>
        <div className={styles.mobile_bottom}>
          <Link href={"/search"} className={styles.search_bar}>
            <input
              type="text"
              placeholder={`Поиск `}
              className={styles.search}
            />
          </Link>
          <div
            className={`${styles.hamburger} ${isMenu ? styles.open : null}`}
            onClick={() => setIsMenu(!isMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
