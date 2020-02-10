import React from "react";
import s from "./header.module.scss";
import Nav from "./nav/Nav";

function Header() {
  return (
    <header className={s.header}>
      <section className={s.header_contact_info}>
        <ul>
          <li>
            <a href="tel:+917737791591">
              <img src="https://www.sparkleappz.com/wp-content/uploads/2019/12/phone_icn.png" alt="phone" />{" "}
              +91-7737791591
            </a>
          </li>
          <li>
            <a href="mailto:info@sparkleappz.com">
              <img src="https://www.sparkleappz.com/wp-content/uploads/2019/12/email_icn.png" alt="email" />{" "}
              info@sparkleappz.com
            </a>
          </li>
        </ul>
      </section>
      <section className={s.header_nav}>
        <Nav />
      </section>
    </header>
  );
}

export default Header;
