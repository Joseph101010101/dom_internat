import React from "react";
import { useParams } from "react-router-dom";

const NewsMain = () => {
  const { id } = useParams("/news");

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

  const newsItem = data.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.text}</p>
    </div>
  );
};
export default NewsMain;
