import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function PosGosUslugi() {
  return (
    

    <div id="js-show-iframe-wrapper">
      <div class="pos-banner-fluid bf-2">
        <div class="bf-2__decor">
          <div class="bf-2__logo-wrap">
            <img
              class="bf-2__logo"
              src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg"
              alt="Госуслуги"
            />
            <div class="bf-2__slogan">Решаем вместе</div>
          </div>
        </div>
        <div class="bf-2__content">
          <div class="bf-2__description">
            <span class="bf-2__text">
            Есть предложения по улучшению социальной сферы, 
            </span>
            <span class="bf-2__text bf-2__text_small">
            повышению эффективности служб занятости или другие вопросы?
            </span>
          </div>

          <div class="bf-2__btn-wrap">
            <button class="pos-banner-btn_2" type="button">
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
