import React from 'react';
import s from './android.module.scss';
import AndroidHeader from './AndroidHeader';
import Glimpse from '../ios/Glimpse';
import BuildAndroidApp from './BuildAndroidApp';
import AndroidApp from './AndroidApp';
import AndQuestions from './AndQuestions';
import ClientSlider from '../../home/ClientSlider';
import Awesome from '../ios/Awesome';
import FootSocLinks from '../../../../footer/FootSocLinks';

function AndroidDev() {
  return (
    <div className={s.android_dev_wrap}>
      <AndroidHeader />
      <Glimpse />
      <BuildAndroidApp />
      <AndroidApp />
      <AndQuestions />
      <ClientSlider />
      <Awesome />
      <FootSocLinks />
    </div>
  );
}

export default AndroidDev;
