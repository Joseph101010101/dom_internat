import React from "react";

export default function MainTask() {
  return (
    <div className="main-task" id="maintask">
      <div className="mai-task-txt">
        <div className="main-task-header">Основные задачи Учреждения</div>
        <div className="main-task-desc">
          Наша задача улучшать условия проживания людей, дарить им заботу и
          уважение, получая взамен их счастливые и радостные лица.
        </div>
      </div>

      <div className="main-task-item-box">
        <div className="main-task-item">
          <div className="main-task-item-img"></div>
          <div className="main-task-item-header">Забота о пожилых</div>
          <div className="main-task-item-desc">
            Медико-социальное обслуживание направленое на граждан пожилого
            возраста (мужчин старше 60 лет и женщин старше 55 лет)
          </div>
        </div>

        <div className="main-task-item">
          <div className="main-task-item-img"></div>
          <div className="main-task-item-header">Забота об инвалидах</div>
          <div className="main-task-item-desc">
            Медико-социальное обслуживание направленое для инвалидов (1, 2
            группы старше 18 лет частично или полностью утративших способность к
            самообслуживанию)
          </div>
        </div>

        <div className="main-task-item">
          <div className="main-task-item-img"></div>
          <div className="main-task-item-header">
            Забота о лежачих инвалидах
          </div>
          <div className="main-task-item-desc">
            Медико-социальное обслуживание направленое на граждан признанных
            нуждающимися в социальном обслуживании в стационарной форме
          </div>
        </div>

        <div className="main-task-item">
          <div className="main-task-item-img"></div>
          <div className="main-task-item-header">
            Забота и внимание к подопечным
          </div>
          <div className="main-task-item-desc">
            Обеспечение постоянного проживания, создание соответствующих их
            возрасту и состоянию здоровья условий жизнедеятельности, проведение
            мероприятий медицинского, психологического, социального характера,
            питание и уход.
          </div>
        </div>
      </div>
      <div className="main-task-img"></div>
    </div>
  );
}
