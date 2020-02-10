import React from "react";
import s from "./home.module.scss";

export default class Team extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.team_wrap}`}>
        <h2>MEET THE TEAM</h2>
        <ul className={`row`}>
          <li className={`col-lg-4 col-sm-12`}>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/04/teammate1.jpg?resize=300%2C300&ssl=1"
              alt=""
            />
            <h4>Surya Gandhi</h4>
            <p className={`text-muted`}>CEO & FOUNDER</p>
          </li>
          <li className={`col-lg-4 col-sm-12`}>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/teammate2.jpg?resize=300%2C300&ssl=1"
              alt=""
            />
            <h4>Chandu Gandhi</h4>
            <p className={`text-muted`}>CTO</p>
          </li>
          <li className={`col-lg-4 col-sm-12`}>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/teammate3.jpg?resize=300%2C300&ssl=1"
              alt=""
            />
            <h4>Kishan Baheti</h4>
            <p className={`text-muted`}>MANAGEMENT HEAD & SR. ANDROID DEV.</p>
          </li>
        </ul>
      </section>
    );
  }
}
