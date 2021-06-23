import React, { Component, useContext, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './Education.scss'


function Education(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  useEffect(function () {
    return function cleanup() {
    }
  }, []);


  return (
    <>
      <section id="one" className="blog-section">
        <div className="inner">
          <div className="blog box">
            <h1 className="card__header">Education and recommandation letters</h1>
            <p className="card__text">Capture the stunning <strong>essence</strong> of the early morning sunrise in the Californian wilderness.  <a className="link-button" href="http://elwin.vdhazel.com/" target="_blank">This is a link</a></p>

            <div className="inner stylenonback style2">

              <p className="card__text write-text drop-cap discription_card">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit scelerisque sem, nec auctor libero. Cras non condimentum neque, quis porttitor sapien. Curabitur convallis congue tortor. Vestibulum tempus ipsum magna, at efficitur dui cursus vitae. Praesent ac mi vitae diam tristique aliquet. Quisque nec neque purus. Donec maximus pellentesque ligula non luctus.

                Nullam ac odio id augue tempor tincidunt. Aliquam sed ante elit. Quisque rutrum commodo lacinia.<br />
                Cras auctor ultrices nulla, et suscipit turpis. Ut imperdiet sed felis at hendrerit. Nullam nec aliquet massa, non ornare justo. Praesent rutrum ante quis odio tristique pulvinar. Aenean hendrerit volutpat pharetra. Etiam auctor eros vitae dui pulvinar, sed rutrum velit scelerisque. Aliquam non faucibus enim, faucibus molestie libero. Duis ut eros eu sem ultricies placerat et ac dolor. Ut eu quam ornare, vehicula mi at, pellentesque elit. Integer ultrices tortor eget scelerisque facilisis. Sed euismod convallis orci et gravida.

                In non facilisis elit. Pellentesque erat augue, imperdiet et est at, mattis maximus dui. Proin mollis lorem a iaculis scelerisque. Vivamus at euismod orci, eget sodales arcu. Phasellus quis justo id eros tincidunt porttitor a eget magna. Curabitur blandit euismod turpis, nec ultrices quam suscipit at. Etiam pulvinar congue elit vel pharetra. Sed libero enim, facilisis et auctor eget, lobortis nec enim. Etiam finibus elit sit amet felis consequat aliquam. Etiam eget iaculis tellus. Integer aliquet sodales nunc, placerat tempor elit. Nam aliquet diam ut mi euismod viverra. Proin in mattis sapien. Mauris in magna vel augue dictum tincidunt. In viverra quis sem nec pharetra. Phasellus felis leo, lacinia eu tincidunt id, mollis id libero.

                In imperdiet augue sit amet urna posuere luctus. Ut viverra quam ipsum, sed tristique justo malesuada in.<br />
                Integer ipsum urna, pulvinar non pulvinar quis, dignissim a diam. Nullam luctus odio sed viverra dictum. Curabitur sagittis purus a dapibus bibendum. Cras vulputate nibh mi, sed tincidunt magna finibus a. Cras luctus fringilla mauris a sagittis. Pellentesque laoreet iaculis blandit. Suspendisse ut ipsum in sem commodo mollis sed ut neque. Suspendisse at augue ac mi hendrerit venenatis. Nullam eget dapibus nisi.

                Integer a purus a felis laoreet ullamcorper. Fusce efficitur nisl nunc, non molestie dolor convallis non. Ut molestie lacus nec ipsum interdum, non cursus magna placerat. Fusce vehicula tellus mauris, nec interdum leo pellentesque at. Proin viverra mauris sed feugiat venenatis. Nullam lacinia massa non lacus dictum volutpat. Phasellus pellentesque placerat urna, ut gravida neque sollicitudin quis.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>

  );

}

export default Education;


