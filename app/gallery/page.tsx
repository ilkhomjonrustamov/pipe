"use client";
import TopIntro from "@/components/utils/intro/intro";
import Image from "next/image";
import styles from "./page.module.css";
import { chevron_down } from "@/public/icons";

// import Gallerys from "./gallery";
export default function Gallery() {
  return (
    <section>
      <TopIntro
        title={"Наши галерея"}
        link={"/gallery"}
        link_name={"Галерея"}
      />
      <div className={`${styles.al} container`}>
        <div className={styles.categories_container}>
          <button className={styles.category}>Все Галерея</button>
          <button className={styles.category}>Фотогалерея</button>
          <button className={styles.category}>Видеогалерея</button>
        </div>
        <div className={styles.images_container}>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
          <div className={styles.images}>
            <Image
              src={"/media/about_pic.png"}
              width={530}
              height={356}
              className={styles.image}
              alt="iamge"
            />
          </div>
        </div>
        <div>
          <button className={styles.more}>Загрузить еще {chevron_down} </button>
        </div>
      </div>
      {/* <Gallerys images={undefined} /> */}
    </section>
  );
}
// import React from "react";
// import Gallery from "./gallery";
// // import Gallery from "./Gallery";

// const images = [
//   { src: "/images/image1.jpg" },
//   { src: "/images/image2.jpg" },
//   { src: "/images/image3.jpg" },
//   // Add more images here...
// ];

// const GalleryPage = () => {
//   return (
//     <div>
//       <h1>Gallery</h1>
//       <Gallery images={images} />
//     </div>
//   );
// };

// export default GalleryPage;
