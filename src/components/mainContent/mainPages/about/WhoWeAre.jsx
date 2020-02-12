import React from "react";
import s from "./about.module.scss";

function WhoWeAre() {
  return (
    <div className={s.who_we_r_wrap}>
      <ul>
        <li>
          <h3>WHO ARE WE</h3>
          <p className={`text-muted`}>
            We are a group of dedicated <a href="https://www.sparkleappz.com/"> IT professionals</a>, providing software and
            digital marketing solutions.
          </p>
        </li>
        <li>
          <h3>OUR MISSION</h3>
          <p className={`text-muted`}>
            We believe in delivering unique and <a href="https://www.sparkleappz.com/"> reliable software solutions</a> to
            assist our clients in improving IT efficiency and business
            profitably.
          </p>
        </li>
        <li>
          <h3>WHAT WE DO</h3>
          <p className={`text-muted`}>
            To provide the best solutions to the clients as per their business
            needs by providing <a href="</a>"> customized development</a> services.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default WhoWeAre;
