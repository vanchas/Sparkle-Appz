import React, { Component } from "react";
import s from "./about.module.scss";

export default class WhyWorkWithUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: 0,
      clients: 0,
      code: 0,
      awards: 0
    };
  }

  componentDidMount() {
    let a = 0, b = 0, c = 0, d = 0;
    let intervalA = setInterval(() => {
      if (a === 150) clearInterval(intervalA);
      return this.setState({
        projects: a++
      });
    }, 42);
    let intervalB = setInterval(() => {
      if (b === 140) clearInterval(intervalB);
      return this.setState({
        clients: b++
      });
    }, 40);
    let intervalC = setInterval(() => {
      if (c === 250) clearInterval(intervalC);
      return this.setState({
        code: c++
      });
    }, 20);
    let intervalD = setInterval(() => {
      if (d === 12) clearInterval(intervalD);
      return this.setState({
        awards: d++
      });
    }, 500);
  }

  render() {
    return (
      <div className={`container-fluid text-center ${s.why_work_with_us_wrap}`}>
        <h2>WHY WORK WITH US</h2>
        <ul className={s.why_work_with_us_list}>
          <li>
            
            <span>{this.state.projects}+</span>
            <h6>Projects Completed</h6>
          </li>
          <li>
            
            <span>{this.state.clients}+</span>
            <h6>Happy Clients</h6>
          </li>
          <li>
            
            <span>{this.state.code}K+</span>
            <h6>Lines Of Code</h6>
          </li>
          <li>
            <span>{this.state.awards}</span>
            <h6>Awards</h6>
          </li>
        </ul>
      </div>
    );
  }
}
