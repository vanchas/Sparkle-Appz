import React from "react";
import s from "./home.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import CommentSlider from "./CommentSlider";
import TechnologiesSlider from "./TechnologiesSlider";
import ClientSlider from "./ClientSlider";
import HomeHeader from "./HomeHeader";
import WeLoveWeHelp from "./WeLoveWeHelp";
import OurServices from "./OurServices";
import Portfolio from "./Portfolio";
import BlueSlides from "./BlueSlides";
import ProcessWeFollow from "./ProcessWeFollow";
import Ranking from "./Ranking";
import OurKeyFeatures from "./OurKeyFeatures";
import Industries from "./Industries";
import OurValues from "./OurValues";
import Team from "./Team";
import ReachUs from "./ReachUs";

function Home() {
  return (
    <div className={`${s.home_wrapper}`}>
      <HomeHeader />
      <WeLoveWeHelp />
      <OurServices />
      <ClientSlider />
      <Portfolio />
      <BlueSlides />
      <ProcessWeFollow />
      <Ranking />
      <CommentSlider />
      <OurKeyFeatures />
      <TechnologiesSlider />
      <Industries />
      <OurValues />
      <Team />
      {/* <ReachUs /> */}
    </div>
  );
}

export default Home;
