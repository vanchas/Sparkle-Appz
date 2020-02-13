import React from "react";
import s from "./marketing.module.scss";

function MarketingQuestions() {
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
                  <span>01</span> - What is digital marketing?
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
                Digital marketing involves marketing to people using
                Internet-connected electronic devices, namely computers,
                smartphones and tablets.Digital marketing focuses on channels
                such as search engines, social media, email, websites and apps
                to connect with prospects and customers.
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
                  <span>02</span> - Can you gaurantee result?
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
                Nobody can guarantee results in digital marketing as there are
                too many variables, especially with SEO, as Google’s algorithm
                is a secret. Also, trust us when we tell you that we aren’t
                happy with results unless you are!.
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
                  <span>03</span> - What is SEO?
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
                SEO stands for search engine optimisation, and while there are
                many detailed explanations, the best one we can think of is
                “making things appear higher in Google (or any other search
                engine)”. In our case, we also break SEO into on-site and
                off-site SEO.
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
                  <span>04</span> - Why digital marketing is the future?
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
                Back in the old days, there was a trend of conducting one annual
                planning meeting for a go-to-market strategy, plan and budget.
                But, today marketers need to plan frequently and even modify
                plans as per real-time customer insights, emerging media,
                channels and technology.
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
                  <span>05</span> - What is content marketing?
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
                Content marketing turns traditional marketing on its head.
                Instead of focusing on a company and its products or services,
                it focuses on the consumer’s needs first. The goal of content
                marketing is to provide valuable, genuinely helpful information
                to consumers for free.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingQuestions;
