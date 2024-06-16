import React from "react";
import SomeForms from "./SomeForms";

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
  },
  {
    id: 4,
    title: "Услуга 4",
    text: "1002",
  },
  {
    id: 5,
    title: "Услуга 5",
    text: "1002",
  },
  {
    id: 6,
    title: "Услуга 6",
    text: "1002",
  },
  {
    id: 7,
    title: "Услуга 7",
    text: "1002",
  },
];

export default function News() {
  return (
    <div className="News">
      <SomeForms />
      <div className="news-header">
        <h2>Новости</h2>
      </div>
      <div className="news-page-item-box">
        {data.map((item) => (
          <div key={item.id} className="news-page-item">
            <div className="news-page-item-img"></div>
            <div className="news-page-item-txt">
              <div className="news-page-item-header">{item.title}</div>
              <div className="news-page-item-desc">{item.text}</div>
              <div className="link-to-news">Подробнее...</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}