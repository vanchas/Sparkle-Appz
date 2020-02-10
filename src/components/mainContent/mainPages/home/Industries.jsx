import React from "react";
import s from "./home.module.scss";

export default class Industries extends React.Component {
  render() {
    return (
      <section className={`container-fluid text-center ${s.industries_wrap}`}>
        <h2>INDUSTRIES WE SERVE</h2>
        <p className={s.subheading}>
          <b>
            Here,We make almost every genere of application of applications. You
            named it and we build it.
          </b>
        </p>

        <div className={`container-fluid ${s.industries_list}`}>
          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/ecommerce.png?fit=120%2C120&ssl=1"
              alt=""
            />
            <h3>Retail, Ecommerce</h3>
          </div>

          <div>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/education.png?fit=110%2C110&ssl=1"
              alt=""
            />
            <h3>Education & e-learning</h3>
          </div>

          <div>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/fitness.png?fit=118%2C103&ssl=1"
              alt=""
            />
            <h3>Healthcare & Fitness</h3>
          </div>
          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/logistic.png?fit=118%2C118&ssl=1"
              alt=""
            />
            <h3>Logistic & Distribution.</h3>
          </div>

          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/social.png?fit=118%2C118&ssl=1"
              alt=""
            />
            <h3>Social Networking</h3>
          </div>

          <div>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/realestate.png?fit=118%2C118&ssl=1"
              alt=""
            />
            <h3>Real Estate</h3>
          </div>

          <div>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/travel-1.png?fit=118%2C118&ssl=1"
              alt=""
            />
            <h3>Travel & Hospitality</h3>
          </div>

          <div>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/food.png?fit=120%2C110&ssl=1"
              alt=""
            />
            <h3>Food & Restaurants</h3>
          </div>

          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/ondemand.png?fit=120%2C106&ssl=1"
              alt=""
            />
            <h3>On-Demand Solutions</h3>
          </div>

          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/gaming.png?fit=118%2C118&ssl=1"
              alt=""
            />
            <h3>Gaming</h3>
          </div>
        </div>
      </section>
    );
  }
}
