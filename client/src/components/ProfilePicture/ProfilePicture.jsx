import React from "react";
import "./ProfilePicture.scss";

const ProfilePicture = (props) => {
  return (
    <div className="ProfilePicture">
      <img
        src={props.location}
        alt="Profile picture"
      ></img>
    </div>
  );
};

export default ProfilePicture;
