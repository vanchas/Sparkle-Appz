import React from "react";
import s from "./services.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function ServicesHeader() {
  return (
    <div className={`${s.services_header_wrap}`}>
      <div className={`${s.header_text_block}`}>
        <h1>Services​</h1>
        <div className={`${s.header_text} text-muted`}>
          <p>
            We believe in building{" "}
            <b> fully fledged, stable, and scalable product</b> applications and
            designs. We professionally cater all the major platforms and
            development tools including <b> Android, IOS, Unity3D, UI/UX designs,
            Web development services</b>. We also offer SEO which is essential for
            any digital marketing strategy.
          </p>
        </div>
        <nav>
          <NavLink className={s.link_btn} to="/contact">
            Launch Project
            <Icon className={s.link_btn_arrow}>arrow_right_alt</Icon>
          </NavLink>
        </nav>
      </div>
      <div className={`${s.header_image_block}`}>
        <img
          src="https://mlallqt2tcwu.i.optimole.com/KY9WIg-H4jibQec/w:768/h:auto/q:auto/https://www.sparkleappz.com/wp-content/uploads/2019/04/img1-1.png"
          alt="..."
        />
      </div>
    </div>
  );
}

export default ServicesHeader;
