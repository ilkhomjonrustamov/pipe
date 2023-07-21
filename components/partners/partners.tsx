"use client";
import styles from "./partners.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { chevron_down, chevron_right } from "@/public/icons";

export default function Partners() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <section className={styles.box}>
      <div className={`${styles.container}`}>
        <div className={styles.title_section}>
          <p className={`section_title ${styles.title}`}>Наши партнеры</p>
          <div className={styles.navigation}>
            <button
              className={styles.left}
              ref={(node: any) => setPrevEl(node)}
            >
              {chevron_right}
            </button>
            <button
              className={styles.right}
              ref={(node: any) => setNextEl(node)}
            >
              {chevron_right}
            </button>
          </div>
        </div>
        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 0,
                centeredSlides: true,
                pagination: true,
              },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4, pagination: false },
              1440: { slidesPerView: 6 },
              // 1300: { pagination: false },
            }}
            spaceBetween={10}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl, nextEl }}
            className={`${styles.mySwiper} mySwiper`}
          >
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src="/media/partner.png"
                  width={262}
                  height={128}
                  alt="hey"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
