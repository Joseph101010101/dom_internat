import React from "react";
import { NavLink } from 'react-router-dom';
const data = [
  {
    id: 1,
    title: "Новость 1",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 2,
    title: "Новость 2",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
  },
  {
    id: 3,
    title: "Новость 3",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
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
            <div className="news-item-img"><image href={item.image}/></div>
            <div className="news-item-txt">
              <div className="news-item-header"><p>{item.title}</p></div>
              <div className="news-item-desc"><p>{item.text}</p></div>
              <NavLink to={`/news-main/${item.id}`} className="link-to-news">
                Подробнее...
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <div className="after-news"><br></br></div>
    </div>
  );
} 