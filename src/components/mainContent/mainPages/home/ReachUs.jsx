import React from "react";
import s from "./home.module.scss";
import FormContact from "../../FormContact";

export default class ReachUs extends React.Component {
  render() {
    return (
      <section className={`container-fluid row ${s.reach_us_wrap}`}>
        <div className={`col-lg-7 col-sm-12`}>
          <FormContact />
        </div>
        <div className={`col-lg-5 col-sm-12 text-center ${s.location}`}>
          <h3>REACH US</h3>
          <div className={`row`}>
            <img className={`col-lg-4 col-sm-12 ${s.img}`}
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/headquater.png?fit=114%2C114&ssl=1"
              alt=""
            />
            <div>
              <h4>Headquarters</h4>
              <address>10, Paota, Jodhpur, Rajasthan, India.</address>
              <a href="mailto:info@sparkleappz.com">info@sparkleappz.com</a>
              <a href="tel:+91-7737791591">+91-7737791591</a>
              <a href="https://www.sparkleappz.com/">Aheadtechno</a>
            </div>
          </div>
          <div className={`row`}>
            <img className={`col-lg-4 col-sm-12 ${s.img}`}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/canada.png?fit=153%2C115&ssl=1"
              alt=""
            />
            <div>
              <h4>Canada Office</h4>
              <p>
                100 city centre drive mississauga,
                <address>Ontario, Canada</address>.
              </p>
            </div>
          </div>
          <div>
            <a href="#">Call Us</a>
            <a href="">Whatsapp Us</a>
          </div>
        </div>
      </section>
    );
  }
}
