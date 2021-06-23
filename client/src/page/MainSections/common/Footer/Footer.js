import React, { Component, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './Footer.scss'


function Footer(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {

    }
  }, []);

  return (
    <>

      <footer id="footer">
        <div className="inner">
          <h2>Shehan PW</h2>
          <p>Success is the sum of small efforts repeated day in and day out. </p>

          <ul className="icons">
            <li><a href="https://linkedin.com/in/shehanhasintha/" className="icon style2 fa-linkedin"><span className="label">500px</span></a></li>
            <li><a href="https://github.com/SHEHANhasintha" className="icon style2 fa-github"><span className="label">Email</span></a></li>
            <li><a href="https://twitter.com/EkanShehan" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/shehan.hasintha.9" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/shehanhasintha" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="mailto:shehan.hasintha.ekanayake@gmail.com?subject = Feedback&body = Message" className="icon fa-envelope"><span className="label">Email</span></a></li>
          </ul>
          <p className="copyright">&copy; Shehan PW 2020.</p>
        </div>

      </footer>
    </>

  );

}

export default Footer;


