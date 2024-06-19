import React from 'react';
import { NavLink } from 'react-router-dom';
import NewsMain from './NewsMain';
import SomeForms from './SomeForms';

const data = [
  {
    id: 1,
    title: "Услуга 1",
    text: "100",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Услуга 2",
    text: "1002",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    title: "Услуга 3",
    text: "1002",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 4,
    title: "Услуга 4",
    text: "1002",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 5,
    title: "Услуга 5",
    text: "1002",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 6,
    title: "Услуга 6",
    text: "1002",
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 7,
    title: "Услуга 7",
    text: "1002",
    image: "https://via.placeholder.com/300x200"
  },
];

const News = () => {
  return (
    <div className="News">
      <SomeForms/>
      <div className="news-header">
        <h2>Новости</h2>
      </div>
      <div className="news-page-item-box">
        {data.map((item) => (
          <div key={item.id} className="news-page-item">
            <img lassName="news-page-item-img" src={item.image}></img>
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