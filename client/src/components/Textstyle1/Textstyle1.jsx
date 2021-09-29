import React from "react";
import "./Textstyle1.scss";

const Title = (props) => {
  return (

      <div className="Title-style1">
        <span className="title-header">{props.textStyle1}</span>
      </div>

  );
};

export default Title;
