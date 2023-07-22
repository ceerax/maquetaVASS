import React, { useState } from "react";
import defaultImage from "../../assets/images/image0.webp";
import hoverImage1 from "../../assets/images/image1.webp";
import hoverImage2 from "../../assets/images/image2.webp";
import hoverImage3 from "../../assets/images/image3.webp";

import "./livelyCurtain.scss";

const LivelyCurtain = () => {
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);
  const [hoveredIcon1, setHoveredIcon1] = useState(false);
  const [hoveredIcon2, setHoveredIcon2] = useState(false);
  const [hoveredIcon3, setHoveredIcon3] = useState(false);

  const handleHover1 = () => {
    setBackgroundImage(hoverImage1);
    setHoveredIcon1(true);
  };

  const handleHover2 = () => {
    setBackgroundImage(hoverImage2);
    setHoveredIcon2(true);
  };

  const handleHover3 = () => {
    setBackgroundImage(hoverImage3);
    setHoveredIcon3(true);
  };

  const handleHoverDefault = () => {
    setBackgroundImage(defaultImage);
    setHoveredIcon1(false);
    setHoveredIcon2(false);
    setHoveredIcon3(false);
  };

  return (
    <div className="cortina-container">
      <div className="row row m-0 h-100">
        <div
          className="col-12 col-md-3 section bg-dark"
          onMouseEnter={handleHover1}
          onMouseLeave={handleHoverDefault}
        >
          <div className="content  text-center d-flex justify-content-between">
            <h2>Brand</h2>
            {hoveredIcon1 ? (
              <i class="bi bi-arrow-up-right-circle pe-2"></i>
            ) : (
              <i class="bi bi-arrow-right-circle pe-2"></i>
            )}
          </div>
        </div>
        <div
          className="col-12 col-md-3 section bg-dark"
          onMouseEnter={handleHover2}
          onMouseLeave={handleHoverDefault}
        >
          <div className="content text-center d-flex justify-content-between">
            <h2>Productos</h2>
            {hoveredIcon2 ? (
              <i class="bi bi-arrow-up-right-circle pe-2"></i>
            ) : (
              <i class="bi bi-arrow-right-circle pe-2"></i>
            )}
          </div>
        </div>
        <div
          className="col-12 col-md-3 section bg-dark"
          onMouseEnter={handleHover3}
          onMouseLeave={handleHoverDefault}
        >
          <div className="content text-center d-flex justify-content-between">
            <h2>Motion</h2>
            {hoveredIcon3 ? (
              <i class="bi bi-arrow-up-right-circle pe-2"></i>
            ) : (
              <i class="bi bi-arrow-right-circle pe-2"></i>
            )}
          </div>
        </div>
        <div
          className="col-12 col-md-3 section bg-dark"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="content text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default LivelyCurtain;
