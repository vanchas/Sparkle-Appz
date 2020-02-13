import React from "react";
import s from "./uiux.module.scss";
import { NavLink } from "react-router-dom";

function UiUxArticle() {
  return (
    <div className={`row ${s.article_header_wrap}`}>
      <h2 className={`h2 col-lg-12 col-sm-12`}>
        Design Graphics
        <br />
        for your App/Website
      </h2>
      <div className={` col-lg-6 col-sm-12 ${s.header_image_block}`}>
        <img
          src="https://mlallqt2tcwu.i.optimole.com/DoAYIw-TBGCo_lA/w:auto/h:auto/q:auto/https://i1.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-kmyWALFC/w:777/h:603/q:auto/https://www.sparkleappz.com/wp-content/uploads/2020/01/graphic_img.png?ssl=1"
          alt=""
        />
      </div>
      <div className={`col-lg-6 col-sm-12 ${s.header_text_block}`}>
        <p className={`${s.header_text} text-muted`}>
          <b>
            {" "}
            Graphic design plays a fundamental part of any software application.
          </b>{" "}
          It not only is the creative part of your application but is critical
          to the overall branding strategy of a product or a business. An ideal
          graphic design can give a huge{" "}
          <a href="https://www.sparkleappz.com/"> boost</a> to your application
          by increasing its visual appeal,{" "}
          <a href="https://www.sparkleappz.com/"> professionalism</a>, brand
          value and usability.{" "}
          <b>
            At <a href="https://www.sparkleappz.com/"> SparkleAppz</a>
          </b>
          , we make sure that your customer gets encouraged to stay on your{" "}
          <a href="https://www.sparkleappz.com/"> interface</a> by using graphic
          design to keep navigation simple, making{" "}
          <a href="https://www.sparkleappz.com/"> graphics</a> content
          appropriate, and choosing eye-pleasing colors and text styles.
        </p>
      </div>
      <div className={`text-center col-lg-12 col-sm-12`}>
        <nav>
          <NavLink className={s.link_btn} to="/portfolio">
            Show more Projects
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default UiUxArticle;
