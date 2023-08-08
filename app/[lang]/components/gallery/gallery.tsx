"use client";
import styles from "./gallery.module.css";
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
import Link from "next/link";

export default function Gallery() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <section className={`box`}>
      <div className={`${styles.container}`}>
        <div className={styles.title_section}>
          <p className={`section_title ${styles.title}`}>Галерея</p>
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
                slidesPerView: 1.2,
                spaceBetween: 10,
                centeredSlides: true,
                pagination: true,
              },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3, pagination: false, spaceBetween: 16 },
              1440: { slidesPerView: 3.5 },
              1600: { slidesPerView: 4 },
              // 1300: { pagination: false },
            }}
            spaceBetween={24}
            slidesPerView={6}
            loop={true}
            // autoplay={{
            //   delay: 6000,
            //   disableOnInteraction: false,
            // }}
            navigation={{ prevEl, nextEl }}
            className={`${styles.mySwiper} mySwiper`}
          >
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/about_pic.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/about_pic.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/about_pic.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/about_pic.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/about_pic.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/about_pic.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Link href={"/"} className={styles.gallery_card}>
                <div className={styles.gallery_image}>
                  <Image
                    src="/media/gallery.png"
                    width={400}
                    height={250}
                    alt="hey"
                    className={styles.image}
                  />
                </div>
                <p className={styles.gallery_title}>
                  Адаптер с внутренней резьбой / под ключ
                </p>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
