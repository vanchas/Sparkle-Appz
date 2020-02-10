import React from "react";
import s from "./mainContent.module.scss";
import Home from "./mainPages/home/Home";
import About from "./mainPages/about/About";
import Services from "./mainPages/services/Services";
import Portfolio from "./mainPages/portfolio/Portfolio";
import Blog from "./mainPages/blog/Blog";
import Contact from "./mainPages/contact/Contact";
import { Switch, Route } from 'react-router-dom';

function MainContent() {
  return (
    <main className={s.main}>
      <Switch>
        <Route exact path="/home" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/services" render={() => <Services />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/blog" render={() => <Blog />} />
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
    </main>
  );
}

export default MainContent;
