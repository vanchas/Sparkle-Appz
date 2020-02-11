import React, { Component } from "react";
import s from "./nav.module.scss";
import { NavLink } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav
        className={`${s.navbar_wrap} navbar navbar-expand-lg navbar-dark bg-white`}
      >
        <a className="navbar-brand" href="#">
          <img
            src="https://www.sparkleappz.com/wp-content/uploads/2019/12/logo-187x66.png"
            alt="logo"
          />
        </a>
        <button
          className={`${s.nav_toggle} navbar-toggler`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${s.navbar_nav}  collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className={`${s.nav_item_wrap}  navbar-nav mr-auto`}>
            <li className="nav-item active">
              <NavLink
                className={s.nav_item}
                activeClassName={s.activeLink}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`${s.nav_item}`}
                activeClassName={s.activeLink}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={`nav-link text-dark dropdown-toggle ${s.drop_item} ${s.nav_item}`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                activeClassName={`${s.activeLink}`}
                to="/services"
              >
                Services
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                className={s.nav_item}
                activeClassName={s.activeLink}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={s.nav_item}
                activeClassName={s.activeLink}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={s.nav_item}
                activeClassName={s.activeLink}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={`text-primary ${s.button_get_free_quote} ${s.nav_item}`}
                activeClassName={s.activeLink}
                href="https://www.sparkleappz.com/contact/"
              >
                Get A Free Quote
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className={`${s.button_to_call} ${s.nav_item}`}
                href="https://www.sparkleappz.com/tel:+91773791591"
              >
                Call&nbsp;
                <img
                  src="https://www.sparkleappz.com/wp-content/uploads/2019/12/phone_icn.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
