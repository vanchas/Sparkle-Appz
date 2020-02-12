import React from "react";
import s from "./about.module.scss";

function History() {
  return (
    <div className={`text-center ${s.history_wrap}`}>
      <h2>OUR HISTORY</h2>
      <p className={`text-muted`}>
        
        <a href="https://www.sparkleappz.com/">Sparkle Appz</a>  was started in 2011 by a small group of dedicated software professionals. We started our company with <a href="https://www.sparkleappz.com/"> web application</a> development and soon embarked <a href="https://www.sparkleappz.com/android-app-development/"> mobile app development</a> after 1 successful year of productivity.
        </p>
        <br/>
        <p className={`text-muted`}>
        Today, SparkleAppz being one of the best software company in the Jodhpur region, with a team of 10 skilled developers, have developed more than 100 applications with <b> 90+ satisfied</b> <a href="https://www.sparkleappz.com/android-app-development/"> clients</a>. During this decade, we have been working closely with our clients from concept to delivery, helping to change their visions into <a href="https://www.sparkleappz.com/android-app-development/"> attractive</a> <b> and useful products</b>. Every project we deliver is given our supreme 
      </p>
    </div>
  );
}

export default History;
