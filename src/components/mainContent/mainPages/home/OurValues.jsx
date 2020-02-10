import React from "react";
import s from "./home.module.scss";

export default class OurValues extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.our_values_wrap}`}>
        <h2>OUR VALUES</h2>
        <p className={s.subheading}>
          <b>
            They define who we are as a professional team and what make us to
            stand out
          </b>
        </p>

        <ul className={`container-fluid ${s.values_list}`}>
          <li className={`col-lg-3 col-sm-12`}>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/eficiency.png?fit=140%2C140&ssl=1"
              alt=""
            />
            <h3>Efficiency</h3>
            <p className={`text-muted`}>We builds Software that deliver results.</p>
          </li>

          <li className={`col-lg-3 col-sm-12`}>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/quality.png?fit=140%2C140&ssl=1"
              alt=""
            />
            <h3>Quality</h3>
            <p className={`text-muted`}>We have high standard for all the things we develop</p>
          </li>
          <li className={`col-lg-3 col-sm-12`}>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/integrity.png?fit=174%2C116&ssl=1"
              alt=""
            />
            <h3>Integrity</h3>
            <p className={`text-muted`}>We do what's right even when its not an easy thing to do</p>
          </li>

          <li className={`col-lg-3 col-sm-12`}>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/unity.png?fit=140%2C140&ssl=1"
              alt=""
            />
            <h3>Unity</h3>
            <p className={`text-muted`}>We are a tem so we appreciate every point</p>
          </li>
        </ul>
      </section>
    );
  }
}
