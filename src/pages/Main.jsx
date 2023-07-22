import React from "react";
import Navbar from "../components/navbar/navbar";
import Image from "../components/imageCenter/image";
import SubtitleBody from "../components/subtitleBody/subtitlebody";
import LivelyCurtain from "../components/livelyCurtain/livelyCurtain";
import Work from "../components/Work/work";
import Footer from "../components/footer/footer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Image />
      <SubtitleBody />
      <LivelyCurtain />
      <Work />
    </div>
  );
};

export default Main;
