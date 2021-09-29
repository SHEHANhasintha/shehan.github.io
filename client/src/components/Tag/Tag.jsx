import React from "react";
import "./Tag.scss";

const Tag = (props) => {
  return (
    <div className="Tag">
      <div className="post">
        <ul className="tags">
          <li>
            <a href="#">tag</a>
          </li>
          <li>
            <a href="#">tag name</a>
          </li>
          <li>
            <a href="#">tag name</a>
          </li>
          <li>
            <a href="#">tag name</a>
          </li>
          <li>
            <a href="#">tag name</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tag;
