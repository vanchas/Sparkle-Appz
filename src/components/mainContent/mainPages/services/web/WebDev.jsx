import React from 'react';
import s from './web.module.scss';
import WebHeader from './WebHeader';
import Glimpse from '../ios/Glimpse';
import BuildWeb from './BuildWeb';
import WebApp from './WebApp';
import WebQuestions from './WebQuestions';
import ClientSlider from '../../home/ClientSlider';
import Awesome from '../ios/Awesome';
import FootSocLinks from '../../../../footer/FootSocLinks';

function WebDev() {
  return (
    <div className={s.web_dev_wrap}>
      <WebHeader />
      <Glimpse />
      <BuildWeb />
      <WebApp />
      <WebQuestions />
      <ClientSlider />
      <Awesome />
      <FootSocLinks/>
    </div>
  );
}

export default WebDev;
