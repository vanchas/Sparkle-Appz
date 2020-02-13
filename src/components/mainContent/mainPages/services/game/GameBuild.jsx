import React from "react";
import s from "./game.module.scss";
import { NavLink } from "react-router-dom";

function GameBuild() {
  return (
    <div className={`text-center ${s.build_wrap}`}>
      <h2>BUILD AN UNITY APP FOR ANY DEVICE</h2>
      <p className={`text-muted`}>
        We at <a href="https://www.sparkleappz.com/"> SparkleAppz</a>, ensure
        Unity3D development process which makes it very apparent for any{" "}
        <a href="https://www.sparkleappz.com/"> business</a> application to
        present their gaming standard with{" "}
        <a href="https://www.sparkleappz.com/"> magnificent</a> design & great
        UI/UX.
      </p>
      <div className={s.cards_block}>
        <div className={s.card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/unnamed.png?w=512&ssl=1"
            alt=""
          />
          <h5 className={`h2`}>LumberJack</h5>
        </div>
        <div className={s.card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/61XmRgGEbL.png?w=512&ssl=1"
            alt=""
          />
          <h5 className={`h2`}>Swing Starboy</h5>
        </div>
      </div>
      <NavLink to="/portfolio" className={s.navlink}>
        SHOW MORE PROJECTS
      </NavLink>
    </div>
  );
}

export default GameBuild;
