import React from "react";
import s from "./home.module.scss";

export default class OurServices extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.our_services_wrap}`}>
        <h2 className={`h1`}>OUR SERVICES</h2>
        <div>
          <ul className={`container-fluid row ${s.our_services_container}`}>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/iphone_appdeve.png?fit=80%2C80&ssl=1"
                  alt=""
                />
                <h3>IPhone App Development</h3>
              </div>

              <p className={`text-muted`}>
                Our devoted IOS development team is committed to developing high{" "}
                <a href="https://www.sparkleappz.com/">valued mobile </a>
                application solutions suitable for any workflow or industry. We
                use modern programming languages and approaches to extend and
                scale our products.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/android.png?fit=80%2C80&ssl=1"
                  alt=""
                />
                <h3>Android App development</h3>
              </div>

              <p className={`text-muted`}>
                At <a href="https://www.sparkleappz.com/">SparkleAppz</a> , we
                have expert team in Android App Development, creating innovative
                android applications for individuals, enterprises and can
                develop anything, a client wants on the
                <b> Android</b> platform. Our team always try to give user, the
                best Android applications for their business.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/uiux_design.png?fit=80%2C80&ssl=1"
                  alt=""
                />
                <h3>UI / UX Designing</h3>
              </div>

              <p className={`text-muted`}>
                Our enthusiast UI and UX designers enjoy crafting progressive,
                yet{" "}
                <a href="https://www.sparkleappz.com/">empathic solutions</a>,
                bringing efficiency and effectiveness that gives value to your
                business. We design to inspire and mesmerize.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/webdevelopment.png?fit=80%2C80&ssl=1"
                  alt=""
                />
                <h3>Website development</h3>
              </div>

              <p className={`text-muted`}>
                We offer custom web app development providing seamless{" "}
                <a href="https://www.sparkleappz.com/">user experience</a> and
                ensure secure and strong code base from prototypes to logos
                design. We develop web apps with outstanding performance that
                can increase the chances of your business success.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/gamedevelopment.png?fit=80%2C80&ssl=1"
                  alt=""
                />
                <h3>Unity 3D Game development</h3>
              </div>

              <p className={`text-muted`}>
                Our{" "}
                <a href="https://www.sparkleappz.com/">skilled professionals</a>{" "}
                build games for various target platforms based on Unity
                framework. They ensure the best possible performance, quality,
                and responsiveness of applications - translating design ideas,
                concepts, and requirements into a functional and engaging game.
                We focus on sophisticated design and a quality product.
              </p>
            </li>
            <li className={`col-lg-4 col-sm-12`}>
              <div>
                <img
                  src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/seo.png?fit=80%2C80&ssl=1"
                  alt=""
                />
                <h3>SEO / SMM Digital Marketing</h3>
              </div>

              <p className={`text-muted`}>
                We offer digital marketing services at reasonable packages. Our{" "}
                <a href="https://www.sparkleappz.com/">
                  experienced SEO experts
                </a>{" "}
                use different optimization methods to increase customers to your
                website and keep you on the top of every popular and competitive
                search engines out there.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
