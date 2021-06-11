import React from "react";
import landscape from "../assets/img/landscape.jpg";
const ShowCase = () => {
  return (
    <div className="container mb-4 ">
      <div className="row">
        <div className="col">
          <img src={landscape} className="showcase-image" alt="showcase" />
        </div>

        <div className="col">
          <div className="showcase-credits">Lorem, ipsum. Lorem, ipsum.</div>
          <div className="showcase-title">
            <h2>Lorem ipsum dolor sit.</h2>
          </div>
          <div className="showcase-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              repudiandae veniam vero cum beatae possimus itaque nobis magni
              autem reiciendis? Ea doloremque hic quam suscipit accusantium
              tempore quaerat amet illum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
