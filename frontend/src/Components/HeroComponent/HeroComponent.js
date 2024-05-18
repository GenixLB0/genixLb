import React from "react";
import MainButton from "../ButtonComponent/MainButton";
import "./HeroComponent.css";
import Hero from "../../Images/Hero3.png";
import SubTitle from "../SubTitle/SubTitle";
import { useNavigate } from "react-router-dom";

export default function HeroComponent() {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact-us");
  };
  return (
    <div className="container-hero">
      {/* Animated Text */}
      <div className="animated-text">
        <svg>
          <defs>
            <linearGradient
              id="textGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="30%" stop-color="#6F53E1" />
              <stop offset="50%" stop-color="#42A3D0" />
              <stop offset="100%" stop-color="#32CBC8" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dy=".35em"
            text-anchor="middle"
            fill="url(#textGradient)"
          >
            Genixs
          </text>
        </svg>
      </div>
      {/* Animated Text */}
      <video
        className="video"
        muted
        autoPlay
        loop
        src="assets/hero-video.mp4"
      ></video>
      <div className="video-overlay"></div>
      <div className="content-hero">
        <SubTitle subTitle="Software & IT Solutions !" />
        <h2>
          We Are Best Software It Solution{" "}
          <span className="businss_span">Business</span>
        </h2>
        <p>
          We are tailored it design, management & support services business
          softwaer elit, sed do eiusmod tempor.
        </p>
        <MainButton buttonTitle="Contact Now" contact={handleContact} />
      </div>
      <div className="content-image">
        {/* <img src={Hero} alt="hero-image"></img> */}
        <div class="wrapper">
          {/* Images Slider */}
          <div className="images-holder">
            <div className="left">
              <div className="images">
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
              </div>
            </div>
            <div className="right">
              <div className="images">
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
                <img src="assets/our-project.png" alt="" />
              </div>
            </div>
          </div>
          {/* Images Slider */}
        </div>
      </div>
    </div>
  );
}
