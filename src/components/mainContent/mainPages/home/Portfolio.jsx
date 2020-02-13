import React from "react";
import s from "./home.module.scss";
import { NavLink } from "react-router-dom";

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.portflio_wrapper}`}>
        <h2 className={`h1`}>PORTFOLIO</h2>
        <ul className={`container-fluid`}>
          <li>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/IG-Cleaner_inner.jpg?w=646&h=368&ssl=1"
              alt="IG-Cleaner_inner"
              title="IG-Cleaner_inner"
            />
          </li>
          <li>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Life-Listr_inner.jpg?w=646&h=368&ssl=1"
              alt="Life-Listr_inner"
              title="Life-Listr_inner"
            />
          </li>
          <li>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Nomadic-Wall_inner.jpg?w=646&h=368&ssl=1"
              alt="Nomadic-Wall_inner"
            />
          </li>
          <li>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/GoTeach_Inner.jpg?w=646&h=368&ssl=1"
              alt="GoTeach_Inner"
            />
          </li>
          <li>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Keezi-Keyboards-Free_inner.jpg?w=646&h=368&ssl=1"
              alt="Keezi-Keyboards-Free_inner"
            />
          </li>
          <li>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/hidephoto-inner.jpg?w=646&h=368&ssl=1"
              alt="hidephoto-inner"
            />
          </li>
        </ul>
        <NavLink className={s.check_out_button} to="/portfolio">
          Check Out Other Projects
        </NavLink>
      </section>
    );
  }
}
