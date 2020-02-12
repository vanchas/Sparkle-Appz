import React from "react";
import s from "./blog.module.scss";

function BlogArticles() {
  return (
    <div className={s.blog_articles_wrap}>
      <div className={`${s.small_articles_block}`}>
        <div className={`${s.small_card} card bg-dark text-white`}>
          <div className={`card-img ${s.small_card_img_1}`}></div>
          <div className={`${s.small_card_content} card-img-overlay`}>
            <h5 className="card-title">
              <a href="https://www.sparkleappz.com/web-animation-3/">
                Web animation
              </a>
            </h5>
            <div className={``}>
              <span>DECENBER 27, 2018</span>
              <span>NO COMMENTS</span>
            </div>
            <p className="card-text">
              Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit
              ornare. Nulla ornare leo a tortor aliquam, quis interdum ex
              tempor. Quisque ultricies consequat suscipit.…
            </p>
            <a
              href="https://www.sparkleappz.com/web-animation-3/"
              className="btn btn-light text-dark"
            >
              Read More
            </a>
          </div>
        </div>
        <div className={`${s.small_card} card bg-dark text-white`}>
          <div className={`card-img ${s.small_card_img_2}`}></div>
          <div className={`${s.small_card_content} card-img-overlay`}>
            <h5 className="card-title">
              <a href="https://www.sparkleappz.com/web-animation-3/">
                Standardization between design
              </a>{" "}
              tools
            </h5>
            <div className={``}>
              <span>DECENBER 27, 2018</span>
              <span>NO COMMENTS</span>
            </div>
            <p className="card-text">
              Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit
              ornare. Nulla ornare leo a tortor aliquam, quis interdum ex
              tempor. Quisque ultricies consequat suscipit.…
            </p>
            <a
              href="https://www.sparkleappz.com/web-animation-3/"
              className="btn btn-light text-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <div className={`${s.big_articles_block}`}>
        <div className={`${s.big_card} container card`}>
          <a href="https://www.sparkleappz.com/sparkle-appz-mobile-app-development/">
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/07/ios-app.jpg?w=966&ssl=1"
              className="card-img-top"
              alt=""
            />
          </a>
          <div className={`${s.big_card_content} card-body`}>
            <h5 className="h3 card-title">
              Sparkle Appz - Mobile App Development
            </h5>
            <div className={`text-muted`}>
              <span>JULY 9, 2019</span>
              <span>NO COMMENTS</span>
            </div>
            <p className="card-text">
              SparkleAppz started off with android development and we feel pride
              to be considered as a specialist in Android App Development. Even
              though Android app development…
            </p>
            <a
              href="https://www.sparkleappz.com/sparkle-appz-mobile-app-development/"
              className="btn btn-dark text-white"
            >
              Read More
            </a>
          </div>
        </div>
        <div className={`${s.big_card} container card`}>
          <a href="https://www.sparkleappz.com/playful-illustration/">
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2018/12/blog05-free-img.jpg?resize=768%2C432&ssl=1"
              className="card-img-top"
              alt=""
            />
          </a>
          <div className={`${s.big_card_content} card-body`}>
            <h5 className="h3 card-title">Playful illustration</h5>
            <div className={`text-muted`}>
              <span>DECENBER 27, 2018</span>
              <span>NO COMMENTS</span>
            </div>
            <p className="card-text">
              Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit
              ornare. Nulla ornare leo a tortor aliquam, quis interdum ex
              tempor. Quisque ultricies consequat suscipit.…
            </p>
            <a
              href="https://www.sparkleappz.com/playful-illustration/"
              className="btn btn-dark text-white"
            >
              Read More
            </a>
          </div>
        </div>
        <div className={`${s.big_card} container card`}>
          <a href="https://www.sparkleappz.com/standardization-between-design-tools/">
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2018/12/blog04-free-img.jpg?resize=768%2C432&ssl=1"
              className="card-img-top"
              alt=""
            />
          </a>
          <div className={`${s.big_card_content} card-body`}>
            <h5 className="h3 card-title">
              Standardization between design tools
            </h5>
            <div className={`text-muted`}>
              <span>DECENBER 27, 2018</span>
              <span>NO COMMENTS</span>
            </div>
            <p className="card-text">
              Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit
              ornare. Nulla ornare leo a tortor aliquam, quis interdum ex
              tempor. Quisque ultricies consequat suscipit.…
            </p>
            <a
              href="https://www.sparkleappz.com/standardization-between-design-tools/"
              className="btn btn-dark text-white"
            >
              Read More
            </a>
          </div>
        </div>
        <div className={`${s.big_card} container card`}>
          <a href="https://www.sparkleappz.com/more-adventurous-colors/">
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2018/12/blog03-free-img.jpg?resize=768%2C432&ssl=1"
              className="card-img-top"
              alt=""
            />
          </a>
          <div className={`${s.big_card_content} card-body`}>
            <h5 className="h3 card-title">More adventurous colors</h5>
            <div className={`text-muted`}>
              <span>DECENBER 27, 2018</span>
              <span>NO COMMENTS</span>
            </div>
            <p className="card-text">
              Duis iaculis mattis rutrum. Sed iaculis magna sit amet suscipit
              ornare. Nulla ornare leo a tortor aliquam, quis interdum ex
              tempor. Quisque ultricies consequat suscipit.…
            </p>
            <a
              href="https://www.sparkleappz.com/more-adventurous-colors/"
              className="btn btn-dark text-white"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticles;
