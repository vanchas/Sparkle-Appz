import React from "react";
import s from "./uiux.module.scss";
import { NavLink } from "react-router-dom";

function UiUxGlimpse() {
  return (
    <div className={`${s.glimpse_wrap}`}>
      <h2>GLIMPSE OF WORK</h2>
      <div className={`text-muted`}>
        <p>
          Our work depicts the amount of <b> UI/UX</b> done for the customers.
          Our designers understand the need of the users and the objectives of
          their application and then <b> effectively</b> translate it into
          functionalities.
        </p>
        <p>
          The UI design of application interface has left a deep{" "}
          <b> impression</b> on the user through reasonable color matching. The
          key success to our application <b> design</b> comes down to the user
          experience (UX) and the user interface (UI) we offer.
        </p>
      </div>
      <NavLink className={s.link_btn} to="/portfolio">
        See Our Work
      </NavLink>
    </div>
  );
}

export default UiUxGlimpse;
