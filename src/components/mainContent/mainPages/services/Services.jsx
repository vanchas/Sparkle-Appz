import React from 'react';
import s from './services.module.scss';
import ServicesHeader from './ServicesHeader';
import ServiceHelp from './ServiceHelp';
import AwesomeThings from './AwesomeThing';
import ServiceClientSlider from './ServicesClientSlider';
import ServicesContact from './ServicesContact';

function Services() {
  return (
    <div className={s.services_wrap}>
      <ServicesHeader />
      <ServiceHelp />
      <AwesomeThings />
      <ServiceClientSlider />
      <ServicesContact />
    </div>
  );
}

export default Services;
