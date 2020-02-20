import React from "react";
import s from "./footer.module.scss";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.footer_content_group}>
        <li className={s.footer_text}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/logo.png?fit=239%2C84&ssl=1"
            alt="Sparkle Appz"
          />
          <p>
            <a href="https://www.sparkleappz.com/">
              <b> SparkleAppz</b>
            </a>{" "}
            is a professional IT solution and web development company. We
            provide complete web design and IT services to make your product
            successful in market with eye-catching outlook and appropriate web
            design. We put together our delicate, exceptional methods by
            building in our personal intensive experience. Our own strategy
            supplies the drive and ready-to-use design necessary to deliver
            excellent.
          </p>
        </li>
        <li className={s.important_links}>
          <h3 className={`h4`}>Important Links</h3>
          <nav className={s.nav}>
            <ul>
              <li>
                <Link to="/">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  About US
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <h3 className={`h4`}>Useful Links</h3>
          <nav className={s.nav}>
            <ul>
              <li>
                <Link to="/ios">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  IOS App Development
                </Link>
              </li>
              <li>
                <Link to="/android">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Android App Development
                </Link>
              </li>
              <li>
                <Link to="/website_development">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/UI/UX">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  UI/UX Design Services
                </Link>
              </li>
              <li>
                <Link to="/3d">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  Unity 3D Game Developmen
                </Link>
              </li>
              <li>
                <Link to="/SEO/SMM">
                  <Icon className={`${s.icon} text-primary`}>
                    keyboard_arrow_right
                  </Icon>
                  SEO / SMM Digital Marketing
                </Link>
              </li>
            </ul>
          </nav>
        </li>
        <li>
          <h3 className={`h4`}>Get In Touch</h3>
          <div>
            <h5 className={`h6`}>
              <b> Headquarter</b>
            </h5>
            <address>10, Paota, Jodhpur, Rajasthan, India.</address>
          </div>
          <br />
          <div>
            <h5 className={`h6`}>
              <b> Canada Office</b>
            </h5>
            <address>
              Canada Office 100 city centre drive mississauga, Ontario, Canada.
            </address>
          </div>
          <div className={s.footer_contacts}>
            <a href="mailto:info@sparkleappz.com">
              <Icon className={`${s.icon} text-primary`}>email</Icon>{" "}
              info@sparkleappz.com
            </a>
            <a href="tel:+91-7737791591">
              <Icon className={`${s.icon} text-primary`}>add_ic_call</Icon>{" "}
              +91-7737791591
            </a>
            <a href="https://join.skype.com/invite/nPqpk4L3gXw2">
              <img
                className={s.skype_logo}
                src="https://i.pinimg.com/originals/12/ef/48/12ef48f4f80af98b24d531b99c369039.png"
                alt=""
              />
              Aheadtechno
            </a>
          </div>
        </li>
      </ul>
      <div className={s.footer_foot}>
        <p>
          Copyright © 2020 Sparkle Appz | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
