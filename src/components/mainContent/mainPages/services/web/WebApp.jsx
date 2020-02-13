import React from "react";
import s from "./web.module.scss";

function WebApp() {
  return (
    <div className={` ${s.web_app_wrap}`}>
      <h2 className={`text-center`}>WEBSITE DEVELOPMENT INCLUDES</h2>
      <div className={s.block_cards}>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/php-1.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>PHP , Laravel</h5>
          <p className={`text-muted`}>
            PHP is launched for the feature-pack & elite website development.
            Our team of expert PHP developers combines the best technological
            frameworks to offer robust and cost-effective solutions to the
            users.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/java-2.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Java</h5>
          <p className={`text-muted`}>
            From the release, java is used to develop scalable & secure mobile
            apps. Our team of canny developers uses this framework's flexibility
            to build the most innovative apps by leveraging the right java
            expertise in everything from architecture to implementation.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/html5.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>HTML5 , Angular</h5>
          <p className={`text-muted`}>
            HTML5 web development framework has led to a whole new era of web
            apps. Our HTML5 developers hold expertise in this technology and
            provide immaculate websites according to the user demand.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/codignator.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>CodeIgniter , Zend</h5>
          <p className={`text-muted`}>
            Powered by MVC architectural design, Codignitor ensures safe,
            economical web development; our team of technical savvy makes quick
            deliveries of scalable web solutions in well-documented phases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebApp;
