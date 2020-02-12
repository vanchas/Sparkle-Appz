import React from "react";
import s from "./mainContent.module.scss";
import Home from "./mainPages/home/Home";
import About from "./mainPages/about/About";
import Services from "./mainPages/services/IOSDev";
import Portfolio from "./mainPages/portfolio/Portfolio";
import Blog from "./mainPages/blog/Blog";
import Contact from "./mainPages/contact/Contact";
import { Switch, Route } from 'react-router-dom';
import IOSDev from "./mainPages/services/IOSDev";
import AndroidDev from "./mainPages/services/AndroidDev";
import WebDev from "./mainPages/services/WebDev";
import GameDev from "./mainPages/services/GameDev";
import MarketingServ from "./mainPages/services/MarketingServ";
import UiUx from "./mainPages/services/UiUx";

function MainContent() {
  return (
    <main className={s.main}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/services" render={() => <Services />} />
        <Route path="/portfolio" render={() => <Portfolio />} />
        <Route path="/blog" render={() => <Blog />} />
        <Route path="/contact" render={() => <Contact />} />

        <Route path="/IOSDev" render={() => <IOSDev />} />
        <Route path="/AndroidDev" render={() => <AndroidDev />} />
        <Route path="/WebDev" render={() => <WebDev />} />
        <Route path="/3DGameDev" render={() => <GameDev />} />
        <Route path="/MarketingServices" render={() => <MarketingServ />} />
        <Route path="/Ui/UxDesignServices" render={() => <UiUx />} />
      </Switch>
    </main>
  );
}

export default MainContent;
