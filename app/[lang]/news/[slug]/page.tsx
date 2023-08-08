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
import NewsCard from "@/app/[lang]/components/cards/newsCard/newsCard";
import { INews } from "@/server/interfaces";
import { getNews } from "@/server/api";
export default function InnerNews() {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  // const news: INews[] = await getNews();
  return (
    <section className="box">
      <div className={styles.box}>
        <p className={styles.title}>
          ЕТБга аъзолик эҳтимоли, Ўзбекистонга келаётган Mastercard ва Exeed —
          иқтисодий таймлайн
        </p>
        <div className={styles.enter}>
          <p className={styles.publishedday}>
            {calendar}
            16.05.2023
          </p>
          <p className={styles.watched}>
            {eye}
            32841
          </p>
        </div>
        <div className={styles.image_container}>
          <Image
            src={"/media/inner.png"}
            width={1112}
            height={612}
            alt="png"
            className={styles.image}
          />
        </div>
        <div className={styles.desc}>
          <p>
            The Premium pipe cluster was founded in October 2018. We have made
            our task to raise textile production in our country to a new level
            and bring Uzbekistan to the world leaders of the cotton industry.
            Also one of the key tasks for us was to remove the stamp from Uzbek
            cotton as a product of slave labor.
          </p>
          <p>
            The idea of the “Cot Cluster Economy” is to responsibly grow cotton
            and deeply all of it to process components, maximize added value and
            minimize the negative impact on the environment by reusing
            production waste and with the help of secondary clothing technology
            processing
          </p>
          <p>
            The Haj Tex cluster was founded in October 2018. We have made our
            task to raise textile production in our country to a new level and
            bring Uzbekistan to the world leaders of the cotton industry. Ранее
            Apple уже запустила продажи через онлайн-площадку Tmall, которая
            принадлежит Alibaba Group. Судя по всему, в компании серьёзно
            настроены сражаться за китайского потребителя. Несмотря на то что
            iPhone занимает порядка 20 % местного рынка смартфонов, в первом
            квартале 2023-го продажи Apple в Китае упали на 5 %. И вряд ли эта
            цифра радует руководство корпорации.
          </p>
          <p>
            Производственные мощности компании, в цехах которой установлено
            современное оборудование от мировых производителей, среди которых
            вязальные машины Taifan, швейные машины Juki, Brother, Siruba и
            гладильные Malkan, позволяют представлять потребителям до 30 тонн
            полотна и 150-250 тысяч готовых трикотажных изделий в месяц.Торговая
            марка AMINA™ получила повсеместное признание благодаря высокому
            качеству и эстетичности выпускаемой продукции.Мужское белье от
            AMINA™ отлично прилегает к телу и гигиенично за счет использования в
            производстве натуральных материалов высокого качества.Вся
            выпускаемая продукция производится из натурального материала –
            хлопка, выращенного на благодатных полях нашей страны.
          </p>
        </div>
      </div>
      {/* <div className={styles.other_news}>
        <div className={styles.title_section}>
          <p className={`section_title ${styles.title}`}>Галерея</p>
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
                slidesPerView: 1.2,
                spaceBetween: 0,
                centeredSlides: true,
                pagination: true,
              },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3, pagination: false },
              1440: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
              // 1300: { pagination: false },
            }}
            spaceBetween={24}
            slidesPerView={4.2}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl, nextEl }}
            className={`${styles.mySwiper} mySwiper`}
          >
            {news.length > 0
              ? news.map((article) => {
                  return (
                    <SwiperSlide>
                      {" "}
                      <NewsCard key={article.id} article={article} />{" "}
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        </div>
      </div> */}
    </section>
  );
}
