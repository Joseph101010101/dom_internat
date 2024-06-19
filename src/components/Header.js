import React from "react";

import {Routes, Route, Links} from 'react-router-dom'
// import React from 'react';


export default function Header() {
  return (
    <header>
      <div className="logo">
        <div className="logo-image"></div>
        <div className="logo-p">
          ГАСУ Астраханский дом-интренат <br></br> для престарелых и инвалидов
        </div>
      </div>
      <div className="nav-menu">
        <button className="nav-button"><a href="#about">Об учреждении</a></button>
        <button className="nav-button"><a href="#news">Последние новости</a></button>
        <button className="nav-button"><a href="#maintask">Наши задачи</a></button>
        <button className="nav-button" ><a href="#notfree">Платные услуги</a></button>
        <button className="nav-button"><a href="#contact">Контакты</a></button>


      </div>
      <div className="nurcery-image"></div>
    
    </header>

  );
}
