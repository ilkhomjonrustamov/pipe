import { plus, x } from "@/public/icons";
import styles from "./cart_product.module.css";
import Image from "next/image";
import { minus } from "../../../public/icons";
export default function CartProducts() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.images}>
          <Image
            src={"/media/productin.png"}
            alt="pci"
            width={141}
            height={104}
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.product_name}> Тройник 90° канализационный</p>
            <p className={styles.numberofproducts}>
              Количество: <span>1</span>
            </p>
          </div>
          <div className={styles.right}>
            {x}
            <div className={styles.amount}>
              {minus}1 {plus}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cart_mobile}>
        <div className={styles.images}>
          <Image
            src={"/media/productin.png"}
            alt="pci"
            width={141}
            height={104}
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.mobile_top_name}>
            <p className={styles.product_name}> Тройник 90° канализационный</p>{" "}
            {x}
          </div>
          <p className={styles.numberofproducts}>
            Количество: <span>1</span>
          </p>
          <div className={styles.amount}>
            {minus}1 {plus}
          </div>
        </div>
      </div>
    </section>
  );
}
