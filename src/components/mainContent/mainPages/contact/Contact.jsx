import React from "react";
import s from "./contact.module.scss";
import ContactHeader from "./ContactHeader";
import ReachUs from "../home/ReachUs";
import ClientSlider from '../home/ClientSlider';
import CommentSlider from '../home/CommentSlider';
import FootSocLinks from '../../../footer/FootSocLinks';

function Contact() {
  return (
    <section className={s.contact_wrapper}>
      <ContactHeader />
      <ReachUs />
      <ClientSlider />
      <CommentSlider />
      <FootSocLinks />
    </section>
  );
}

export default Contact;
