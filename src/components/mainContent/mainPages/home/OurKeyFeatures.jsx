import React from "react";
import s from "./home.module.scss";

export default class OurKeyFeatures extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.features_wrap}`}>
        <h2>OUR KEY FEATURES</h2>
        <p className={`${s.subheading}`}>
          <b>
            Services That We Deliver Makes Us Dignified As One of The Top App
            Development Companies.
          </b>
        </p>
        <ul className={`${s.features_list}`}>
          <li>
            <div>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/client.png?fit=78%2C78&ssl=1"
                alt=""
              />
              <h3>1. Client Centic Development</h3>
            </div>
            <p className={`text-muted`}>
              We are the one that levarages best over web,mobiles & blockchain
              soloutions to the clients by tailoring as per their business
              requirements.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/agile-1.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <h3>2. Agile Development</h3>
            </div>
            <p className={`text-muted`}>
              We follow Agile Development process which help us to do -liver the
              projects with utmost quality and solid nproducts.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/dedicated.png?fit=68%2C78&ssl=1"
                alt=""
              />
              <h3>3. Dedicated Develop Team</h3>
            </div>
            <p className={`text-muted`}>
              We assign a cost-effective dedicated team to all our projects that
              not only assures quality but gives excellent support and
              satisfaction to our valueable clients.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/support.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <h3>4. Excellent Support</h3>
            </div>
            <p className={`text-muted`}>
              We are always there to assist our clients in every possible manner
              in each project phase. Our techniqal team work hard to ensure that
              the final products meets the clients satisfactions.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/databackup.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <h3>5. Data Backups</h3>
            </div>
            <p className={`text-muted`}>
              Regular backups has helped us to survive in every extreme
              conditions. we carefully clients projects backups to deal with
              misfortunes in the best possible manners.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/dataprotection.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <h3>6. Data Protection</h3>
            </div>
            <p className={`text-muted`}>
              By signiing NDA, our company ensures the utmost safety of all your
              provid data. we deliver best products to our fortune clients by
              maintaining confidentialty.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/quality-1.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <h3>7. Quality Deliverance</h3>
            </div>
            <p className={`text-muted`}>
              We belive in delivering quality products to our clients by
              assuring all their project satisfaction in best industry
              competetive price.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/enhancement.png?fit=80%2C80&ssl=1"
                alt=""
              />
              <h3>8. Enhancement</h3>
            </div>
            <p className={`text-muted`}>
              During Discovery , Designing and development phase, our techniqal
              team always there to provide suggestions and edits that impresive
              their product in best possible manners.
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
