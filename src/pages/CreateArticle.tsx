import React from "react";
import fileIcon from "../assets/img/file_icon.svg";
const CreateArticle = () => {
  return (
    <div className="card article-form p-5">
      <h1 className="card-title center mb-3"> Create Article</h1>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="email" className="form-control" />
        </div>

        <div className="form-group">
          <label>Your story</label>
          <textarea className="form-control" id="story" rows={3}></textarea>
        </div>

        <div className="form-group mt-2">
          <label>
            <img src={fileIcon} alt="" /> Article Image
            <input type="file" className="file-input" />
          </label>
        </div>
        <input type="submit" className="btn btn btn-primary mt-2" />
      </form>
    </div>
  );
};

export default CreateArticle;
