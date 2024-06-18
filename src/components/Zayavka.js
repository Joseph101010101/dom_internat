import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Zayavka() {
  return (
    <div className="banner">
      <h2>Двухместное жилое помещение повышенной комфортности</h2>
      <h2>205 руб/сутки</h2>
      <p>Телевизор и холодильник </p>
      <p>Уход 24\7</p>
      <p>Индивидуальный санузел</p>
      <p>Площадь помещения 18 кв.м.</p>

      <p>Оставьте заявку на нашу услугу и мы свяжемся с вами в ближайшее время.</p>
      <button><NavLink to={"/formazayavky"}>Оставить заявку</NavLink></button>
    </div>
  );

};

