import React from "react";
import "./socialMediaLink.scss";

const socialMediaLink = (props) => {
  return (
    <ul className="socialMediaLink">
      {props.socialMediaLinks.map((data) => {
        return (
          <li key={data.iconName}>
            <a href={data.link}>
              <i className={`icon ${data.fontIcon}`} aria-hidden="true"></i>
              <span> - {data.iconName}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default socialMediaLink;
