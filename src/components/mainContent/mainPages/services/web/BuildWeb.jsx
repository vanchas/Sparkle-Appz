import React from "react";
import s from "./web.module.scss";
import { NavLink } from "react-router-dom";

function BuildWeb() {
  return (
    <div className={`text-center ${s.build_wrap}`}>
      <h2>BUILD WEBSITE FOR ANY BUSINESS</h2>
      <p className={`text-muted`}>
        We proudly flaunt a{" "}
        <a href="https://www.sparkleappz.com/"> professional</a> team of skilled
        web developers who portray expertise in developing high-end web
        applications. We have the expertise to develop the web projects for
        various <a href="https://www.sparkleappz.com/"> industries</a> with
        different business{" "}
        <a href="https://www.sparkleappz.com/"> requirements</a>. We handle
        everything from a small business site to an enterprise level{" "}
        <a href="https://www.sparkleappz.com/"> application</a>. We develop
        websites that offer good usability that provides seamless{" "}
        <a href="https://www.sparkleappz.com/"> experience</a> to the visitors
        and improves your chances of success.
      </p>
      <div className={s.cards_block}>
        <div className={s.card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/Screenshot-2019-06-12-at-8.01.03-PM.png?w=2600&ssl=1"
            alt=""
          />
          <h5 className={`h2`}>North Rex Apps</h5>
        </div>
        <div className={s.card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/Screenshot-2019-06-12-at-8.01.16-PM.png?w=2600&ssl=1"
            alt=""
          />
          <h5 className={`h2`}>Titan VPN</h5>
        </div>
      </div>
      <NavLink to="/portfolio" className={s.navlink}>
        SHOW MORE PROJECTS
      </NavLink>
    </div>
  );
}

export default BuildWeb;
