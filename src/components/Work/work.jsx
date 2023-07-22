import React from "react";
import "./work.scss";
import Img1 from "../../assets/images/image0.webp";

const work = () => {
  const renderDivs = () => {
    const divArray = [];
    for (let i = 0; i < 36; i++) {
      divArray.push(
        <div key={i}>
          <br />
        </div>
      );
    }
    return divArray;
  };

  return (
    <div className="container_work">
      {/* {renderDivs()}
      <div>
        <img src={Img1} alt="" />
      </div>
      {renderDivs()}
      <div className="d-flex justify-content-end">
        <img src={Img1} alt="" />
      </div> */}
    </div>
  );
};

export default work;
