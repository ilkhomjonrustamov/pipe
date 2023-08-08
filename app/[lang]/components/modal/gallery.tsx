// import { Key, Key, useContext, useState } from "react";
// import styles from "./modal.module.css";
// // import { ModalContext } from "../../stores/modal";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { arrowRightBig, xSvg } from "../../public/icons";
// // import { StaticImport } from "next/dist/shared/lib/get-img-props";
// // import { StaticImport } from "next/dist/shared/lib/get-img-props";

// export default function GalleriesView() {
//   // const { media, setIsModal } = useContext(ModalContext);
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   if (typeof media[0] === "object") {
//     return (
//       <div className={styles.lightbox}>
//         <Image
//           src={media[0].src}
//           alt="media"
//           width={1060}
//           height={600}
//           className="image"
//         />
//       </div>
//     );
//   } else if (typeof media[0] === "string") {
//     return (
//       <div className={styles.thumbs_swiper}>
//         <button
//           className={styles.modal_closer}
//           onClick={() => setIsModal(false)}
//         ></button>
//         <div className="minibox thumbs_swiper">
//           <button className="prevThumb swiperBtn">{}</button>
//           <button className="nextThumb swiperBtn">{}</button>
//           <Swiper
//             loop={true}
//             spaceBetween={32}
//             thumbs={{ swiper: thumbsSwiper }}
//             modules={[Navigation, Thumbs]}
//             navigation={{ prevEl: ".prevThumb", nextEl: ".nextThumb" }}
//             className="main-swiper"
//             keyboard={{ enabled: true }}
//           >
//             {media.map(
//               (img: string | StaticImport, i: Key | null | undefined) => {
//                 return (
//                   <SwiperSlide key={i}>
//                     <div className={styles.main}>
//                       <Image
//                         src={img}
//                         alt="media"
//                         width={1400}
//                         height={765}
//                         className="image"
//                         unoptimized
//                       />
//                     </div>
//                   </SwiperSlide>
//                 );
//               }
//             )}
//           </Swiper>
//           <Swiper
//             onSwiper={setThumbsSwiper}
//             loop={true}
//             spaceBetween={8}
//             slidesPerView={3.2}
//             modules={[Navigation, Thumbs, Autoplay]}
//             className={styles.thumbs}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             breakpoints={{
//               880: {
//                 slidesPerView: 4.5,
//               },
//               1400: {
//                 slidesPerView: 6.5,
//               },
//             }}
//             keyboard={{ enabled: true }}
//           >
//             {media.map(
//               (img: string | StaticImport, i: Key | null | undefined) => {
//                 return (
//                   <SwiperSlide key={i}>
//                     <div className={styles.thumbs}>
//                       <Image
//                         src={img}
//                         alt="media"
//                         width={190}
//                         height={140}
//                         className="image"
//                         unoptimized
//                       />
//                     </div>
//                   </SwiperSlide>
//                 );
//               }
//             )}
//           </Swiper>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }
