// import ProductsIntro from "@/components/products_intro/products_intro";
// import ProductCard from "@/components/cards/productCard/productCard";
// import styles from "./page.module.css";
// export default function Products() {
//   return (
//     <section>
//       <div>
//         <ProductsIntro />
//         <div className={`${styles.product_containers} container`}>
//           <div className={styles.categories}>
//             <p className={styles.title}>Категории</p>
//             <div className={styles.category_container}>
//               <p className={styles.category}>Полипропиленовыsе фитинги</p>{" "}
//               <p className={styles.category}>
//                 Двухслойные гофрированные трубы с раструбом
//               </p>
//               <p className={styles.category}>
//                 Канализационные трубы и фитинги из пвх
//               </p>{" "}
//               <p className={styles.category}>
//                 Канализационные трубы и фитинги из полипропилена (бесшумные)
//               </p>{" "}
//               <p className={styles.category}>
//                 Двухслойные гофрированные трубы с раструбом
//               </p>
//             </div>
//           </div>
//           <div className={styles.product_cards}>
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//             <ProductCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// /app/[lang]/[country]/examplePage/page.tsx
import { getTranslator } from "@/i18n";
import { getLocalePartsFrom, locales, ValidLocale } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => getLocalePartsFrom({ locale }));
}

export default async function Products({
  params,
}: {
  params: { lang: string; country: string };
}) {
  const translate = await getTranslator(
    `${params.lang}` as ValidLocale // our middleware ensures this is valid
  );
  return (
    <div>
      <h1>Example page: {translate("welcome.helloWorld")}</h1>
    </div>
  );
}
