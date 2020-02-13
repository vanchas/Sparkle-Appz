import React from "react";
import s from "../about/about.module.scss";

export default class Ranking extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.ranking_wrap}`}>
        <h2>TOP RANKING ON</h2>
        <ul className={`row ${s.ranking_list}`}>
          <li className={`col-lg-3 col-sm-12`}>
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/1.png?fit=200%2C200&ssl=1"
                alt="glutch"
                title="1"
              />
          </li>
          <li className={`col-lg-3 col-sm-12`}>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/4.png?fit=200%2C200&ssl=1"
                alt="upwork"
                title="4"
              />
          </li>
          <li className={`col-lg-3 col-sm-12`}>
            <a href="https://clutch.co/research/top-mobile-application-developers">
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/3.png?fit=200%2C200&ssl=1"
                alt="appfutura"
                title="3"
              />
            </a>
          </li>
          <li className={`col-lg-3 col-sm-12`}>
            <a href="https://clutch.co/research/top-mobile-application-developers">
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/2.png?fit=200%2C200&ssl=1"
                alt=""
                title="2"
              />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
