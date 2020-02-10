import React from "react";
import s from "./mainPages/home/home.module.scss";

const FormContact = () => {
  return (
      <form action="#" className={`container text-center ${s.form_wrap}`}>
        <div>
          <h3>GET IN TOUCH</h3>
          <p>
            We’re here for you, and we’re wearing our thinking caps. But first
            swing by our fantastic Help Center for all your Sparkle Appz product
            and technical needs! Name{" "}
          </p>
        </div>
        <div className={`row ${s.small_inputs_group}`}>
          <input className={`col-lg-6 col-sm-12`} type="text" placeholder="Name" />
          <input className={`col-lg-6 col-sm-12`} type="text" placeholder="Email" />
          <input className={`col-lg-6 col-sm-12`} type="text" placeholder="Phone" />
          <input className={`col-lg-6 col-sm-12`} type="text" placeholder="Skype" />
        </div>
        <div className={`row ${s.big_inputs_group}`}>
          <textarea className={`col-12`} type="text" placeholder="Message"></textarea>
          <input className={`col-12`} type="text" placeholder="Budget" />
        </div>
        <input type="submit" value="Get A Quote"/>
      </form>
  );
};
export default FormContact;
