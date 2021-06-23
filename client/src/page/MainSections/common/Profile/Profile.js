import React, { Component, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from '../../../../header/Header'
import './Profile.scss'

function Profile(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {

    }
  }, []);


  return (
    <>

      <div id="main">
        <div className="inner">

          <div className="thumbnails">

            <div className="box">
              <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic01.jpg" alt="" /></a>
              <div className="inner">
                <h3>Nascetur nunc varius commodo</h3>
                <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                <a href="https://youtu.be/s6zR2T9vn2c" className="button fit" data-poptrox="youtube,800x400">Watch</a>
              </div>
            </div>

            <div className="box">
              <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
              <div className="inner">
                <h3>Nascetur nunc varius commodo</h3>
                <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                <a href="https://youtu.be/s6zR2T9vn2c" className="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
              </div>
            </div>

            <div className="box">
              <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
              <div className="inner">
                <h3>Nascetur nunc varius commodo</h3>
                <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                <a href="https://youtu.be/s6zR2T9vn2c" className="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
              </div>
            </div>

            <div className="box">
              <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
              <div className="inner">
                <h3>Nascetur nunc varius commodo</h3>
                <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                <a href="https://youtu.be/s6zR2T9vn2c" className="button style2 fit" data-poptrox="youtube,800x400">Watch</a>
              </div>
            </div>

            <div className="box">
              <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
              <div className="inner">
                <h3>Nascetur nunc varius commodo</h3>
                <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                <a href="https://youtu.be/s6zR2T9vn2c" className="button style3 fit" data-poptrox="youtube,800x400">Watch</a>
              </div>
            </div>

            <div className="box">
              <a href="https://youtu.be/s6zR2T9vn2c" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
              <div className="inner">
                <h3>Nascetur nunc varius commodo</h3>
                <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
                <a href="https://youtu.be/s6zR2T9vn2c" className="button fit" data-poptrox="youtube,800x400">Watch</a>
              </div>
            </div>

          </div>

        </div>
      </div>



    </>

  );

}

export default Profile;


