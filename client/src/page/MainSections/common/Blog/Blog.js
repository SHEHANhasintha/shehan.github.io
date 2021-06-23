import React, { Component, useContext, useEffect } from 'react';

import './Blog.scss'
import klist from './images/klist.gif';
import schema from './images/3-schema.gif';
import ok from './images/ok.jpg';

function Blog(props) {

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
          <div className="inner box">
            <h1 className="card__header">Blog</h1>
            <p className="card__text discription_card">I have a my own<strong> Programming Blog </strong>and It's where one of the sources that I share my programming knoledge. There I have articles on various different topics regarding to IT,Programming and specially in data structures and algorithms. That helps me to keep remember what i did in the past and also I hope my blog helps for those who are also studing and looking for more information about technology.<a className="link-button" href="https://medium.com/@shehanPW" target="_blank">Learn More</a></p>

            <div className="inner stylenonback style2">


              <div className="grid">
                <div className="grid__item">
                  <div className="card"><img className="card__img" src={klist} alt="Snowy Mountains" />
                    <div className="card__content">
                      <h1 className="card__header">Remove K From List</h1>
                      <p className="card__text"><strong>Remove K From List</strong> — codesignal Algorithms problem regarding <strong>Linked Lists</strong></p>
                      <button className="card__btn" type="submit" href="https://medium.com/@shehanPW/remove-k-from-list-codesignal-algorithms-problem-regarding-linked-lists-897a3f39e48f" target="_blank">Explore <span>&rarr;</span></button>
                    </div>
                  </div>
                </div>
                <div className="grid__item">
                  <div className="card"><img className="card__img" src={schema} alt="Desert" />
                    <div className="card__content">
                      <h1 className="card__header">Logical data independence and physical data independence</h1>
                      <p className="card__text">Logical data independence is when external schema <strong>does not get effected</strong> when changing the conceptual schema. There is no relationship between external database schema and conceptual database schema.</p>
                      <button type="submit" href="https://medium.com/@shehanPW/logical-data-independence-and-physical-data-independence-716bee93d225" target='_blank' className="card__btn">Explore <span>&rarr;</span></button>
                    </div>
                  </div>
                </div>
                <div className="grid__item">
                  <div className="card"><img className="card__img" src={ok} alt="Canyons" />
                    <div className="card__content">
                      <h1 className="card__header">Three Schema Architecture</h1>
                      <p className="card__text"><strong>Three Schema Architecture</strong>.Database schema in a database is described as the framework of tables or as where the skeleton of how each table speeded. Databases schema is essentially ...</p>
                      <button className="card__btn">Explore <span>&rarr;</span></button>
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

export default Blog;


