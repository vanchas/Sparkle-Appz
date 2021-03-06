import React from "react";
import s from "./footer.module.scss";

function FootSocLinks() {
  return (
    <div className={s.social_links_block}>
      <ul className={s.social_links_list}>
        <li>
          <a href="https://facebook.com/sparkleappz">
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/fb.png?resize=40%2C40&ssl=1"
              alt=""
            />
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sparkleappz">
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/twitter.png?resize=40%2C40&ssl=1"
              alt=""
            />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sparkleappz/">
            <img
              src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/insta.png?resize=40%2C41&ssl=1"
              alt=""
            />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/sparkleappz/">
            <img
              src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/inkedin.png?resize=40%2C41&ssl=1"
              alt=""
            />
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://www.crunchbase.com/organization/sparkle-appz">
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/clutch.png?resize=40%2C41&ssl=1"
              alt=""
            />
            Clutch
          </a>
        </li>
        <li>
          <a href="https://www.upwork.com/o/companies/~01c5157f34fda672e3/">
            <img
              src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/upwork.png?resize=40%2C41&ssl=1"
              alt=""
            />
            Upwork
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FootSocLinks;
