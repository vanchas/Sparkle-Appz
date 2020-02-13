import React from "react";
import s from "./web.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function WebHeader() {
  return (
    <div className={s.web_header_wrap}>
      <div className={s.header_text_block}>
        <h1 className={`h2`}>
          WEBSITE
          <br />
          <span className={`text-muted h4`}>DEVELOPMENT</span>
        </h1>
        <p className={`${s.header_text} text-muted`}>
          Having a website and online presence allows you to market your
          business online. Most of your <b> customers</b> assume that you have a
          website, since the vast majority of big businesses do.{" "}
          <a href="https://www.sparkleappz.com/"> SparkleAppz</a> makes sure to
          provide the best range of business{" "}
          <a href="https://www.sparkleappz.com/"> website</a> development
          services using our age-old and versatile website development
          experience.
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
          src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/img_slider-2.png?fit=843%2C564&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default WebHeader;
