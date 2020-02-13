import React from "react";
import s from "./android.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function AndroidHeader() {
  return (
    <div className={s.android_header_wrap}>
      <div className={s.header_text_block}>
        <h1 className={`h2`}>
          ANDROID APP
          <br />
          <span className={`text-muted h4`}>DEVELOPMENT</span>
        </h1>
        <p className={`${s.header_text} text-muted`}>
          <a href="https://www.sparkleappz.com/"> Sparkle Appz</a> started off
          with android development and we feel pride to be considered as a
          specialist in Android App Development. Even though{" "}
          <a href="https://www.sparkleappz.com/"> Android app</a> development is
          a difficult task for any software{" "}
          <a href="https://www.sparkleappz.com/"> professional</a> due to its
          availability of variant screen sizes and resolutions. But our
          experienced developers have a deep understanding of the user
          requirement and the{" "}
          <a href="https://www.sparkleappz.com/">performance</a> of Android
          applications across different devices. We{" "}
          <b> use professional practices</b> and <b> proven methodologies</b>{" "}
          for creating bug-free android applications.
        </p>
        <nav>
          <NavLink className={s.link_btn} to="/portfolio">
            Our Portfolio{" "}
            <Icon className={s.link_btn_arrow}>keyboard_arrow_right</Icon>
          </NavLink>
        </nav>
      </div>
      <div className={s.header_image_block}>
        <img
          src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/img_slider-1.png?fit=779%2C750&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default AndroidHeader;
