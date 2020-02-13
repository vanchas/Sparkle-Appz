import React from "react";
import s from "./uiux.module.scss";

function UiUxQuestions() {
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
                  <span>01</span> - What is diference between UI and UX design?
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
                UX Design refers to the term User Experience Design, while UI
                Design stands for User Interface Design. Both elements are
                crucial to a product and work closely together.
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
                  <span>02</span> - Why UX is important for business?
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
                There are many reasons why focusing on the user experience can
                be beneficial for business. Basically, there are two main
                factors that make the user experience very important.
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
                  <span>03</span> - What do UX/UI design do?
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
                UX refers to the user experience, which focuses on how something
                works and how people interact with it. UI, or user interface,
                focuses on the look and layout. A UX designer ensures a product
                makes sense to the user by creating a path that logically flows
                from one step to the next.
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
                  <span>04</span> - What is UX design and human factors?
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
                In the context of product development, UX design and human
                factors give way to creating products that are useful, usable,
                comfortable, safe, marketable products.
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

export default UiUxQuestions;
