import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function PosGosUslugi() {
  return (
    

    <div id="js-show-iframe-wrapper">
      <div className="pos-banner-fluid bf-2">
        <div className="bf-2__decor">
          <div className="bf-2__logo-wrap">
            <img
              className="bf-2__logo"
              src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg"
              alt="Госуслуги"
            />
            <div className="bf-2__slogan">Решаем вместе</div>
          </div>
        </div>
        <div className="bf-2__content">
          <div className="bf-2__description">
            <span className="bf-2__text">
            Есть предложения по улучшению социальной сферы, 
            </span>
            <span className="bf-2__text bf-2__text_small">
            повышению эффективности служб занятости или другие вопросы?
            </span>
          </div>

          <div className="bf-2__btn-wrap">
            <button className="pos-banner-btn_2" type="button">
            <NavLink  to={"https://pos.gosuslugi.ru"}>
              Сообщить о проблеме
            </NavLink>
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}
