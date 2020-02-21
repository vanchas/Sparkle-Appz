import React, { Component } from "react";
import s from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import $ from "jquery";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount = () => {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler").addClass("collapsed");

    $(".nav-item")
      .not(".dropdown-toggle")
      .on("click", () => {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      });
  };

  render() {
    return (
      <nav
        className={`${s.navbar_wrap} navbar navbar-expand-lg navbar-dark bg-white`}
      >
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://www.sparkleappz.com/wp-content/uploads/2019/12/logo-187x66.png"
            alt="logo"
          />
        </NavLink>
        <button
          className={`${s.nav_toggle} navbar-light navbar-toggler`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`${s.toggler_icon} navbar-toggler-icon`} />
        </button>

        <div
          className={`${s.navbar_nav} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className={`${s.nav_item_wrap}  navbar-nav`}>
            <li className="nav-item active">
              <NavLink className={s.nav_item} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`${s.nav_item}`} to="/about">
                About
              </NavLink>
            </li>
            <li className={`${s.drom_item} nav-item dropdown`}>
              <NavLink
                className={` nav-link dropdown-toggle ${s.drop_link} ${s.nav_item}`}
                to="/services"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </NavLink>
              <div
                className={`${s.drop_menu} dropdown-menu`}
                aria-labelledby="navbarDropdown"
              >
                <NavLink
                  className={`${s.drop_link} dropdown-item`}
                  to="/IOSDev"
                >
                  <Icon className={s.drop_item_icon}>keyboard_arrow_right</Icon>
                  IOS App Development
                </NavLink>
                <NavLink
                  className={`${s.drop_link} dropdown-item`}
                  to="/AndroidDev"
                >
                  <Icon className={s.drop_item_icon}>keyboard_arrow_right</Icon>
                  Android App Development
                </NavLink>
                <NavLink
                  className={`${s.drop_link} dropdown-item`}
                  to="/WebDev"
                >
                  <Icon className={s.drop_item_icon}>keyboard_arrow_right</Icon>
                  Websites Development Services
                </NavLink>
                <NavLink
                  className={`${s.drop_link} dropdown-item`}
                  to="/3DGameDev"
                >
                  <Icon className={s.drop_item_icon}>keyboard_arrow_right</Icon>
                  Unity 3D Game Development
                </NavLink>
                <NavLink
                  className={`${s.drop_link} dropdown-item`}
                  to="/MarketingServices"
                >
                  <Icon className={s.drop_item_icon}>keyboard_arrow_right</Icon>
                  Digital Marketing Services
                </NavLink>
                <NavLink
                  className={`${s.drop_link} dropdown-item`}
                  to="/Ui/UxDesignServices"
                >
                  <Icon className={s.drop_item_icon}>keyboard_arrow_right</Icon>
                  UI/UX Design Services
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className={s.nav_item} to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={s.nav_item} to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={s.nav_item} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className={`${s.btn_group} nav-item`}>
              <NavLink
                to="/contact"
                className={` ${s.button_get_free_quote}`}
                href="https://www.sparkleappz.com/contact/"
              >
                Get A Free Quote
              </NavLink>
              <span>
                <a
                  className={`${s.button_to_call}`}
                  href="https://www.sparkleappz.com/tel:+91773791591"
                >
                  Call&nbsp;
                  <Icon className={s.phone_icon}>phone_enabled</Icon>{" "}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
