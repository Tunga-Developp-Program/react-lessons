import React, { useContext } from "react";
import profileImage from "../assets/img/profile_img.svg";
import loveIconSm from "../assets/img/love_icon_sm.svg";
import penIcon from "../assets/img/pen_icon.svg";
import { AuthContext } from "../contexts/AuthContex";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container center profile">

      {currentUser ? (<>
      <img src={currentUser.photoURL} alt="profile" />
        <div className="details">
          <h2>{currentUser.displayName}</h2>
          <div className="achive">
            <hr />
            <span className="share p-3">
              <img src={penIcon} alt="" /> 23 Articles
            </span>
            <span className="like p-3">
              <img src={loveIconSm} alt="" /> 50 Hearts
            </span>
          </div>
        </div>
</>
      ) : (
        <h1>Login to access your profile</h1>
      )}
    </div>
  );
};

export default Profile;
