import React from "react";

const data = [
  {
    id: 1,
    title: "Услуга 1",
    text: "Дцвщцщаца щзцл ащзцащзцлащзащ зцлащ защзцлащзащзц",
  },
  {
    id: 2,
    title: "Услуга 2",
    text: "100210 010010010 010010010010 0100100100",
  },
  {
    id: 3,
    title: "Услуга 3",
    text: "10021001 00100100 10010010 0100100 100100",
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
              <div className="news-item-header"><p>{item.title}</p></div>
              <div className="news-item-desc"><p>{item.text}</p></div>
              <div className="news-item-more"><p>Подробнее...</p></div>
            </div>
          </div>
        ))}
      </div>
      <div className="after-news"><br></br></div>
    </div>
  );
} 