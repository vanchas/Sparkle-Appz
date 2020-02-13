import React from "react";
import s from "./marketing.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function MarketingHeader() {
  return (
    <div className={s.marketing_header_wrap}>
      <div className={s.header_text_block}>
        <h1 className={`h2`}>
          Digital
          <br />
          <span className={`text-muted h4`}>MARKETING</span>
        </h1>
        <p className={`${s.header_text} text-muted`}>
          <a href="https://www.sparkleappz.com/"> SparkleAppz</a>, Is A
          Trustworthy Digital{" "}
          <a href="https://www.sparkleappz.com/"> Marketing</a> Service
          Provider. Our team develops effective content{" "}
          <a href="https://www.sparkleappz.com/"> strategies</a> for{" "}
          <a href="https://www.sparkleappz.com/"> companies</a> with a vision of
          the future. We have a proven track record in increasing rankings in
          search engines.
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
          src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-_fwTUU9h/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-Zd8_kz48/w:811/h:653/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2020/01/img_slider-4.png?w=1300&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default MarketingHeader;
