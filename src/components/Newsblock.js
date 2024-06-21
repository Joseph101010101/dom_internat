import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Newsblock() {
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
    <div className="news-block" id="news">
      <div className="news-header">
        <h2>Новости</h2>
      </div>
      <div className="news-item-block">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.slice(-3).map((item) => (
            <div key={item.id} className="news-item">
              <img className="news-item-img" src={item.image} />
              <div className="news-item-txt">
                <div className="news-item-header">
                  <p>{item.title}</p>
                </div>
                <div className="news-item-desc">
                  <p>{item.desc}</p>
                </div>
                <NavLink to={`/news-main/${item.id}`} className="link-to-news">
                  Подробнее...
                </NavLink>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="after-news"><br></br></div>
    </div>
  );
}