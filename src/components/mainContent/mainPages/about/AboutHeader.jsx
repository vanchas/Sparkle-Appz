import React from "react";
import s from "./about.module.scss";
import {NavLink} from 'react-router-dom';
import Icon from "@material-ui/core/Icon";

function AboutHeader() {
  return (
    <div className={s.about_header_wrap}>
      <div className={s.header_text_block}>
        <h1>
          ABOUT <br/>
          <span className={`text-muted h3`}>SPARKLE APPZ</span>
        </h1>
        <p className={`${s.header_text} text-muted`}>
          <a href="https://www.sparkleappz.com/"> Sparkle Appz</a> is an IT
          company in India, offering quality software related solutions
          including <a href="https://www.sparkleappz.com/android-app-development/">Mobile Application Development</a> ,<a href="https://www.sparkleappz.com/digital-marketing-services/"> SEO</a>,<a href="https://www.sparkleappz.com/unity-3d-game-development/"> Unity 3D</a>, and <a href="https://www.sparkleappz.com/website-development-services/"> Web
          Design and Development</a>. We believe in <b>“Complete Customer Satisfaction”</b>
          as our definition of quality.
          <br/><br/>
           We focus to deliver our expertise to our
          clients within time and make sure that our solutions be aesthetic,
          technically functional, user-friendly and responsive.
        </p>
        <nav>
        <NavLink className={s.link_btn} to="/portfolio">
          Our Portfolio <Icon className={s.link_btn_arrow}>arrow_right_alt</Icon>
        </NavLink>
        </nav>
      </div>
      <div className={s.header_image_block}>
        <img src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/slider_image.png?fit=745%2C722&ssl=1" alt=""/>
      </div>
    </div>
  );
}

export default AboutHeader;
