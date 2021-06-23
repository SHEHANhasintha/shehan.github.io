import React, { Component, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Header from '../../../../header/Header'
import './YoutubePage.scss'

function YoutubePage(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {
    }
  }, []);

  const videos = [
    {
      vidLocation: 'http://youtube.com/embed/eg6kNoJmzkY?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
      vidThumb: 'http://img.youtube.com/vi/eg6kNoJmzkY/0.jpg',
      vidDiscription: 'Jessica Hernandez &amp; the Deltas - Dead Brains'
    },
    {
      vidLocation: 'http://youtube.com/embed/_Tz7KROhuAw?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
      vidThumb: 'http://img.youtube.com/vi/_Tz7KROhuAw/0.jpg',
      vidDiscription: 'Barbatuques - CD Tum Pá - Sambalelê'
    },
    {
      vidLocation: 'http://youtube.com/embed/F1f-gn_mG8M?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1',
      vidThumb: 'http://img.youtube.com/vi/F1f-gn_mG8M/0.jpg',
      vidDiscription: 'Jessica Hernandez &amp; the Deltas - Dead Brains'
    }
  ]

  let i = 0;
  let v = -1;

  return (
    <>


      <section id="one" className="wrapper ">

        <div className="thicc"></div>

        <div className="inner">

          <div className="inner box ">


            <div className="inner style2">

              <h1 className="card__header">YouTube Channel</h1>
              <p className="card__text">This is my place where I share my Experiance and <strong>knoledge</strong> as video contents. I hope people find my youtube channel as an enjoyable place and mostly benifitial to their currier life.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>


              <div className="container">

                <div className="vid-container">
                  <iframe id="vid_frame" src="http://www.youtube.com/embed/eg6kNoJmzkY?rel=0&amp;showinfo=0&amp;autohide=1" frameBorder="0" width="560" height="315"></iframe>
                </div>

                <div className="vid-list-container">
                  <div className="vid-list">


                    {
                      videos.map((value, key) => {

                        let str =
                          <div key={`${key}`} className='vid-item' location={`${value.vidLocation}`} style={{ cursor: 'pointer' }} >
                            <div className='thumb'><img src={`${value.vidThumb}`} location={`${value.vidLocation}`} /></div>
                            <div className='desc' location={`${value.vidLocation}`} >{`${value.vidDiscription}`}</div>
                          </div>

                        return (str)
                      })
                    }

                  </div>
                </div>

                <div className="arrows">
                  <div className="arrow-left"><i className="fa fa-chevron-left fa-lg"></i></div>
                  <div className="arrow-right"><i className="fa fa-chevron-right fa-lg"></i></div>
                </div>

                <div className="thicc">

                </div>

              </div>



            </div>
          </div>
        </div>
      </section>



    </>

  );

}

export default YoutubePage;


