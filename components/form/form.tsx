"use client";
import styles from "./form.module.css";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import axios from "axios";
import { chevron_right, x } from "@/public/icons";

export default function FormBuy() {
  //   const [number, setNumber] = useState("");
  //   const [name, setName] = useState("");
  //   const [isSuccess, setIsSuccess] = useState(false);
  //   const channel =
  //     "https://api.telegram.org/bot6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow/sendMessage?parse_mode=HTML&chat_id=-1001900084002&";

  //   async function postTelegram(name: string) {
  //     const res = await axios.get(`${channel}text=${name}+${`+998 ${number}`}`);
  //     const data = await res.data;
  //     return data;
  //   }
  //   const handleRequest = (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //     postTelegram(name).then(() => setIsSuccess(true));
  //     setTimeout(() => {
  //       setIsSuccess(false);
  //     }, 2000);
  //     setName("");
  //     setNumber("");
  //   };
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title_section}>
          <p className={styles.title}>Заказ на покупку</p>
          {x}
        </div>
        <div className={styles.form_container}>
          <form
            className={styles.form_wrapper}
            //  onSubmit={handleRequest}
          >
            <div className={styles.inputs}>
              {" "}
              <div className={styles.top_form}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={styles.name}
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="mail"
                  placeholder="Электронная почта"
                  className={styles.mail}
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                />
                <div className={styles.formwrapper}>
                  <span>+998</span>
                  <IMaskInput
                    className={styles.number}
                    type="text"
                    mask={"(00) 000 00 00"}
                    unmask={true}
                    placeholder=" 33 571 46 56"
                    required
                    // value={number}
                    id="name"
                    // onChange={(e) => setNumber(e.currentTarget.value)}
                  />
                </div>
              </div>
              <div className={styles.right_form}>
                <textarea
                  name="comment"
                  placeholder="COMMENT"
                  className={styles.comment}
                ></textarea>
              </div>
            </div>
            <button type="submit" className={`${styles.submit} primary_btn`}>
              Отправить {chevron_right}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
