import React, { Component } from "react";
import s from "./nav.module.scss";
import { NavLink } from "react-router-dom";
// import {
//   Navbar,
//   NavDropdown,
//   Button,
//   Item,
//   Brand,
//   Collapse,
//   Divider
// } from "react-bootstrap";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar className={s.navbar} color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <a href="">
              <img
                src="https://www.sparkleappz.com/wp-content/uploads/2019/12/logo-187x66.png"
                alt="logo"
              />
            </a>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            className={s.nav_toggle}
            onClick={this.toggleCollapse}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav className={s.navbar_nav} right>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBNavLink to="#!">
                  <NavLink
                    className={s.nav_item}
                    activeClassName={s.activeLink}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBNavLink to="#!">
                  <NavLink
                    className={s.nav_item}
                    activeClassName={s.activeLink}
                    to="/about"
                  >
                    About
                  </NavLink>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <NavLink
                      className={s.nav_item}
                      // className="mr-2"
                      activeClassName={s.activeLink}
                      to="/services"
                    >
                      Services
                      <i>&#x2304;</i>
                    </NavLink>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem className={s.dropdown_item} href="#!">
                      Action
                    </MDBDropdownItem>
                    <MDBDropdownItem className={s.dropdown_item} href="#!">
                      Another Action
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBNavLink to="#!">
                  <NavLink
                    className={s.nav_item}
                    activeClassName={s.activeLink}
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBNavLink to="#!">
                  <NavLink
                    className={s.nav_item}
                    activeClassName={s.activeLink}
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBNavLink to="#!">
                  <NavLink
                    className={s.nav_item}
                    activeClassName={s.activeLink}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className={s.nav_item_wrap}>
                <MDBNavLink to="#!">
                  <a
                    className={`${s.button_get_free_quote} ${s.nav_item}`}
                    href="https://www.sparkleappz.com/contact/"
                  >
                    Get A Free Quote
                  </a>
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
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
