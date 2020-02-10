import React from "react";
import s from "./home.module.scss";

export default class WeLoveWeHelp extends React.Component {
  render() {
    return (
      <section className={s.we_love_we_help_block}>
        <article className={s.we_love_block}>
          <h2>
            <b>WE LOVE</b>
            <br /> WHAT WE DO
          </h2>
          <p>
            <a href="https://www.sparkleappz.com">Sparkle Appz</a> values their
            customers and strives to deliver software applications for them.
            These solutions help enterprises and clients increase productivity
            and facilitate workflow management. We focus to deliver our
            expertise to our clients within time and make sure that our
            solutions be aesthetic, technically functional, user-friendly and
            responsive.
          </p>
          <a className={s.about_us_button} href="#">
            About Us
          </a>
        </article>
        <article className={s.we_help_block}>
          <h2>HOW WE CAN HELP YOU?</h2>
          <p>
            We believe in building{" "}
            <b>
              fully fledged, stable, and scalable product applications and
              designs
            </b>
            . We professionally cater all the major platforms and development
            tools including{" "}
            <b>Android, IOS, Unity3D, UI/UX designs, Web development</b>{" "}
            services. We also offer SEO & ASO which is essential for any digital
            marketing strategy.
          </p>
        </article>
      </section>
    );
  }
}
