import React from "react";
import s from "./home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CommentSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section className={`container-fluid text-center ${s.client_comment_wrap}`}>
        <h2 className={`h1`}>WHAT CLIENTS SAY</h2>
        <Slider {...settings} className={s.commnets_slider_wrap}>
          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/ryan.jpg?ssl=1"
              alt=""
            />
            <p className={`text-muted`}>
              Our first app “Alleycat” was developed by them, which was related
              to California tourism, they delivered it very well, I will hire
              them again.
            </p>
            <h5>RYAN SCHMALTZ</h5>
            <i>&mdash;</i><br/>
            <span className={`text-muted`}>Emerging Technology</span>
          </div>
          <div>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/taj.jpeg?ssl=1"
              alt
            />
            <p className={`text-muted`}>
              Sparkle Appz, helped us to make our first dating app called
              “Hotspot”, experience with this team was really good.
            </p>
            <h5>Taj Dhunay</h5>
            <i>&mdash;</i><br/>
            <span className={`text-muted`}>The sound pipe media</span>
          </div>
          <div>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/kalpesh.jpeg?ssl=1"
              alt
            />
            <p className={`text-muted`}>
              Working with Sparkle Appz team for mobile app development was
              really good and would like to work with them again.
            </p>
            <h5>Kalpesh Modha</h5>
            <i>&mdash;</i><br/>
            <span className={`text-muted`}>Opmen </span>
          </div>
          <div>
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/06/haseeb.jpg?ssl=1"
              alt
            />
            <p className={`text-muted`}>
              Expert developer in VPN app development for all platforms, he
              knows how to set up the server properly and make them fast.
            </p>
            <h5>Haseeb Kamanger</h5>
            <i>&mdash;</i><br/>
            <span className={`text-muted`}>
              Cane Technologies.
            </span>
          </div>
          <div>
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/04/josh.jpeg?ssl=1"
              alt
            />
            <p className={`text-muted`}>
              Surya is great to work with. He understood my deadline and was
              able to deliver an excellent bug-free app.
            </p>
            <h5>Josh Axelmen.</h5>
            <i>&mdash;</i><br/>
            <span className={`text-muted`}>Riot Games</span>
          </div>
          <div>
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/04/dane.jpeg?ssl=1"
              alt
            />
            <p className={`text-muted`}>
              Sparkle Appz is Perfect in every way! Work was completed extremely
              fast. Great team to work with. Would highly recommend to anyone!
            </p>
            <h5>Dane Homenick</h5>
            <i>&mdash;</i><br/>
            <span className={`text-muted`}>DANECO LTD.</span>
          </div>
        </Slider>
      </section>
    );
  }
}
