"use client";
import {
  chevron_right,
  facebook,
  gmail,
  instagram,
  linkedin,
  location1,
  youtube,
} from "@/public/icons";
import TopIntro from "../../components/utils/intro/intro";
import styles from "./page.module.css";
import { IMaskInput } from "react-imask";

export default function Contacts() {
  return (
    <section>
      <TopIntro
        title={"Связаться с нами"}
        link={"/contacts.tsx"}
        link_name={"Контакты"}
      />
      <section>
        <div className={`${styles.container} box`}>
          <div className={styles.left}>
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5990.649635960732!2d69.30633636968382!3d41.3452930921087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4bd7ca466b5%3A0xa84ef0b43d49e980!2sTashkent%20Zoo!5e0!3m2!1sen!2s!4v1690373077153!5m2!1sen!2s"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.bottom_info}>
              <p className={styles.location_name}>
                {location1}{" "}
                <span>
                  Юнусабадский район, массив Ташгрес, Улица Боги Шамол
                </span>
              </p>
              <div className={styles.social_media}>
                <p className={styles.social_title}>Социальные медиа</p>
                <div className={styles.socials}>
                  {youtube}
                  {facebook}
                  {instagram}
                  {linkedin}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <p className={styles.title}>Контакты</p>
            <p className={styles.subtitle}>
              Давайте обсудим ваш проект, вместе мы найдем решение самых сложных
              задач
            </p>
            <div className={styles.form}>
              <form
                className={styles.form_wrapper}
                //  onSubmit={handleRequest}
              >
                <div className={styles.top_form}>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className={styles.name}
                    //   value={name}
                    //   onChange={(e) => setName(e.target.value)}
                  />
                  <div className={styles.number_wrapper}>
                    <span>+998</span>
                    <IMaskInput
                      className={styles.number}
                      type="text"
                      mask={"(00) 000 00 00"}
                      unmask={true}
                      placeholder=" 33 571 46 56"
                      required
                      // value={number}
                      // id="name"
                      // onChange={(e) => setNumber(e.currentTarget.value)}
                    />
                  </div>
                  <textarea
                    name="comment"
                    placeholder="COMMENT"
                    className={styles.comment}
                  ></textarea>
                </div>

                <div className={styles.bottom_form}>
                  <button
                    type="submit"
                    className={`${styles.submit} primary_btn`}
                  >
                    Отправить {chevron_right}
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.contact_info}>
              <div className={styles.contact_info_inner}>
                <p className={styles.contacts_info_title}>Phone number</p>
                <a
                  href={`tel: `}
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.phone}
                >
                  +998 78 122 12 42
                </a>
              </div>
              <div className={styles.contact_info_inner}>
                <p className={styles.contacts_info_title}>Email</p>
                <a
                  href={`mailto: `}
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.mail}
                >
                  info@p-pipe.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
