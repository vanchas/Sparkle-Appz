import React from "react";
import s from "./services.module.scss";

export default class ServiceHelp extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.services_help_wrap}`}>
        <h2 className={`h1 text-center`}>HOW WE CAN HELP YOU?</h2>
        <p className={`${s.subtitle} text-muted text-center`}>
          Our expertise covers all major platforms and development tools
          including <b> Android, IOS, Unity3D, UI/UX designs, Websites</b> and
          we can also do digital marketing.
        </p>
        <div>
          <ul className={`container-fluid row ${s.our_services_container}`}>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://mlallqt2tcwu.i.optimole.com/nKcQzA-288pYSM0/w:64/h:64/q:auto/https://i0.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-L94TUGdC/w:64/h:64/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/04/coding-1-1.png?ssl=1"
                  alt=""
                />
                <h3>Website development</h3>
              </div>

              <p className={`text-muted`}>
                We offer custom web app development providing seamless user
                experience and ensure secure and strong code base from
                prototypes to logos design. We develop web apps with outstanding
                performance that can increase the chances of your business
                success.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://mlallqt2tcwu.i.optimole.com/nKcQzA-lqtF2kNJ/w:64/h:64/q:auto/https://i0.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-5V2QNs2p/w:64/h:64/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/04/editing.png?ssl=1"
                  alt=""
                />
                <h3>UI / UX Designing</h3>
              </div>

              <p className={`text-muted`}>
                Our enthusiast UI and UX designers enjoy crafting progressive,
                yet empathic solutions, bringing efficiency and effectiveness
                that gives value to your business. We design to inspire and
                mesmerize.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://mlallqt2tcwu.i.optimole.com/nKcQzA-dpmtZB6L/w:64/h:64/q:auto/https://i0.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-FSCCYPkO/w:64/h:64/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/04/projects-icon.png?ssl=1"
                  alt=""
                />
                <h3>IOS App Development</h3>
              </div>

              <p className={`text-muted`}>
                Our devoted IOS development team is committed to developing high
                valued mobile application solutions suitable for any workflow or
                industry. We use modern programming languages and approaches to
                extend and scale our products.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://mlallqt2tcwu.i.optimole.com/nKcQzA--zAg5_fk/w:64/h:64/q:auto/https://i0.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-yrJb6j4C/w:64/h:64/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/04/share.png?ssl=1"
                  alt=""
                />
                <h3>Android App development</h3>
              </div>

              <p className={`text-muted`}>
                At Sparkle Appz, we have an expert team in Android App
                Development, creating innovative android applications for
                individuals, enterprises and can develop anything, a client
                wants on the Android platform. Our team always try to give user,
                the best Android applications for their business.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://mlallqt2tcwu.i.optimole.com/DoAYIw-QG-j33pK/w:64/h:64/q:auto/https://i1.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-SJjvkKEl/w:64/h:64/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/04/support.png?ssl=1"
                  alt=""
                />
                <h3>Unity 3D Game development</h3>
              </div>

              <p className={`text-muted`}>
                Our skilled professionals build games for various target
                platforms based on Unity framework. They ensure the best
                possible performance, quality, and responsiveness of
                applications - translating design ideas, concepts, and
                requirements into a functional and engaging game. We focus on
                sophisticated design and a quality product.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-qDLzXJWM/w:64/h:64/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-q-sURXHM/w:64/h:64/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/04/marketing-1.png?ssl=1"
                  alt=""
                />
                <h3>SEO / SMM Digital Marketing</h3>
              </div>

              <p className={`text-muted`}>
                We offer digital marketing services at reasonable packages. Our
                experienced SEO experts use different optimization methods to
                increase customers to your website and keep you on the top of
                every popular and competitive search engines out there.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
