import React from "react";
import s from "./game.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function GameHeader() {
  return (
    <div className={s.game_header_wrap}>
      <div className={s.header_text_block}>
        <h1 className={`h2`}>
          UNITY 3D GAME
          <br />
          <span className={`text-muted h4`}>DEVELOPMENT</span>
        </h1>
        <p className={`${s.header_text} text-muted`}>
          Apart from <NavLink to="/AndroidDev"> mobile app development</NavLink>{" "}
          on iOS and Android platforms, our company is also an expertise in
          mobile gaming <NavLink to="/AndroidDev"> development</NavLink> using{" "}
          <NavLink to="/3DGameDev"> Unity 3D</NavLink>. We have successfully
          designed and <b> developed</b> multiple successful 3D graphics,
          imaging, and <a href="https://www.sparkleappz.com/"> visualization</a>{" "}
          application for our customers.Our game developers ensure that they
          give their best to deliver top notch <b> 2D</b> and <b> 3D games</b>.
          We make sure that we deliver thrilling games that have awesome
          graphics and unbeatable{" "}
          <a href="https://www.sparkleappz.com/"> performance</a> level.
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

export default GameHeader;
