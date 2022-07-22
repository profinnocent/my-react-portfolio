import React from "react";
import "./Hero.css";
import Button from "./Button";
import vector1 from "../img/Vector1.png";
import vector2 from "../img/Vector2.png";
import mypix from "../img/ppix8bg.png";
import glasses from "../img/glasses.png";
import glassemoji from "../img/glassesimoji.png";
import heart from "../img/heartemoji.png";
import purpleblur from '../img/purpleblur.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="title">
        <div className="writeup">
        <h3>Hi there, I am</h3>
        <h1>Innocent Unachukwu</h1>
        <p>
          I am a fullstack web developer with a passion for building awesome
          <br /> apps that solve real life problems.
        </p>
        <Button text={"Hire Me!"} bgcolor={"orangebtn"} />
        </div>
        
      </div>

      <div className="pix">
        <img src={vector1} alt="vector1" />

        <img src={vector2} alt="vector2" />

        <img src={mypix} alt="dp" />

        <img src={glasses} alt="" />
        <img src={glassemoji} alt="" />
        <img src={heart} alt="" />
        <img src={purpleblur} alt="" />
        <img src={purpleblur} alt="" />
        {/* <img src={purpleblur} alt="" /> */}

      </div>
    </div>
  );
};

export default Hero;
