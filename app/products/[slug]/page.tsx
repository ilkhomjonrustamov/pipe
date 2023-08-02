"use client";
import styles from "./page.module.css";
import TopIntro from "../../../components/utils/intro/intro";

// import Swipercheck from "../swiper";
// import SwiperProduct from "../swiper";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { ProductInterface } from "@/components/cards/product/product";
// import { getSingleProduct } from "@/server/api";
import { useSearchParams } from "next/navigation";
import SwiperProduct from "@/components/swiper/swiper";
import { cart2 } from "@/public/icons";
// import BasicTable from "@/components/table/table";

interface SingleProduct {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  images: Array<any>;
  price: string;
  meta: {
    meta_deck: string;
  };
  articul: string;
  type: string;
  manufacturer: string;
  leaves: string;
}
export default function ProductInnerPage() {
  const slug = useSearchParams();
  const [product, setProduct] = useState<SingleProduct>();
  // const [otherproducts, setOtherproducts] = useState<ProductInterface[]>([]);
  const [currentImage, setCurrentImage] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setIsLoading(true);
  //   getSingleProduct(slug)
  //     .then((res) => {
  //       setProduct(res);
  //       setCurrentImage(res.images[0].image);
  //       setOtherproducts(res.same_products);
  //       setIsLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  ` `;
  return (
    <section>
      {/* <div className={`${styles.box} box`}>
        <div className={styles.top}>
          <SwiperProduct />
          <div className={styles.middle}>
            <div className={styles.title_container}>
              <p className={styles.title}>Тройник 90° канализационный</p>
              <p className={styles.desc}>
                Простота мантажа полиэтиленового трубопровода возможна благодаря
                многообразию и функциональности фитингов ПНД. Вид используемых
                фитингов зависит от способа монтажа.
              </p>
            </div>
            <div className={styles.add_cart}>
              <div className={styles.numbers_container}>
                <p>Количество:</p>
                <button>1</button>
              </div>
              <button className={styles.cart_btn}>
                Добавить корзину {cart2}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <BasicTable />
        </div>
      </div> */}
    </section>
  );
}