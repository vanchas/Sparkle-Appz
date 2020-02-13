import React from "react";
import s from "./marketing.module.scss";
import { NavLink } from "react-router-dom";

function MarketingGlimpse() {
  return (
    <div className={`${s.glimpse_wrap}`}>
      <h2>GLIMPSE OF WORK</h2>
      <div className={`text-muted`}>
        <p>
          SEO is a digital marketing <b> technique</b> and is meant to maximize
          the number of visitors to customer’s site.
        </p>
        <p>
          We are expert in the search engine optimization. We have a proven
          track record for crafting effective Internet marketing strategies with
          measurable, long-term results. When we work with <b> clients</b> to
          improve their search engine optimization, we focus on three different
          aspects: technical optimization, on-site <b> optimization</b>, and
          off-site optimization. We keep our clients up-to-date on all tactics
          we’re using to <b> improve</b> search engine results.
        </p>
      </div>
      <NavLink className={s.link_btn} to="/portfolio">
        See Our Work
      </NavLink>
    </div>
  );
}

export default MarketingGlimpse;
