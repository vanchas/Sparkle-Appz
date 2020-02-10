import React from "react";
import s from "./home.module.scss";

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.portflio_wrapper}`}>
        <h2 className={`h1`}>PORTFOLIO</h2>
        <ul className={`container-fluid`}>
          <li>
            <a href="#">
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/IG-Cleaner_inner.jpg?w=646&h=368&ssl=1"
                alt="IG-Cleaner_inner"
                title="IG-Cleaner_inner"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Life-Listr_inner.jpg?w=646&h=368&ssl=1"
                alt="Life-Listr_inner"
                title="Life-Listr_inner"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Nomadic-Wall_inner.jpg?w=646&h=368&ssl=1"
                alt="Nomadic-Wall_inner"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/GoTeach_Inner.jpg?w=646&h=368&ssl=1"
                alt="GoTeach_Inner"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Keezi-Keyboards-Free_inner.jpg?w=646&h=368&ssl=1"
                alt="Keezi-Keyboards-Free_inner"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/hidephoto-inner.jpg?w=646&h=368&ssl=1"
                alt="hidephoto-inner"
              />
            </a>
          </li>
        </ul>
        <a className={s.check_out_button} href="#">
          Check Out Other Projects
        </a>
      </section>
    );
  }
}
