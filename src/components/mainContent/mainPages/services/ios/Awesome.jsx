import React from "react";
import s from "./ios.module.scss";
import FormContact from "../../../FormContact";

export default class AwesomeThings extends React.Component {
  render() {
    return (
      <section className={`row ${s.awesome_things_wrap}`}>
        <div className={`text-center text-white col-lg-5 col-sm-12 ${s.text_content}`}>
          <h3>
            LET'S MAKE <br />
            AWESOME THINGS <br />
            TOGATHER
          </h3>
          <p>
            Tell us <br />
            About your project.
          </p>
        </div>
        <div className={`col-lg-7 col-sm-12`}>
          <FormContact />
        </div>
      </section>
    );
  }
}
