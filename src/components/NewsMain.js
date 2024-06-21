
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsMain = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://66759acaa8d2b4d072f0c256.mockapi.io/news`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const newsItem = data.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <div className="NewsMain">
      <img src={newsItem.image} alt={newsItem.title} />
      <h2>{newsItem.title}</h2>
      <p>{newsItem.text}</p>
    </div>
  );
};

export default NewsMain;