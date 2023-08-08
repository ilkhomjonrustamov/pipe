"use client";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import Image from "next/image";
// import styles from "./swiper.module.css";
// import { Swiper as SwiperComponent } from "swiper/react";
// export default function Swipercheck() {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   return (
//     <section>
//       <div className={styles.all}>
//         <SwiperComponent
//           onSwiper={setThumbsSwiper}
//           loop={true}
//           spaceBetween={10}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className={`mySwiper ${styles.thumb}`}
//           direction="horizontal"
//         >
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//         </SwiperComponent>
//         <Swiper
//           loop={true}
//           spaceBetween={10}
//           // navigation={true}
//           thumbs={{ swiper: thumbsSwiper }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className={`mySwiper2 ${styles.swiper}`}
//         >
//           <SwiperSlide>
//             <div className={styles.swiper_right}>
//               <Image
//                 src="/media/productin.png"
//                 width={618}
//                 height={618}
//                 alt="product"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className={styles.swiper_right}>
//             <Image
//               src="/media/productin.png"
//               width={618}
//               height={618}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.swiper_right}>
//             <Image
//               src="/media/productin.png"
//               width={618}
//               height={618}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.swiper_right}>
//             <Image
//               src="/media/productin.png"
//               width={618}
//               height={618}
//               alt="product"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//       <div className={styles.mobile}>
//         <Swiper
//           loop={true}
//           spaceBetween={10}
//           thumbs={{ swiper: thumbsSwiper }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className={styles.swiper_product}
//         >
//           <SwiperSlide className={styles.swiper_right}>
//             <Image
//               src="/media/productin.png"
//               width={618}
//               height={618}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.swiper_right}>
//             <Image
//               src="/media/productin.png"
//               width={618}
//               height={618}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.swiper_right}>
//             <Image
//               src="/media/productin.png"
//               width={618}
//               height={618}
//               alt="product"
//             />
//           </SwiperSlide>
//         </Swiper>
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           loop={true}
//           spaceBetween={10}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Thumbs]}
//           className={styles.swiper_thumb}
//         >
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//           <SwiperSlide className={styles.thumb_inner}>
//             <Image
//               src="/media/productin.png"
//               width={99}
//               height={99}
//               alt="product"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// }
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function SwiperProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper ${styles.thumb}`}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
