import React from "react";
import { Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function SomeForms() {
  return (
    <div className="forms">
      <div className="form-one">
        <p className="forms-txt">Свяжитесь с нами при помощи формы обратной связи</p>
        <button className="forms-button"><NavLink className="a-link-forms" to={"/contactus"}>
              Связаться с нами
            </NavLink></button>
      </div>
      <div className="form-two">
        <p className="forms-txt">Рассчитайте стоимость дополнительных услуг</p>
        <button className="forms-button"><NavLink className="a-link-forms" to={"/cost"}>
              Рассчитать
            </NavLink></button>
      </div>
      
    </div>
  );
}
