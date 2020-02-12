import React from "react";
import s from "./portfolio.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function PortfolioHeader() {
  return (
    <div className={`${s.portfolio_header_wrap}`}>
      <div className={`${s.portfolio_header_text_block}`}>
        <h1>
        PORTFOLIO
        </h1>
        <div className={`${s.portfolio_header_text} text-muted`}>
        <p>
          <a href="https://www.sparkleappz.com/"> Sparkle Appz</a> celebrates a wide range of successful portfolio of Mobile, Web and Unity 3D game applications for business and consumers alike.
        </p>
        <br />
        <p>
        <b> ASO and SEO</b> have also been important to <a href="https://www.sparkleappz.com/"> increasing</a> Apps and Website’s search engine rankings. We have everything you need to bring ideas to life and transform how you create <a href="https://www.sparkleappz.com/"> digital products</a>.
        </p>
        </div>
        <nav>
          <NavLink className={s.portfolio_link_btn} to="/contact">
            Contact Us Today{" "}
            <Icon className={s.portfolio_link_btn_arrow}>arrow_right_alt</Icon>
          </NavLink>
        </nav>
      </div>
      <div className={`${s.portfolio_header_image_block}`}>
        <img
          src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/images_slider.png?fit=819%2C689&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default PortfolioHeader;
