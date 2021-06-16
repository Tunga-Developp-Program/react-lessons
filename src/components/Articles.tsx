import React, { useEffect, useState } from "react";
import { fireDb } from "../firebaseConfig";
import Card from "./Card";
const Articles = () => {
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

  return (
    <div className="container">
      <div className="row g-0">
        {articles.map((document, index) => (
          <div className="col-md-4" key={index}>
            <Card content={document} idx={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
