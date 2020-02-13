import React from 'react';
import s from './uiux.module.scss';
import UiUxHeader from './UiUxHeader';
import UiUxGlimpse from './UiUxGlimpse';
import UiUxArticle from './UiUxArticle';
import UiUxIncludes from './UiUxIncludes';
import UiUxQuestions from './UiUxQuestions';
import MClientSlider from '../marketing/MClientSlider';
import AwesomeMarketing from '../marketing/AwesomeMarketing';
import FootSocLinks from '../../../../footer/FootSocLinks';

function UiUx() {
  return (
    <div className={s.ui_ux_wrap}>
      <UiUxHeader />
      <UiUxGlimpse />
      <UiUxArticle />
      <UiUxIncludes />
      <UiUxQuestions />
      <MClientSlider />
      <AwesomeMarketing />
      <FootSocLinks />
    </div>
  );
}

export default UiUx;
