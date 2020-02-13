import React from "react";
import s from "./ios.module.scss";
import { NavLink } from "react-router-dom";

function BuildApp() {
  return (
    <div className={`text-center ${s.build_wrap}`}>
      <h2>BUILD AN APP FOR IOS DEVICES</h2>
      <p className={`text-muted`}>
        Our talented{" "}
        <a href="https://www.sparkleappz.com/"> iOS app developers</a> provide
        app development services by building{" "}
        <a href="https://www.sparkleappz.com/"> applications</a> that would work
        equally well across all{" "}
        <a href="https://www.sparkleappz.com/"> Apple devices</a>. Our team
        believe in helping you in every step from solution{" "}
        <a href="https://www.sparkleappz.com/">design</a> to delivery of the
        product. We also offer ongoing maintenance to keeps solutions healthy to
        deal with changing <a href="https://www.sparkleappz.com/"> technical</a>{" "}
        and <a href="https://www.sparkleappz.com/"> business</a>
        environment.
      </p>
      <div className={s.cards_block}>
        <div className={s.card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Life-Listr_inner.jpg?w=1000&ssl=1"
            alt=""
          />
          <h5 className={`h3`}>Life Lister</h5>
          <p className={`text-muted`}>
            Plan your holidays with life listr and never miss anything.
          </p>
        </div>
        <div className={s.card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/GoTeach_Inner.jpg?w=1000&ssl=1"
            alt=""
          />
          <h5 className={`h3`}>Go Teach</h5>
          <p className={`text-muted`}>
            Teacher plan book, lesson plans and more.
          </p>
        </div>
      </div>
      <NavLink to="/portfolio" className={s.navlink}>
        SHOW MORE PROJECTS
      </NavLink>
    </div>
  );
}

export default BuildApp;
