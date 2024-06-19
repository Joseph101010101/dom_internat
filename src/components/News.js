import React from "react";
import { NavLink } from "react-router-dom";
import NewsMain from "./NewsMain";
import SomeForms from "./SomeForms";

const data = [
  {
    id: 1,
    title: "Новость 7",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Новость 2",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Новость 3",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Новость 4",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Новость 5",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Новость 6",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Новость 7",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
];

const News = () => {
  return (
    <div className="News">
      <SomeForms />
      <div className="news-header">
        <h2>Новости</h2>
      </div>
      <div className="news-page-item-box">
        {data.map((item) => (
          <div key={item.id} className="news-page-item">
            <img lassName="news-page-item-img" src={item.image}></img>
            <div className="news-page-item-txt">
              <div className="news-page-item-header">{item.title}</div>
              <div className="news-page-item-desc">{item.desc}</div>
              <NavLink to={`/news-main/${item.id}`} className="link-to-news">
                Подробнее...
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
