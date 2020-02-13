import React from "react";
import s from "./game.module.scss";
import { NavLink } from "react-router-dom";

function GameGlimpse() {
  return (
    <div className={`text-center text-white ${s.glimpse_wrap}`}>
      <h2>GLIMPSE OF WORK</h2>
      <div>
        <p>
          Mobile game development has taken a boom in the market. As a software
          development company, <b> SparkleAppz</b> offers complete services of
          Unity 3D games with interactive gameplays.
        </p>
        <p>
          We have created games with a hook element as a key to launching into
          the <b> marketplace</b> with log lasting success.
        </p>
      </div>
      <NavLink className={s.link_btn} to="/portfolio">
        See Our Work
      </NavLink>
    </div>
  );
}

export default GameGlimpse;
