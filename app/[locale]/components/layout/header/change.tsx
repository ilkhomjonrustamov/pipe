"use client";
import { arrow_down } from "@/public/icons";
import styles from "./header.module.css";
import Link from "next-intl/link";
import { useState } from "react";
export default function Lng() {
  const [isLang, setIsLang] = useState(false);
  return (
    <div
      className={styles.lng_box}
      onClick={() => {
        setIsLang(!isLang);
      }}
    >
      <button className={styles.lang_btn}>RU {arrow_down}</button>
      {isLang ? (
        <div className={styles.langs}>
          <Link href="/" locale="en" className={styles.lng}>
            eng
          </Link>
          <Link href="/" locale="ru" className={styles.lng}>
            ru
          </Link>
          <Link href="/" locale="uz" className={styles.lng}>
            uz
          </Link>
        </div>
      ) : null}
    </div>
  );
}
