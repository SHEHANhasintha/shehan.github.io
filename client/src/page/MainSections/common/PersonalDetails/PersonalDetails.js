import React, { Component, useContext, useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import {
  SocialMediaLink,
  ContactCard
} from "../../../../components";

import "./PersonalDetails.scss";
import "./scroll.js";

function PersonalDetails(props) {
  const clicked = (e) => {
    e.preventDefault();
  };

  const [value, setValue] = useState('fffff');

  const rrr =  ["full stack","dele","ccc"]
  let sss = "sss"

  useEffect(function () {
    // for(let i=0;i<3;i++){
    //   sss = rrr[i];
    // }
    // console.log(sss);
    cable();
  }, []);

  let counter = 0;

  const cable = () => {
    setInterval(function(){ 
      if (counter >= 3){
        counter = 0;
      }
      setValue(rrr[counter]);
      counter++;
    }, 2000);

    
  }

  const socialMediaLinks = [
    {
      iconName: "Github",
      link: "https://github.com/SHEHANhasintha",
      fontIcon: "fab fa-github",
    },
    {
      iconName: "Medium",
      link: "https://medium.com/@shehanPW",
      fontIcon: "fab fa-medium",
    },
    {
      iconName: "Facebook",
      link: "https://www.facebook.com/shehan.hasintha.9/",
      fontIcon: "fab fa-facebook-f",
    },
    {
      iconName: "instagram",
      link: "https://www.facebook.com/shehan.hasintha.9/",
      fontIcon: "fab fa-instagram",
    },
  ];

  let discription = "The process of writing a job description requires having a clear understanding of the job's duties and responsibilities. The job posting should also include a concise picture of the";

  return (
    <>
      <section className="Personal-Details">
        <div className="container1">
          <ContactCard 
            text={value}
            location={"images/avatar.jpg"}
            textStyle1={"Hello, I am,"}
            textStyle2={"Shehan Hasintha"}
            textStyle3={"PW"}
            discription={discription}
          />
        </div>

        <div className="container3">
          <SocialMediaLink socialMediaLinks={socialMediaLinks} />
        </div>
      </section>
    </>
  );
}

export default PersonalDetails;
