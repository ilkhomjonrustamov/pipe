import styles from "./page.module.css";
import TopIntro from "../../components/utils/intro/intro";
import Link from "next/link";
import { cart2 } from "@/public/icons";
import CartProducts from "@/components/utils/cart_product/cart_product";
import OtherProducts from "@/components/utils/otherproducts/page";
import FormBuy from "@/components/form/form";
export default function Cart() {
  return (
    <section className={styles.allcontainer}>
      <TopIntro
        link={"/app/cart"}
        link_name={"Результат поиска"}
        title={"Результат поиска"}
      />
      <section className={styles.box}>
        <div className={styles.container}>
          <div className={styles.title_section}>
            <p className={styles.title}>Ваш заказ</p>
            <Link href={"/"} className={styles.delete}>
              Удалить все
            </Link>
          </div>
          <div className={styles.products}>
            <CartProducts />
            <CartProducts />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <p className={styles.number_of_products_title}>
                Количество продуктов:
              </p>
              <p className={styles.number_of_products}>3</p>
            </div>
            <button className="order_btn">Заказ на покупку {cart2}</button>
          </div>
        </div>
      </section>
      <OtherProducts />
    </section>
  );
}
