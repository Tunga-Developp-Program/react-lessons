import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import loveIcon from "../assets/img/love_icon.svg";
import shareIcon from "../assets/img/share_icon.svg";
import { fireDb } from "../firebaseConfig";

const SingleArticle = () => {
  const { id } = useParams<any>()
console.log(id);
  const [articles, setArticles] = useState<any[]>([]);

useEffect(()=>{
 const arr: any[] = [];

  fireDb
    .collection("articles")
    .get()
    .then((documents) => {
      // documents is an array of documents
      documents.forEach((doc) => {
        arr.push(doc.data());
      });
        setArticles(arr); // updating the state

    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });


},[])
const article = articles[id]



  return (


    <div className="container">
{
article?(
<>
      <div className="article-lg">
        <img src={article.imageUrl} className="img-fluid" alt="" />
      </div>
      <div className="article-content">
        <div className="showcase-credits">{articles[id].title}.</div>
        <div className="showcase-title">
          <h2>time published</h2>
        </div>
        <div className="showcase-desc">
          <p>
            {article.story}
          </p>
        </div>
      </div>
      <div className="interract">
        <hr />
        <span className="like p-3">
          <img src={loveIcon} alt="" /> Give it a heart
        </span>
        <span className="share p-3">
          <img src={shareIcon} alt="" /> Share it
        </span>
      </div>
</>
):<h1> No artilces found, please try again</h1>

}

    </div>


  );
};

export default SingleArticle;
