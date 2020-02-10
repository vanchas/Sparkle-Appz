import React from "react";
import s from "./footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={s.footer}>
      <div>
        <ul>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Clutch</a>
          </li>
          <li>
            <a href="">Upwork</a>
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://i1.wp.com/www.sparkleappz.com/wp-content/uploads/2019/12/logo.png?fit=239%2C84&ssl=1"
          alt="Sparkle Appz"
        />
        <p>
          <a href="https://www.sparkleappz.com/">SparkleAppz</a> is a
          professional IT solution and web development company. We provide
          complete web design and IT services to make your product successful in
          market with eye-catching outlook and appropriate web design. We put
          together our delicate, exceptional methods by building in our personal
          intensive experience. Our own strategy supplies the drive and
          ready-to-use design necessary to deliver excellent.
        </p>
      </div>
      <div>
        <h3>Important Links</h3>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3>Useful Links</h3>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link to="/ios">IOS App Development</Link>
            </li>
            <li>
              <Link to="/android">Android App Development</Link>
            </li>
            <li>
              <Link to="/website_development">Website Development</Link>
            </li>
            <li>
              <Link to="/UI/UX">UI/UX Design Services</Link>
            </li>
            <li>
              <Link to="/3d">Unity 3D Game Developmen</Link>
            </li>
            <li>
              <Link to="/SEO/SMM">SEO / SMM Digital Marketing</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h3>Get In Touch</h3>
        <div>
          <h5>Headquarter</h5>
          <address>10, Paota, Jodhpur, Rajasthan, India.</address>
        </div>
        <div>
          <h5>Canada Office</h5>
          <address>
            Canada Office 100 city centre drive mississauga, Ontario, Canada.
          </address>
        </div>
        <a href="mailto:info@sparkleappz.com">info@sparkleappz.com</a>
        <a href="tel:+91-7737791591">+91-7737791591</a>
        <a href="https://join.skype.com/invite/nPqpk4L3gXw2">Aheadtechno</a>
      </div>
      <p>Copyright © 2020 Sparkle Appz | All rights reserved.</p>
    </footer>
  );
}

export default Footer;
