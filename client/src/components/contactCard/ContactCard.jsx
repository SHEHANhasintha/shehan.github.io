import React from "react";
import "./ContactCard.scss";
import { 
  VerticleText,
  ProfilePicture,
  Textstyle1,
  Textstyle2,
  TextStyle3,
  Button1,
  Discription,
  Tag
} from "..";

const ContactCard = (props) => {
  return (
    <div className="ContactCard">
      <div className="jobTitle"><VerticleText {...props}/></div>
      <div className="profilePicture"><ProfilePicture {...props}/></div>
      <div className="salutataion"><Textstyle1 {...props}/></div>
      <div className="name"><Textstyle2 {...props} /></div>
      <div className="initials"><TextStyle3 {...props} /></div>
      <div className="resume"><Button1 {...props}/></div>
      <div className="discription"><Discription {...props}/></div>
      <div className="tags"><Tag {...props}/></div>
    </div>
  );
};

export default ContactCard;
