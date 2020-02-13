import React from "react";
import s from "./uiux.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function UiUxHeader() {
  return (
    <div className={s.ui_ux_header_wrap}>
      <div className={s.header_text_block}>
        <h1 className={`h2`}>UI/UX Design</h1>
        <p className={`${s.header_text} text-muted`}>
          We <a href="https://www.sparkleappz.com/"> design</a> and launch
          digital products that deliver great user experiences We bring together{" "}
          <a href="https://www.sparkleappz.com/"> professional</a> user{" "}
          <a href="https://www.sparkleappz.com/"> experience</a> design and
          top-notch technology to deliver compelling experiences that solve
          business challenges and make people happy. We do extensive{" "}
          <b> research</b> to build up your user <b> requirements</b>, in order
          to map your product’s full smooth <b> user experience</b>.
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
          src="https://mlallqt2tcwu.i.optimole.com/DoAYIw-AhPNTgQq/w:auto/h:auto/q:auto/https://i1.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-0WvX8FnM/w:787/h:685/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2020/02/img_slider.png?w=1300&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default UiUxHeader;
