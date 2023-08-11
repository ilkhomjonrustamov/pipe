import {
  chevron_right,
  cup_star,
  hand_stars,
  magnet,
  pie_chart,
} from "@/public/icons";
import styles from "./intro.module.css";
import Image from "next/image";
export default function Intro() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.top_container}>
          <div className={styles.topper}>
            <p className={styles.subtitle}>
              {magnet}
              Premium pipe Asia polyplast
            </p>
            <p className={styles.title}>
              полипропиленовые, полиэтиленовые и ПВХ продукция
            </p>
          </div>
          <Image
            src="/media/mheading.png"
            className={styles.image}
            width={236}
            height={236}
            alt="pc"
          />
        </div>
        <div className={styles.middle}>
          {/* <video playsInline autoPlay muted loop className="image">
            <source src={"/media/back.mp4"} type="video/mp4" />
          </video> */}
          <div className={styles.video_container}>
            <video
              // src="../../public/media/back.mp4"
              id="background-video"
              loop
              autoPlay
              muted
              className={styles.video}
            >
              <source src={"/media/back.mp4"} type="video/mp4" />
            </video>
          </div>
          <div className={styles.middle_info}>
            <p className={styles.middle_subtitle}>
              Ассортимент из полимерных, ПВХ и полиэтиленовых труб различного
              назначения.
            </p>
            <button className="primary_btn">О компании {chevron_right} </button>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom}>
            <p className={styles.success_title_top}>Наш успех</p>
            <div className={styles.success_container}>
              <div className={styles.success}>
                {pie_chart}
                <p className={styles.success_title}>
                  более 10 лет профессионального опыта
                </p>
              </div>
              <div className={styles.success}>
                {cup_star}
                <p className={styles.success_title}>Сотни успешных проектов</p>
              </div>
              <div className={styles.success}>
                {hand_stars}
                <p className={styles.success_title}>
                  Огромное количество благодарных клиентов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
