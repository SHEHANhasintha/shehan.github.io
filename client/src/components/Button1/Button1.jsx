import React from "react";
import "./Button1.scss";

const Button1 = (props) => {
  return (
    <div className="Button1">
      <section className="page-container" id="flip-3d">
        <section className="section-container">
          <div className="button-container button-flip3d-vertical2">
            <div className="flipper flipper-flip3d-vertical2">
              <div className="button front">
                <span>Download Resume</span>
              </div>
              <div className="button button-3d back">
                <i className="fa fa-download" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Button1;
