import React from "react";
import s from "./ios.module.scss";
import { NavLink } from "react-router-dom";

function Glimpse() {
  return (
    <div className={`text-center text-white ${s.glimpse_wrap}`}>
      <h2>GLIMPSE OF WORK</h2>
      <div>
        <p>
          We have a reputation to deliver services that are cost effective, yet
          quality oriented that customer expects. We have delivered beautiful,
          functional and fun to use apps that mesh with customer’s personal
          vision. Our solutions are known to be reliable and focused on
          customer’s business needs.
        </p>
        <p>
          We have designed advanced and beloved Apple iOS apps in a range of
          genres. Not only our applications pass Apple’s strict approval
          process, but they have also gone on to find audiences on countless
          iPhones and iPads around the globe.
        </p>
      </div>
      <NavLink className={s.link_btn} to="/portfolio">
        See Our Work
      </NavLink>
    </div>
  );
}

export default Glimpse;
