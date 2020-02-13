import React from "react";
import s from "./game.module.scss";

function GameQuestions() {
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
                  <span>01</span> - What is the 3D unity used for?
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
                3D untiy is the corss platform game engine.It is used to
                develope video games for web plugins,consoles and mobile
                devices.
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
                  <span>02</span> - Is unity good for 3D games?
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
                Unity 3D is most profitable and heavily used game development
                engine for 3D games.
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
                  <span>03</span> - Is unity 3D the best game engine?
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
                By far the most popular engines for smaller game developers are
                Unity and UnrealEngine, and for good reason. Unity vs Unreal is
                a hotly debated topic, comparable to Microsoft vs Apple.
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
                  <span>04</span> - Is unity 3D free?
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
                Unity has two editions, Personal and Professional. Personal
                edition is completely free to use but it displays a ‘Made with
                Unity’ logo while your game starts. Neglecting that logo,
                personal edition is completely free to use. It is the best game
                engine you can use to make games if you are a beginner.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameQuestions;
