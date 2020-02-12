import React from 'react';
import s from './about.module.scss';
import AboutHeader from './AboutHeader';
import WhyWorkWithUs from './WhyWorkWithUs';
import History from './OurHistory';
import WhoWeAre from './WhoWeAre';
import ProcessWeFollow from '../home/ProcessWeFollow';
import Ranking from '../home/Ranking';
import ClientSlider from '../home/ClientSlider'
import SixDProcess from './6DProcess';
import WhyChooseUs from './WhyChooseUs';
import Team from '../home/Team';
import WorkTogether from './WorkTogether';
import FootSocLinks from '../../../footer/FootSocLinks';

function About() {
  return (
    <section className={s.about_wrapper}>
      <AboutHeader />
      <WhyWorkWithUs />
      <History />
      <WhoWeAre />
      <ProcessWeFollow />
      <Ranking />
      <ClientSlider />
      <SixDProcess />
      <WhyChooseUs />
      <Team />
      <WorkTogether />
      <FootSocLinks />
    </section>
  );
}

export default About;
