import React from "react";
import image from "../assets/img/landscape.jpg";
import Card from "./Card";
const Articles = () => {
  const articles = [
    {
      id: 1,
      author: "John Doe",
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      story:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      time: "12/4/7",
      image: image,
    },
    {
      id: 1,
      author: "John Doe",
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      story:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      time: "12/4/7",
      image: image,
    },
    {
      id: 1,
      author: "John Doe",
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      story:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      time: "12/4/7",
      image: image,
    },
  ];

  return (
    <div className="container">
      <div className="row g-0">
        {articles.map((el, index) => (
          <div className="col-md-4">
            <Card key={el.id} content={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
