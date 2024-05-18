import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import robot12 from "../../../Images/Robot/11.png";
import robot11 from "../../../Images/Robot/robot-grey.png";
import ImageDisplay from "../ImageDisplay/ImageDisplay";
import "../Project.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ButtonProject() {
  const [selectedButton, setSelectedButton] = useState("button1");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 788);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 788);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const buttonImages = {
    button1: [robot11, robot11, robot12, robot11, robot12, robot11],
    button2: [robot11, robot11],
    button3: [robot11, robot11, robot11],
    button4: [],
    button5: [],
    button6: [],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnHover: true,
    prevArrow: null,
    nextArrow: null,
  };

  return (
    <div className="container-all-buttton444">
      {isMobile ? (
        <Slider {...settings} prevArrow={null} nextArrow={null}>
          {Object.keys(buttonImages).map((buttonId, index) => (
            <div key={index} className=".container-of-btt-66">
              <button
                onClick={() => handleButtonClick(buttonId)}
                style={{
                  backgroundColor:
                    selectedButton === buttonId ? "#42A3D0" : "inherit",
                  color: selectedButton === buttonId ? "white" : "#1b2428",
                  padding:
                    selectedButton === buttonId ? "10px 20px" : "inherit",
                  borderRadius: selectedButton === buttonId ? "5px" : "inherit",
                  border: selectedButton === buttonId ? "none" : "inherit",
                  fontSize: isMobile ? "20px" : "inherit",
                  width: isMobile ? "-webkit-fill-available" : "inherit",
                }}
                className={isMobile ? "button-mobile" : "button"}
              >
                {buttonId === "button1" && "All"}
                {buttonId === "button2" && "Website Design"}
                {buttonId === "button3" && "Development"}
                {buttonId === "button4" && "App Design"}
                {buttonId === "button5" && "Branding Development"}
              </button>
            </div>
          ))}
        </Slider>
      ) : (
        <div
          className={
            isMobile ? "the-project-category-mobile" : "the-project-category"
          }
        >
          {Object.keys(buttonImages).map((buttonId, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(buttonId)}
              style={{
                backgroundColor:
                  selectedButton === buttonId ? "#42A3D0" : "inherit",
                color:
                  selectedButton === buttonId ? "white" : "rgb(127 127 127)",
                padding: selectedButton === buttonId ? "10px 20px" : "inherit",
                borderRadius: selectedButton === buttonId ? "5px" : "inherit",
                border: selectedButton === buttonId ? "none" : "inherit",
                marginBottom: isMobile ? "10px" : "0",
                fontSize: isMobile ? "20px" : "22px",
              }}
              className={isMobile ? "button-mobile" : "button"}
            >
              {buttonId === "button1" && "All"}
              {buttonId === "button2" && "Website Design"}
              {buttonId === "button3" && "Development"}
              {buttonId === "button4" && "App Design"}
              {buttonId === "button5" && "Branding Development"}
            </button>
          ))}
        </div>
      )}
      {selectedButton && buttonImages[selectedButton].length > 0 && (
        <ImageDisplay images={buttonImages[selectedButton]} />
      )}
    </div>
  );
}
