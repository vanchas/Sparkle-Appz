import React from "react";
import s from "./blog.module.scss";
import { NavLink } from "react-router-dom";

function BlogHeader() {
  return (
    <div className={`${s.blog_header_wrap}`}>
      <div className={`${s.blog_header_text_block}`}>
        <h1>BLOG</h1>
        <div className={`${s.blog_header_text} text-muted`}>
          <p>
            At SparkleAppz, we have dedicated team who focus on your specific
            needs, therefore we have proven history of successful, long term
            relationships with 90+ clients, globally. Join SparkleAppz to add
            more value to your business.We believe in building the{" "}
            <b> creative</b> and
            <b>productive</b> applications and designs. Our mission is to offer
            custom software solutions and build niche market products that will
            allow the company to deploy faster go to market solutions for its
            clients.We will be pleased to see in our network, We always care of
            our customer, and never let our customer worry about anything.
          </p>
        </div>
      </div>
      <div className={`${s.blog_header_image_block}`}>
        <img
          src="https://i2.wp.com/www.sparkleappz.com/wp-content/uploads/2020/01/blog_img.png?resize=768%2C567&ssl=1"
          alt=""
        />
      </div>
      <div>
        <nav>
          <NavLink className={s.blog_link_btn} to="/portfolio">
            Check Out Our Porlfolio
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default BlogHeader;
