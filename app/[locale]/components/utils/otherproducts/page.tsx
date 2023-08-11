"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { arrow_right } from "@/public/icons";
import Link from "next/link";
import { calendar, eye } from "@/public/icons";
import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "@/app/[locale]/components/cards/productCard/productCard";

export default function OtherProducts() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <section>
      {" "}
      <div className={styles.other_news}>
        <div className={styles.title_section}>
          <p className={`section_title ${styles.title}`}>Другие продукты</p>
          <div className={styles.navigation}>
            <button
              className={styles.left}
              ref={(node: any) => setPrevEl(node)}
            >
              {arrow_right}
            </button>
            <button
              className={styles.right}
              ref={(node: any) => setNextEl(node)}
            >
              {arrow_right}
            </button>
          </div>
        </div>
        <div className={styles.cont}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 0,
                centeredSlides: true,
                pagination: true,
              },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3, pagination: false },
              1440: { slidesPerView: 4 },
              // 1300: { pagination: false },
            }}
            spaceBetween={24}
            slidesPerView={4}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl, nextEl }}
            className={`${styles.mySwiper} mySwiper`}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
