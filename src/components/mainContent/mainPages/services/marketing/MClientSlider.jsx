import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./marketing.module.scss";

export default class MClientSlider extends React.Component {
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
        className={`container-fluid text-center ${s.who_we_worked_with_wrapper}`}
      >
        <h2>Who we've worked with</h2>
        <Slider {...settings} className={s.ClientSlider}>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/7.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/5.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/6.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/7.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/8.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/9.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/1.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/2.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/3.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img
              className={s.slide}
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/4.png?fit=300%2C207&ssl=1"
              alt=""
            />
          </div>
        </Slider>
      </section>
    );
  }
}
