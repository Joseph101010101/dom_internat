import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gjovgsn", "template_tl9btpj", form.current, {
        publicKey: "9bFWK5qZOLoKchDOG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Сообщение отправлено");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      {" "}
      <div className="feedback-header">Свяжитесь с нами при помощи <br/>формы обратной связи</div>
      <form className="feedback-body" ref={form} onSubmit={sendEmail}>
        <label className="feedback__label">Имя</label>
        <input className="feedback__input" type="text" name="user_name" />
        <label className="feedback__label">Email</label>
        <input className="feedback__input" type="email" name="user_email" />
        <label className="feedback__label">Сообщение</label>
        <textarea className="feedback__input" name="message" />
        <input className="feedback__submit" type="submit" value="Отправить" />
      </form>
    </div>
  );
};
export default Contactus;