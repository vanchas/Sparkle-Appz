import React from 'react';
import s from './ios.module.scss';
import IOSHeader from './IOSHeader';
import Glimpse from './Glimpse';
import BuildApp from './BuildApp';
import IosApp from './IosApp';
import Questions from './Questions';
import ClientSlider from '../../home/ClientSlider';
import AwesomeThings from './Awesome';
import FootSocLinks from '../../../../footer/FootSocLinks';

function IOSDev() {
  return (
    <div className={s.ios_dev_wrap}>
      <IOSHeader />
      <Glimpse />
      <BuildApp />
      <IosApp />
      <Questions />
      <ClientSlider />
      <AwesomeThings />
      <FootSocLinks />
    </div>
  );
}

export default IOSDev;
