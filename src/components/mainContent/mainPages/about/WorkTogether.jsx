import React from "react";
import s from "./about.module.scss";
import FormContact from "../../FormContact";

function WorkTogether() {
  return (
    <div className={`row ${s.work_together_wrap}`}>
      <div className={`${s.work_content_block} text-center text-white container col-lg-5 col-sm-12`}>
        <h2 className={`h1`}>WANT TO WORK TOGATHER?</h2>
        <p>
          Thank you for taking an interest in our company. Let us know if you
          have an idea we can build together.
        </p>
      </div>
      <div className={`col-lg-7 col-sm-12`}>
        <FormContact />
      </div>
    </div>
  );
}

export default WorkTogether;
