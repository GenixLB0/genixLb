import React, { useState, useEffect } from "react";
import "../Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ImageDisplay({ images }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const imagesPerPage = 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate index range for current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = isMobile
    ? images.slice(indexOfFirstImage, indexOfLastImage)
    : images;

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle next page
  const nextPage = () => {
    if (indexOfLastImage < images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="continer-of-image-project">
      {currentImages.map((image, index) => (
        <div className="project-item" key={index}>
          <img src={image.img} alt={`Image ${index + 1}`} />
          {/* <div className="project-name">{image.name}</div> */}
          <div className="project-name">
            <a className="project-link" href={image.link} target="_blank">
              <button>
                V I E W
                <div id="clip">
                  <div id="leftTop" class="corner"></div>
                  <div id="rightBottom" class="corner"></div>
                  <div id="rightTop" class="corner"></div>
                  <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
              </button>
            </a>
          </div>
        </div>
      ))}
      {isMobile && images.length > imagesPerPage && (
        <div className="pagination">
          <button onClick={previousPage} className="nextpreviousButton">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className={`pagination-item ${currentPage === 1 ? "active" : ""}`}
            style={{ backgroundColor: currentPage === 1 ? "#42A3D0" : "" }}
            onClick={() => paginate(1)}
          >
            1
          </button>
          {Array.from({
            length: Math.ceil(images.length / imagesPerPage) - 1,
          }).map((_, index) => (
            <button
              key={index + 2}
              className={`pagination-item ${
                currentPage === index + 2 ? "active" : ""
              }`}
              style={{
                backgroundColor: currentPage === index + 2 ? "#42A3D0" : "",
              }}
              onClick={() => paginate(index + 2)}
            >
              {index + 2}
            </button>
          ))}
          <button onClick={nextPage} className="nextpreviousButton">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
}
