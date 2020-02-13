import React from "react";
import s from "./ios.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function IOSHeader() {
  return (
    <div className={s.ios_header_wrap}>
      <div className={s.header_text_block}>
        <h1 className={`h2`}>
          IOS APP
          <br />
          <span className={`text-muted h4`}>DEVELOPMENT</span>
        </h1>
        <p className={`${s.header_text} text-muted`}>
          <a href="https://www.sparkleappz.com/"> Sparkle Appz</a> have
          experience of more than 10 years in making world’s leading brands go
          mobile by developing inspiring apps in Apple platform. Add boost to
          your business needs by using our expertise in{" "}
          <a href="https://www.sparkleappz.com/"> iOS app development</a> to
          build beautiful, <a href="https://www.sparkleappz.com/"> engaging</a>{" "}
          and <a href="https://www.sparkleappz.com/"> seamless</a> app.
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
          src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/img_slider.png?fit=831%2C748&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default IOSHeader;
