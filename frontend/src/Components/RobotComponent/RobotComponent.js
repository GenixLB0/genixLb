import React, { useEffect, useRef, useState } from "react";
import robot from "../../Images/Robot/robot-grey.png";
import "./RobotComponent.css";
import Secondary from "../ButtonComponent/Secondary";
import { useNavigate } from "react-router-dom";

export default function RobotComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact-us");
  };

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }
  }, [sectionRef]);

  return (
    <div className="robot-bg-component" ref={sectionRef}>
      <div className={`robot-33 ${isVisible ? "animate" : ""}`}>
        <img className="robot-image" src={robot} alt="robot-33"></img>
      </div>
      <div className="info-robot">
        <h1>Ready To Get Started Of Strategy Business.</h1>
        <p>
          Software being able to crank out videos consistently, localize them
          for different regions, and still save resources, time, has been a game
          changer.
        </p>
        <Secondary buttonTitle="Contact Us" contact={handleContact} />
      </div>
    </div>
  );
}
