import React from "react";
import Image from "../assets/img/landscape.jpg";
import loveIcon from "../assets/img/love_icon.svg"
import shareIcon from "../assets/img/share_icon.svg"

const SingleArticle = () => {
  return (
    <div className="container">
      <div className="article-lg">
        <img src={Image} className="img-fluid" alt="" />
      </div>
      <div className="article-content">
        <div className="showcase-credits">Lorem, ipsum. Lorem, ipsum.</div>
        <div className="showcase-title">
          <h2>Lorem ipsum dolor sit.</h2>
        </div>
        <div className="showcase-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            repudiandae veniam vero cum beatae possimus itaque nobis magni autem
            reiciendis? Ea doloremque hic quam suscipit accusantium tempore
            quaerat amet illum?
          </p>
        </div>
      </div>
<div className="interract">
<hr />
<span className="like p-3"><img src={loveIcon} alt=""  /> Give it a heart</span>
<span className="share p-3"><img src={shareIcon} alt="" /> Share it</span>

</div>
    </div>
  );
};

export default SingleArticle;
