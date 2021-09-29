import React from "react";
import "./Title.scss";

const Title = (props) => {
  return (

      <div className="Title-size1">
        <span className="title-header">{props.text}</span>
        <span className="title-discription">{props.discription}</span>
      </div>

  );
};

export default Title;
