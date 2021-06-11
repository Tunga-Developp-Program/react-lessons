import React from "react";
import profileImage from "../assets/img/profile_img.svg";
import loveIconSm from "../assets/img/love_icon_sm.svg"
import penIcon from "../assets/img/pen_icon.svg"


const Profile = () => {
  return (
    <div className="container center profile">
      <img src={profileImage} alt="profile" />
      <div className="details">
        <h2>John Doe</h2>
        <div className="achive">
<hr />
<span className="share p-3"><img src={penIcon} alt="" /> 23 Articles</span>
<span className="like p-3"><img src={loveIconSm} alt=""  /> 50 Hearts</span>
</div>
      </div>
    </div>
  );
};

export default Profile;
