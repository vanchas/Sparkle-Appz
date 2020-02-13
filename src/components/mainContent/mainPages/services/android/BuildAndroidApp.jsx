import React from "react";
import s from "./android.module.scss";
import { NavLink } from "react-router-dom";

function BuildAndroidApp() {
  return (
    <div className={`text-center ${s.build_wrap}`}>
      <h2>BUILD AN ANDROID APP FOR ANY DEVICE</h2>
      <p className={`text-muted`}>
        Our Mobile <a href="https://www.sparkleappz.com/"> Application</a> team
        is one of the best assets for the{" "}
        <a href="https://www.sparkleappz.com/"> development</a> of{" "}
        <a href="https://www.sparkleappz.com/"> Android</a>, iOS and Windows
        phone. You give us an idea and we will craft you in an extraordinary
        piece of ingenuity, that will perform better than you dream of it.At{" "}
        <a href="https://www.sparkleappz.com/"> SparkleAppz</a> we have an
        experienced team whose{" "}
        <a href="https://www.sparkleappz.com/"> expertise</a> lie in making your
        app a success.
      </p>
      <div className={s.cards_block}>
        <div className={s.card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/Life-Listr_inner.jpg?w=1000&ssl=1"
            alt=""
          />
          <h5 className={`h3`}>insta cleaner</h5>
          <p className={`text-muted`}>
            Clean your instagram by mass deleting and blocking users.
          </p>
        </div>
        <div className={s.card}>
          <img
            src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2019/05/IG-Cleaner_inner.jpg?w=500&ssl=1"
            alt=""
          />
          <h5 className={`h3`}>More Likes</h5>
          <p className={`text-muted`}>
            Get instagram likes and followers on your insta page.
          </p>
        </div>
      </div>
      <NavLink to="/portfolio" className={s.navlink}>
        SHOW MORE PROJECTS
      </NavLink>
    </div>
  );
}

export default BuildAndroidApp;
