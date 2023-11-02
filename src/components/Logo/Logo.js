import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from './brain.png'

const Logo = () => {
  return (
    <div >
      <Tilt className="Tilt ma3 mt0">
        <div style={{ height: "110px",width: '110px', background:"linear-gradient(89deg, #FF5EDF 10%,#04C8DE 100%)"}}>
         <img style={{paddingTop: '5px'}}alt="logo" src={brain}/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
