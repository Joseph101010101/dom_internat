import React from "react";
import { useParams } from "react-router-dom";


const NewsMain = () => {
  const { id } = useParams();

  const data = [
    {
      id: 1,
      title: "Новость 1",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      id: 2,
      title: "Новость 2",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      id: 3,
      title: "Новость 3",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      id: 4,
      title: "Новость 4",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      id: 5,
      title: "Новость 5",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      id: 6,
      title: "Новость 6",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
    {
      id: 7,
      title: "Новость 7",
      text: "Lorem ipsum set amen, set dollar amen. Lorem ipsum set amen, set dollar amen.Lorem ipsum set amen, set dollar amen.2",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
    },
  ];

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