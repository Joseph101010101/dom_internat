import React from "react";
import { NavLink } from 'react-router-dom';
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
    title: "Новость 6",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Новость 5",
    desc: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
    text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
    image: "https://via.placeholder.com/300x200",
  },
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
            <img className="news-item-img" src={item.image}/>
            <div className="news-item-txt">
              <div className="news-item-header"><p>{item.title}</p></div>
              <div className="news-item-desc"><p>{item.desc}</p></div>
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