import React, { Component, useContext, useEffect } from 'react';

import './Callout.scss'

function Callout(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {

    }
  }, []);


  return (
    <>

      <section id="two" className="blog-section">
        <div className="inner">
          <div className="blog box">
            <h1 className="card__header">Call out</h1>
            <p className="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>

            <div className="grid-recon style2">

              <div className="card-container-me">
                <span className="pro">Offline</span>
                <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>Ricky Park</h3>
                <h6>New York</h6>
                <p>User interface designer and <br /> front-end developer</p>
                <div className="buttons">
                  <button className="primary">
                    Message
                  </button>
                  <button className="primary ghost">
                    Following
                  </button>
                </div>
                <div className="skills">
                  <h6>Skills</h6>
                  <ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                  </ul>
                </div>
              </div>


              <div className="flex-ot">
                <div>

                  <div className="plx-card gold">
                    <div className="pxc-bg" style={{ backgroundImage: "url('https://i.gyazo.com/a846fc87cca5ebd3942ae1e038bb5083.png')" }}>  </div>
                    <div className="pxc-avatar"><img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP4312-CUSA07658_00-AV00000000000049/1536930670000/image?w=240&amp;h=240&amp;bg_color=000000&amp;opacity=100&amp;_version=00_09_000" /></div>
                    <div className="pxc-stopper">   </div>
                    <div className="pxc-subcard">
                      <div className="pxc-sub"> Thiss probably should be called tagline instead. Thiss probably should be called tagline instead. Thiss probably should be called tagline instead.
                        Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.
                      </div>
                    </div>
                  </div>


                </div>
                <div>


                  <div className="plx-card gold">
                    <div className="pxc-bg" style={{ backgroundImage: "url('https://i.gyazo.com/a846fc87cca5ebd3942ae1e038bb5083.png')" }}>  </div>
                    <div className="pxc-avatar"><img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/GB/en/999/EP4312-CUSA07658_00-AV00000000000049/1536930670000/image?w=240&amp;h=240&amp;bg_color=000000&amp;opacity=100&amp;_version=00_09_000" /></div>
                    <div className="pxc-stopper">   </div>
                    <div className="pxc-subcard">
                      <div className="pxc-sub"> Thiss probably should be called tagline instead. Thiss probably should be called tagline instead. Thiss probably should be called tagline instead.
                        Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.Thiss probably should be called tagline instead.
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


    </>

  );

}

export default Callout;


