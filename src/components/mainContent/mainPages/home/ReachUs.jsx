import React from "react";
import s from "./home.module.scss";
import FormContact from "../../FormContact";
import Icon from "@material-ui/core/Icon";

export default class ReachUs extends React.Component {
  render() {
    return (
      <section className={`container-fluid row ${s.reach_us_wrap}`}>
        <div className={`col-lg-7 col-sm-12`}>
          <FormContact />
        </div>
        <div className={`col-lg-5 col-sm-12 text-center ${s.location}`}>
          <h3>REACH US</h3>
          <div className={s.block}>
            <div className={s.img_holder}>
              <img
                className={`${s.img}`}
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/headquater.png?fit=114%2C114&ssl=1"
                alt=""
              />
            </div>
            <div>
              <h4>Headquarters</h4>
              <address>10, Paota, Jodhpur, Rajasthan, India.</address>
              <a href="mailto:info@sparkleappz.com">
                <Icon style={{ transform: "scale(.8) translateY(.4em)" }}>
                  mail_outline
                </Icon>{" "}
                &nbsp; info@sparkleappz.com
              </a>
              <br />
              <a href="tel:+91-7737791591">
                {" "}
                <Icon style={{ transform: "scale(.7)  translateY(.3em)" }}>
                  phone
                </Icon>{" "}
                +91-7737791591
              </a>
              <br />
              <a href="https://www.sparkleappz.com/">Aheadtechno</a>
              <br />
            </div>
          </div>
          <div className={s.block}>
            <div className={s.img_holder}>
              <img
                className={`${s.img} ${s.img_second}`}
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/canada.png?fit=153%2C115&ssl=1"
                alt=""
              />
            </div>
            <div>
              <h4>Canada Office</h4>
              <p>
                100 city centre drive mississauga,
                <address>Ontario, Canada.</address>
              </p>
            </div>
          </div>
          <div className={s.contact_buttons}>
            <a
              className={`${s.call_us}`}
              href="https://www.sparkleappz.com/tel:+91773791591"
            >
              Call Us&nbsp;
              <Icon style={{ transform: "scale(.7)  translateY(.3em)" }}>
                phone
              </Icon>{" "}
            </a>
            <a className={s.whatsapp_us} href="https://web.whatsapp.com/send?phone=+917737791591&text=Hi,%20I%20would%20like%20to%20get%20more%20information..">
              Whatsapp Us
            </a>
          </div>
        </div>
      </section>
    );
  }
}
