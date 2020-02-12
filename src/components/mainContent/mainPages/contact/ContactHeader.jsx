import React from "react";
import s from "./contact.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

function ContactHeader() {
  return (
    <div className={s.contact_header_wrap}>
      <div className={`${s.contact_header_text_block}`}>
        <h1>CONTACT US</h1>
        <div className={`${s.contact_header_text} text-muted`}>
          <p>
            {" "}
            <a href="https://www.sparkleappz.com/">Sparkle Appz </a>, an app
            development Indian company in Jodhpur, is a broad spectrum
            organization involved in creating world-class{" "}
            <b> custom application software & website solutions</b>. Our mission
            is to offer custom <b> software solutions</b> and build niche market
            products that will allow the{" "}
            <a href="https://www.sparkleappz.com/"> company</a> to deploy faster
            go to market solutions for its clients. We will be pleased to see in
            our network, We always care about our customer, and never let our
            customer worry about anything.
          </p>
          <p>
            If you have any <b> ideas</b> or if you want to bring your{" "}
            <a href="https://www.sparkleappz.com/"> business</a> to grow, get in
            touch with us and we help you to bring your{" "}
            <a href="https://www.sparkleappz.com/"> ideas</a> and needs to life.
            You can also visit us in our Paota, Jodhpur office at the address
            given below.
          </p>
        </div>
        <nav>
          <NavLink className={s.contact_link_btn} to="/portfolio">
            Check Out Our Porlfolio
            <Icon className={s.link_btn_arrow}>arrow_right_alt</Icon>
          </NavLink>
        </nav>
      </div>
      <div className={`${s.contact_header_image_block}`}>
        <img
          src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/map_bg-1.png?fit=943%2C959&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default ContactHeader;
