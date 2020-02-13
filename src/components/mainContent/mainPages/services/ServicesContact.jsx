import React from "react";
import s from "./services.module.scss";

function ServicesContact() {
  return (
    <div className={`row ${s.services_contact_wrap}`}>
      <div className={`text-white col-lg-7 col-sm-12 ${s.text_block}`}>
        <h3>Would you like to start a project with us?</h3>
        <p>
          SparkleAppz, rated as a Best Software Company in the region, have
          delivered more than 100 successful quality and innovative projects
          both in national and international markets.
        </p>
      </div>
      <div className={`col-lg-5 col-sm-12 ${s.btn_block}`}>
        <button>+91-7737-791591</button>
      </div>
    </div>
  );
}

export default ServicesContact;
