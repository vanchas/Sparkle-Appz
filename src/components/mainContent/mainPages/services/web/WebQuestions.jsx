import React from "react";
import s from "./web.module.scss";

function WebQuestions() {
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
                  <span>01</span> - What do your website coast?
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show container"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                <h6>Our prices depend on many factors.</h6>
                <ul style={{ paddingLeft: "1.5em" }}>
                  <li>What type of website do you want?</li>
                  <li>what features and interactivity you’ll need?</li>
                </ul>
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
                  <span>02</span> - What kind of technology do you use?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse container"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                We specialize in css but we are very experienced with wordpress,
                JavaScript, html, php and bootstrap and others technologies.
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
                  <span>03</span> - How does long it to take a website?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse container"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                Its depends on the complexity of the websites and how urgent you
                need it.
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
                  <span>04</span> - Will end product be mobile friendly?
                </button>
              </h5>
            </div>
            <div
              id="collapse4"
              className="collapse container"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                Yes every site we have built is mobile friendly.The method we
                used to achieve this is known as responsive design.
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
                  <span>05</span> - What is the purpose of the website?
                </button>
              </h5>
            </div>
            <div
              id="collapse5"
              className="collapse container"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                Different kinds of websites different purposes depending on the
                audience or users. Some websites are geared to selling the
                products and other websites are geared to providing practical
                information’s.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebQuestions;
