import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import fileIcon from "../assets/img/file_icon.svg";
import { AuthContext } from "../contexts/AuthContex";
import { fireDb, fireStorage, timestamp } from "../firebaseConfig";
const CreateArticle = (props: any) => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [imageUrl, setImgaeUrl] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let image = e.target.files;
    if (image) {
      const storageRef = fireStorage.ref(image[0].name);
      storageRef.put(image[0]);
      setImgaeUrl(await storageRef.getDownloadURL());
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const article = {
      title,
      story,
      imageUrl,
      publishedAt: timestamp(),
      authorID: currentUser.uid,
    };

    const collectionRef = fireDb.collection("articles");
    await collectionRef.add(article);
  };

  return (
    <div className="card article-form p-5">
      <h1 className="card-title center mb-3"> Create Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Your story</label>
          <textarea
            className="form-control"
            name="story"
            id="story"
            rows={3}
            onChange={(e) => setStory(e.target.value)}></textarea>
        </div>

        <div className="form-group mt-2">
          <label>
            <img src={fileIcon} alt="" /> Article Image
            <input
              type="file"
              accept="image/png, image/jpeg, image/svg"
              className="file-input"
              onChange={handleImage}
            />
          </label>
        </div>
        <input type="submit" className="btn btn btn-primary mt-2" />
      </form>
    </div>
  );
};

export default CreateArticle;
