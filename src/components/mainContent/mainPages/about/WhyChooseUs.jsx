import React from "react";
import s from "./about.module.scss";

function WhyChooseUs() {
  return (
    <div className={`${s.why_us_wrap} row`}>
      <div className={`${s.content_block}  col-lg-6 col-sm-12`}>
        <h2 className={`text-center`}>WHY CHOOSE US</h2>
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
                  <span>01</span> - Best Quality App And Website Designs
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
                Our secure, robust codebase approach on custom web development
                gives seamless UX outcomes, fulfilling the user’s expectations..
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
                  <span>02</span> - 24x7 Live Support
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
                Our 24×7 dedicated support is given at pre and post delivery of
                project.
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
                  <span>03</span> - Result Oriented Projects
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
                We do not just produce a product or deliver a service, we
                believe that a successful individual or an organization always
                prioritize their outcome results.
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
                  <span>04</span> - Award Winning SEO Team
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
                SparkleAppz will help increase your company’s revenue with an
                SEO campaign that is specifically designed for your unique
                business.
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
                  <span>05</span> - Android App development
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
                We have experienced team of Android App development that ensures
                high performance and excellence through their expert skills and
                knowledge.
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`${s.card_header} card-header`} id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`${s.btn_collapse} btn btn-link collapsed container`}
                  data-toggle="collapse"
                  data-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  <span>06</span> - IOS app development
                </button>
              </h5>
            </div>
            <div
              id="collapse6"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body text-muted">
                Our experts give strong focus on simplicity, interaction design
                and usability standards to bring your ideas into aninnovative
                IOS application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${s.blue_img_block} col-lg-6 col-sm-12`}>
        <img
          src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/why_choose_img.png?fit=908%2C899&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
