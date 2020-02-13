import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./services.module.scss";

export default class ServiceClientSlider extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      slide: 3
    }
  }

  componentDidMount() {
    if (this.wrapper.current.offsetWidth <= 769) {
      this.setState({
        slide: 1
      })
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
      <section ref={this.wrapper} className={`container-fluid text-center ${s.who_we_worked_with_wrapper}`}>
        <h2>WHO WE'VE WORKED WITH</h2>
        <Slider {...settings} className={s.ClientSlider}>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-ar_4HjkH/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-OtF0Nn1n/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/Untitled-1.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-mXsi37D9/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-vdSBo3hJ/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/tapcrew.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/nKcQzA-oTcA54_A/w:auto/h:auto/q:auto/https://i0.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-fXL0GCK7/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/riot.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-zYO-equf/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-S9FE84U6/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/opmen.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-kIaaDWDz/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-IoVrm1xg/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/nfl.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-KubKc_SD/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-gxFVVMtL/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/lime.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/DoAYIw-rp8neTvN/w:auto/h:auto/q:auto/https://i1.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-rUL9p9-1/w:512/h:512/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/cane.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-SMmtgHcK/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-uDsaAu8t/w:1024/h:1024/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/icon.png?w=1300&ssl=1"
              alt=""
            />
          </div>
          <div>
            <img className={s.slide}
              src="https://mlallqt2tcwu.i.optimole.com/v55z9Q-wBqjEKNl/w:auto/h:auto/q:auto/https://i2.wp.com/mlallqt2tcwu.i.optimole.com/KY9WIg-F0P7-9pR/w:225/h:225/q:auto/https:/www.sparkleappz.com/wp-content/uploads/2019/07/download.png?w=1300&ssl=1"
              alt=""
            />
          </div>
        </Slider>
      </section>
    );
  }
}
