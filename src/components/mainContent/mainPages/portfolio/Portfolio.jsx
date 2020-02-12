import React from 'react';
import s from './portfolio.module.scss';
import PortfolioHeader from './PortfolioHeader';
import OurProj from './OurProj';
import ClientSlider from '../home/ClientSlider';
import WorkTogether from '../about/WorkTogether';
import FootSocLinks from '../../../footer/FootSocLinks';

function Portfolio() {
  return (
    <section className={s.portfolio_wrapper}>
      <PortfolioHeader />
      <OurProj />
      <ClientSlider />
      <WorkTogether />
      <FootSocLinks />
    </section>
  );
}

export default Portfolio;
