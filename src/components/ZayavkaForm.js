import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
const ZayavkaForm = () => {
    const form = useRef();
    const [placement, setPlacement] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gjovgsn", "template_oi30p9d", form.current, {
        publicKey: "9bFWK5qZOLoKchDOG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Заявка отправлена. С вами свяжутся.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      {" "}
      <div className="feedback-header">Оставьте заявку при помощи <br/>формы подачи заявки</div>
      <form className="feedback-body" ref={form} onSubmit={sendEmail}>
        <label className="feedback__label">Имя</label>
        <input className="feedback__input" type="text" name="user_name" />
        <label className="feedback__label">Email</label>
        <input className="feedback__input" type="email" name="user_email" />
        <label className="feedback__label">Номер</label>
        <input className="feedback__input" type="phone" name="user_phone" />
        <div className="checkbox-group">
        <label className="feedback__label">Выберите желаемый тип размещения</label>
      <input
        type="checkbox"
        name="placement"
        value="Нормальное размещение"
        checked={placement === 'Нормальное размещение'}
        onChange={(event) => setPlacement(event.target.value)}/>
      <span>Нормальное размещение</span>
      <input
        type="checkbox"
        name="placement"
        value="Двухместное жилое помещение повышенной комфортности"
        checked={placement === 'Двухместное жилое помещение повышенной комфортности'} onChange={(event) => setPlacement(event.target.value)}/>
      <span>Двухместное жилое помещение повышенной комфортности</span>
      <input
        type="checkbox"
        name="placement"
        value="Одноместное жилое помещение повышенной комфортности"
        checked={placement === 'Одноместное жилое помещение повышенной комфортности'} onChange={(event) => setPlacement(event.target.value)}/>
      <span>Одноместное жилое помещение повышенной комфортности</span>
    </div>
        <input className="feedback__submit" type="submit" value="Отправить" />
      </form>
    </div>
  );
};
  
  export default ZayavkaForm;