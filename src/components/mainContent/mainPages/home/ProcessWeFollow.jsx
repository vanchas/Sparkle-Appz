import React from "react";
import s from "./home.module.scss";

export default class ProcessWeFollow extends React.Component {
  render() {
    return (
      <section className={`container-fluid ${s.process_we_follow_wrap}`}>
        <h2>PROCESS WE FOLLOW</h2>
        <div className={s.process_we_follow_container}>
          <div>
            <h3>01</h3>
            <div className={s.grid_item}>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/requirment.png?fit=78%2C78&ssl=1"
                alt=""
              />
              <div>
                <h4>Requirements Gathering</h4>
                <p>
                  Requirement gathering is the first and very importants part of
                  our mobile app development process.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>02</h3>
            <div className={s.grid_item}>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/uidesign.png?fit=78%2C78&ssl=1"
                alt=""
              />
              <div>
                <h4>UI/UX Design</h4>
                <p>
                  We create eye catching design with the help of latest tools of
                  designing.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>03</h3>
            <div className={s.grid_item}>
              <img
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/prototype.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <div>
                <h4>App Prototype</h4>
                <p>
                  After designing,the prototype of your app gets ready which is
                  sent for development then.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>04</h3>
            <div className={s.grid_item}>
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/appdevelopment.png?fit=78%2C78&ssl=1"
                alt=""
              />
              <div>
                <h4>App Development</h4>
                <p>
                  The development gets started on the preferable platforms with
                  complete tranparency.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>05</h3>
            <div className={s.grid_item}>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/quality-2.png?fit=78%2C77&ssl=1"
                alt=""
              />
              <div>
                <h4>Quality Assurance</h4>
                <p>
                  We do not compromise in quality so wemake sure get 100% bug
                  free app.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>06</h3>
            <div className={s.grid_item}>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/deployment.png?fit=79%2C78&ssl=1"
                alt=""
              />
              <div>
                <h4>App Deployment</h4>
                <p>
                  Your app is ready to appear on playstore or playstore on this
                  stage of develpment.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>07</h3>
            <div className={s.grid_item}>
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/support-1.png?fit=80%2C68&ssl=1"
                alt=""
              />
              <div>
                <h4>Support & Maintainance</h4>
                <p>We give support and answer every query after deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
