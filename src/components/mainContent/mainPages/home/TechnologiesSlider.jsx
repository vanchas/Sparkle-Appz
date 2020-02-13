import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./home.module.scss";

export default class ClientSlider extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      slide: 5
    };
  }

  componentDidMount() {
    if (this.wrapper.current.offsetWidth <= 769) {
      this.setState({
        slide: 1
      });
    }
  }

  reportWindowSize = () => {
    window.innerWidth < 768
      ? this.setState({
          slide: 1
        })
      : this.setState({
          slide: 5
        });
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.slide,
      slidesToScroll: 1
    };

    window.onresize = this.reportWindowSize;

    return (
      <section
        ref={this.wrapper}
        className={`container-fluid text-center ${s.technologies_wrap}`}
      >
        <h2>TECHNOLOGIES WE USE</h2>
        <Slider {...settings}>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/android-1.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/swift.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/react.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/flutter.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/java.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/js.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/node.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/php.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/wordpress.png?fit=377%2C260&ssl=1"
              alt=""
            />
          </div>
        </Slider>
      </section>
    );
  }
}