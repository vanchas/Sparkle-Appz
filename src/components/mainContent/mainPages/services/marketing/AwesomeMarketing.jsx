import React from "react";
import s from "./marketing.module.scss";

export default class AwesomeMarketing extends React.Component {
  render() {
    return (
      <section className={`row ${s.awesome_things_wrap}`}>
        <div className={`col-lg-5 col-sm-12 ${s.text_content}`}>
          <h3>
            LET'S MAKE <br />
            AWESOME THINGS <br />
            TOGATHER
          </h3>
          <p className={`text-muted`}>
            Tell us <br />
            About your project.
          </p>
        </div>

        <div className={`col-lg-7 col-sm-12`}>
          <form action="#" className={`container ${s.form_wrap}`}>
            <div>
              <h3>GET IN TOUCH</h3>
              <p className={`text-muted`}>
                We’re here for you, and we’re wearing our thinking caps. But
                first swing by our fantastic Help Center for all your Sparkle
                Appz product and technical needs! Name{" "}
              </p>
            </div>
            <div className={`row ${s.small_inputs_group}`}>
              <input
                className={`col-lg-6 col-sm-12`}
                type="text"
                placeholder="Name"
              />
              <input
                className={`col-lg-6 col-sm-12`}
                type="text"
                placeholder="Email"
              />
              <input
                className={`col-lg-6 col-sm-12`}
                type="text"
                placeholder="Phone"
              />
              <input
                className={`col-lg-6 col-sm-12`}
                type="text"
                placeholder="Skype"
              />
            </div>
            <div className={`row ${s.big_inputs_group}`}>
              <textarea
                className={`col-12`}
                type="text"
                placeholder="Message"
              ></textarea>
              <input className={`col-12`} type="text" placeholder="Budget" />
            </div>
            <input type="submit" value="Get A Quote" />
          </form>
        </div>
      </section>
    );
  }
}
