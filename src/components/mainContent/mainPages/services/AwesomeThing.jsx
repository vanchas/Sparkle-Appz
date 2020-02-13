import React from "react";
import s from "./services.module.scss";

function AwesomeThings() {
  return (
    <div className={`text-center ${s.awesome_things_wrap}`}>
      <h2 className={``}>Let’s make awesome things, together.</h2>
      <p className={`text-muted h5`}>Tell us about your project.</p>
    </div>
  );
}

export default AwesomeThings;
