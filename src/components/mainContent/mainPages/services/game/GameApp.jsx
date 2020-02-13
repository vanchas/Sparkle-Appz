import React from "react";
import s from "./game.module.scss";

function GameApp() {
  return (
    <div className={` ${s.game_app_wrap}`}>
      <h2 className={`text-center`}>UNITY 3D GAME DEVELOPMENT INCLUDES</h2>
      <div className={s.block_cards}>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/unity.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Unity Game</h5>
          <p className={`text-muted`}>
            When it comes to game development, Unity has proved to be highly
            effective and easy to use game engine. With its wide range of
            development tools and rendering, it makes both 2D and 3D games
            development a breeze across different platforms. We have developed
            and delivered a wide range of games over the past 10 years.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/html5-1.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>HTML5 Game</h5>
          <p className={`text-muted`}>
            We create feature-rich and interactive HTML5 games that reach the
            highest levels of user engagement. Regardless of the size and
            complexity of your game, our expert mobile game developers will
            create an unforgettable gaming experience with state-of-the-art
            technologies and innovative development methods.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/2d3d.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>2D And 3D Game</h5>
          <p className={`text-muted`}>
            Sparkleappz offers exceptional 2D and 3D game development services
            across different platforms including iOS, Android and Windows phone.
            Our team of expert game developers and designers harness the power
            of the latest technologies and tools to deliver seamless games.
          </p>
        </div>
        <div className={s.white_card}>
          <img
            src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/mobile_game.png?fit=99%2C99&ssl=1"
            alt=""
          />
          <h5>Mobile Game</h5>
          <p className={`text-muted`}>
            We believe gaming is more than just good graphics and sophisticated
            coding. Our talented team of highly professional and experienced
            game developers has a knack for going above and beyond to create
            games that keep people hooked on for hours. Creating chart-topping
            games for both iOS and Android is both a passion and a hobby for
            Cubix’s ingenious game developers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameApp;
