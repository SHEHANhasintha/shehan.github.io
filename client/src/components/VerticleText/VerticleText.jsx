import React, { useEffect,useRef } from 'react';
import "./VerticleText.scss";
import { lineLength } from "./VerticleTexthelper";
import { verticleTextwidth,verticleTextTop } from "../_global.scss";

const VerticleText = (props) => {
  const text = useRef(null),
        line = useRef(null);

  useEffect(() => {

  },[text,line]);

  return (
    <div className="VerticleText">
      <p className="text" ref={text} style={{top: parseInt(verticleTextTop) + lineLength(props.text)}}>{props.text}</p>
      <div className="line" ref={line} style={{width: parseInt(verticleTextwidth) - lineLength(props.text)}}></div>
    </div>
  );
};

export default VerticleText;
