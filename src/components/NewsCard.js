
import React from 'react';

const NewsCard = ({ headerName, image, text }) => {
  return (
    <div className="news-page-item">
      <div className="news-page-item-img">
        <img src={image} alt={headerName} />
      </div>
      <div className="news-page-item-txt">
        <div className="news-page-item-header">{headerName}</div>
        <div className="news-page-item-desc">{text}</div>
        <div className="link-to-news">Подробнее...</div>
      </div>
    </div>
  );
};

export default NewsCard;