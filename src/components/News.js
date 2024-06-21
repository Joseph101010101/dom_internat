import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SomeForms from './SomeForms';

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://66759acaa8d2b4d072f0c256.mockapi.io/news')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="News">
      <SomeForms />
      <div className="news-header">
        <h2>Новости</h2>
      </div>
      <div className="news-page-item-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <div key={item.id} className="news-page-item">
              <img className="news-page-item-img" src={item.image} />
              <div className="news-page-item-txt">
                <div className="news-page-item-header">{item.title}</div>
                <div className="news-page-item-desc">{item.desc}</div>
                <NavLink to={`/news-main/${item.id}`} className="link-to-news">
                  Подробнее...
                </NavLink>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;