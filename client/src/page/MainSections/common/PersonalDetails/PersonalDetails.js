import React, { Component, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from '../../../../header/Header'
import './PersonalDetails.scss'
import './scroll.js'

function PersonalDetails(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {

    }
  }, []);


  return (
    <>

      <section id="banner" data-video="images/banner">
        <div className="inner">
          <Header />
          <a href="#main" className="more">Learn More</a>

        </div>

      </section>


    </>

  );

}

export default PersonalDetails;


