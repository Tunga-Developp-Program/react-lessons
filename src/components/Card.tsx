import React from 'react'
import { Link } from 'react-router-dom'
interface CardProps{
  content:{
title:string;
image:string;
story:string;
time:string;
author:string;
}

}

const Card:React.FC<CardProps> = ({content}) => {
  return (
<div className="card bg-transparent  border-0 article-sm" >
  <img src={content.image} className="card-img-top" alt={content.title}/>
  <div className="card-body">
    <h5 className="card-title">{content.title}</h5>
    <p className="card-text">{content.story}</p>
    <Link to="/article/1" className="btn btn-primary">Read more</Link>
  </div>
</div>
  )
}

export default Card
