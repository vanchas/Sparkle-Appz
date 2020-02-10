import React from "react";
import s from "./home.module.scss";

export default class HomeHeader extends React.Component {
  render() {
    return (
      <header className={`container-fluid row ${s.home_header}`}>
        <div className={`col col-lg-6 align-middle col-sm-12 text-center`}>
          <h2 className={`h1`}>
            WE CONCEPTUALIZE, <b>DESIGN AND DEVELOP APPS</b> THAT PEOPLE LOVE
          </h2>
        </div>
        <div className={`col col-lg-6 col-sm-12`}>
          <img
            className={`${s.home_header_banner}`}
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/banner_img.png?fit=661%2C674&ssl=1"
            alt="banner"
          />
        </div>
      </header>
    );
  }
}
