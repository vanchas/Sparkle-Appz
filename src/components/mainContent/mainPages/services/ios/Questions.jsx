import React from "react";
import s from "./ios.module.scss";

function Questions() {
  return (
    <div className={`${s.questions_wrap}`}>
      <div>
        <h2 className={`text-center`}>FREQUENTLY ASKED QUESTIONS</h2>
        <div id="accordion" className={s.accordion}>
          <div className="card">
            <div className={`${s.card_header} card-header`} id="headingOne">
              <h5 className="mb-0">
                <button
                  className={`${s.btn_collapse} btn btn-link container`}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span>01</span> - What services to you provide?
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                Our company provides mobile application development and also web
                development solution and services.
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`${s.card_header} card-header`} id="headingTwo">
              <h5 className="mb-0">
                <button
                  className={`${s.btn_collapse} btn btn-link collapsed container`}
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span>02</span> - What about project management?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                You will be required to interact directly with the developer and
                manage the project of your choice and you will have Skype and
                email address of developer.
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`${s.card_header} card-header`} id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`${s.btn_collapse} btn btn-link collapsed container`}
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span>03</span> - How much does it coast to develop an App
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                The cost of the development of an app depends on the project
                size, to technical complexity,to your choice of development
                partner.
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`${s.card_header} card-header`} id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`${s.btn_collapse} btn btn-link collapsed container`}
                  data-toggle="collapse"
                  data-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  <span>04</span> - How do you plan to maintain your app after
                  launched?
                </button>
              </h5>
            </div>
            <div
              id="collapse4"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                After the launching of your application to marketyour project is
                not entirely finished. We will still have to release updates,
                fix bugs and new features and improve functionality.
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`${s.card_header} card-header`} id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`${s.btn_collapse} btn btn-link collapsed container`}
                  data-toggle="collapse"
                  data-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  <span>05</span> - Which platform should we target iOS /
                  Android or both?
                </button>
              </h5>
            </div>
            <div
              id="collapse5"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                We recommend to launch the product in both the platforms because
                now a days the growing popularity of both iOS and Android.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
