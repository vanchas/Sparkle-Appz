import React from "react";
import s from "./marketing.module.scss";
import { NavLink } from "react-router-dom";

function BoostYourApp() {
  return (
    <div className={`row ${s.boost_header_wrap}`}>
      <h2 className={`h2 text-center col-lg-12 col-sm-12`}>Boost your app/website rankings</h2>
      <div className={` col-lg-6 col-sm-12 ${s.header_image_block}`}>
        <img
          src="https://mlallqt2tcwu.i.optimole.com/nKcQzA-lcbyPSAq/w:auto/h:auto/q:auto/https://i0.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-OuoCyuEf/w:825/h:600/q:auto/https://www.sparkleappz.com/wp-content/uploads/2020/01/digital_marketing.png?ssl=1"
          alt=""
        />
      </div>
      <div className={`col-lg-6 col-sm-12 ${s.header_text_block}`}>
        <p className={`${s.header_text} text-muted`}>
          Our team of <a href="https://www.sparkleappz.com/"> specialists</a>{" "}
          constantly offer outstanding results that combine creative ideas with
          our <a href="https://www.sparkleappz.com/"> extensive experience</a>.
          We can help you build a sustainable and meaningful{" "}
          <b> relationship</b> with your customers by involving them with your
          brand through social networks. Our clients always get the winning
          digital solutions with our{" "}
          <a href="https://www.sparkleappz.com/"> marketing</a> strategies
          because we believe that going virtual is the way to success for any
          business.
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

export default BoostYourApp;
