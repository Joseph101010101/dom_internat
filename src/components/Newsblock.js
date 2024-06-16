import React from "react";

const data = [
  {
    id: 1,
    title: "Услуга 1",
    text: "100",
  },
  {
    id: 2,
    title: "Услуга 2",
    text: "1002",
  },
  {
    id: 3,
    title: "Услуга 3",
    text: "1002",
  }
];

export default function Newsblock() {
  return (
    <div className="news-block" id="news">
      <div className="news-header">
        <h2>Новости</h2>
      </div>
      <div className="news-item-block">
        {data.map((item) => (
          <div key={item.id} className="news-item">
            <div className="news-item-img"></div>
            <div className="news-item-txt">
              <div className="news-item-header">{item.title}</div>
              <div className="news-item-desc">{item.text}</div>
              <div className="news-item-more">Подробнее...</div>
            </div>
          </div>
        ))}
      </div>
      <div className="after-news"><br></br></div>
    </div>
  );
} 