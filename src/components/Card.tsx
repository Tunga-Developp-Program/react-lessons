import React from "react";
import { Link } from "react-router-dom";
interface CardProps {
  content: {
    title: string;
    imageUrl: string;
    story: string;
    time: string;
    authorID: string;
  };
idx:number
}

const Card: React.FC<CardProps> = ({ content , idx}) => {
  return (
    <div className="card bg-transparent  border-0 article-sm">
      <img
        src={content.imageUrl}
        className="card-img-top"
        alt={content.title}
      />
      <div className="card-body">
        <h5 className="card-title">{content.title}</h5>
        <p className="card-text">{content.story}</p>
        <Link to={`/article/${idx}`} className="btn btn-primary">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
