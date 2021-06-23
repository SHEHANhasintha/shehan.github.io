import React, { Component, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './Experiance.scss'

function Experiance(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {
    }
  }, []);

  return (
    <>
      <section id="one" className="wrapper ">
      <div className="thicc"></div>
        <div className="inner">

          <div className="blog box ">


            <div className="inner style2">

              <h1 className="card__header">Work Experiance</h1>
              <p className="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>

              <section id="cd-timeline" className="cd-container">

                <div className="cd-timeline-block">
                  <div className="cd-timeline-img cd-picture">
                  </div>

                  <div className="cd-timeline-content">
                    <h2>Penta Consulting</h2>
                    <div className="timeline-content-info">
                      <span className="timeline-content-info-title">
                        <i className="fa fa-certificate" aria-hidden="true"></i>
                        Front End Developer
                      </span>
                      <span className="timeline-content-info-date">
                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                        June 2016 - Present
                      </span>
                    </div>
                    <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                    <ul className="content-skills">
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Wordpress</li>
                    </ul>
                  </div>
                </div>


                <div className="cd-timeline-block">
                  <div className="cd-timeline-img cd-picture">
                  </div>

                  <div className="cd-timeline-content">
                    <h2>Penta Consulting</h2>
                    <div className="timeline-content-info">
                      <span className="timeline-content-info-title">
                        <i className="fa fa-certificate" aria-hidden="true"></i>
                        Front End Developer
                      </span>
                      <span className="timeline-content-info-date">
                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                        June 2016 - Present
                      </span>
                    </div>
                    <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                    <ul className="content-skills">
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Wordpress</li>
                    </ul>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </div>
      </section>
    </>

  );

}

export default Experiance;


