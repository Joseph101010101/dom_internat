import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsMain from './NewsMain';

const data = [
  {
    id: 1,
    title: "Новость 1",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 2,
    title: "Новость 2",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 3,
    title: "Новость 3",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 4,
    title: "Новость 4",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 5,
    title: "Новость 5",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 6,
    title: "Новость 6",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 7,
    title: "Новость 7",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
];

const News = () => {
  return (
    <div className="News">
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