import TopIntro from "@/components/utils/intro/intro";
import styles from "./page.module.css";
import Partners from "@/components/partners/partners";
import Image from "next/image";
export default function About() {
  return (
    <section>
      <TopIntro title={"О компании"} link={"/about"} link_name={"Компании"} />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info_left}>
            <p className={styles.title}>Jahon Invest plast</p>
            <p className={styles.desc}>
              The Haj Tex cluster was founded in October 2018. We have made our
              task to raise textile production in our country to a new level and
              bring Uzbekistan to the world leaders of the cotton industry. Also
              one of the key tasks for us was to remove the stamp from Uzbek
              cotton as a product of slave labor.
            </p>
            <p className={styles.desc}>
              The idea of the “Cot Cluster Economy” is to responsibly grow
              cotton and deeply all of it to process components, maximize added
              value and minimize the negative impact on the environment by
              reusing production waste and with the help of secondary clothing
              technology processing
            </p>
            <p className={styles.desc}>
              The Haj Tex cluster was founded in October 2018. We have made our
              task to raise textile production in our country to a new level and
              bring Uzbekistan to the world leaders of the cotton industry.
              Ранее Apple уже запустила продажи через онлайн-площадку Tmall,
              которая принадлежит Alibaba Group. Судя по всему, в компании
              серьёзно настроены сражаться за китайского потребителя. Несмотря
              на то что iPhone занимает порядка 20 % местного рынка смартфонов,
              в первом квартале 2023-го продажи Apple в Китае упали на 5 %. И
              вряд ли эта цифра радует руководство корпорации.
            </p>
          </div>
          <div className={styles.info_right}>
            <div className={styles.info}>
              <Image
                src={"/media/logo.png"}
                width={178}
                height={70}
                alt="logo"
                className={styles.img}
              />
            </div>
            <div className={styles.info}>
              <p className={styles.info_number}>04</p>
              <p className={styles.info_title}>Производства</p>
              <p className={styles.info_desc}>
                Майки, Трусы и Боксеры, Футболки и Безрукавки,Нижнее бельё
              </p>
            </div>
            <div className={styles.info}>
              <p className={styles.info_number}>25</p>
              <p className={styles.info_title}>Летний опыт</p>
              <p className={styles.info_desc}>
                инвестиции в развитие с 1998 года
              </p>
            </div>
            <div className={styles.info}>
              <p className={styles.info_number}>0,98</p>
              <p className={styles.info_title}>Тысяч человек</p>
              <p className={styles.info_desc}>Общая численность сотрудников </p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.videos}>
            <video
              // src="../../public/media/back.mp4"
              id="background-video"
              loop
              autoPlay
              muted
              className={styles.video}
            >
              <source src={"/media/aboutus.mp4"} type="video/mp4" />
            </video>
          </div>
          <p className={styles.desc_bottom}>
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
      <Partners />
    </section>
  );
}
