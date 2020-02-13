import React from "react";
import s from "./ios.module.scss";

function IosApp() {
  return (
    <div className={` ${s.ios_app_wrap}`}>
      <h2 className={`text-center`}>IOS APP DEVELOPMENT SERVICES INCLUDES</h2>
      <div className={s.block_cards}>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/swift-1.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Swift</h5>
          <p className={`text-muted`}>
            Swift was lauched by Apple for developing iOS applications Swift
            provides safeguards to prevent errors and improve readability. Fast.
            Swift was built with performance in mind. Swift minimizes the
            monotonous undertakings, workload, and bookkeeping.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/objectiveC.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Objective C</h5>
          <p className={`text-muted`}>
            The language which was represented as Objective-C without C by the
            beginner Apple. Our pool of talented developers highly endorse this
            language because it is protected, speedier,and packed with an
            abnormal state of interactivity aids, responsive, resulting robust
            apps for customers as well as business holders.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/iphone.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>iPhone Apps</h5>
          <p className={`text-muted`}>
            We ensure that customers are provided with rich experience through
            our iOS app development services with an emphasis on timely
            delivery, cost effective solutions and transparent development
            processes.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/ipad.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>iPad Apps</h5>
          <p className={`text-muted`}>
            The iPad has remained the top-of-the-line and the most demanded
            tablet on the market. Our app developers are skilled enough to go
            with pace of developing responsive, robust and cherish able apps to
            meet the customer’s requirement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IosApp;
