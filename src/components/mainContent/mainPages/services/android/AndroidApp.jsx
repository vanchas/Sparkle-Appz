import React from "react";
import s from "./android.module.scss";

function AndroidApp() {
  return (
    <div className={` ${s.android_app_wrap}`}>
      <h2 className={`text-center`}>ANDROID APP DEVELOPMENT INCLUDES</h2>
      <div className={s.block_cards}>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/java-1.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Java</h5>
          <p className={`text-muted`}>
            With the immense inclination of people towards the Android world,
            Android Smartphone becomes the most selling device. In order to
            serve in this field, we come up with the talented and keen
            developers to build secure & reliable apps for Android Smartphone.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i0.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/kotlin.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Kotlin</h5>
          <p className={`text-muted`}>
            In order to develop latest, expressive and safe android apps, Kotlin
            is the popular programming language specially designed for android
            app development. Our veteran team of developers holds extensive
            knowledge in kotlin to develop safe & secure code.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/android_mobile.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Android Mobile</h5>
          <p className={`text-muted`}>
            Due to the high resolution & widescreen, tablets are in demand. In
            order to make reliable & secure apps for android tablets, our team
            gained expertise in related app development technology & develop
            robust apps for our customers which help them to make their business
            productive.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/android_tab.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Android Tablet</h5>
          <p className={`text-muted`}>
            As Android's growth of TV has changed the picture of entertainment
            and has given TV Apps an all new edge. We have a well-experienced
            team of Android TV app developers, who lets you enjoy the new
            definition of TV through engaging & stunning apps.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AndroidApp;
