import React from 'react';
import s from './marketing.module.scss';
import MarketingHeader from './MarketingHeader';
import MarketingGlimpse from './MarketingGlimpse';
import BoostYourApp from './BoostYourApp';
import MarketingIncludes from './MarketingIncludes';
import MarketingQuestions from './MarketingQuestions';
import MClientSlider from './MClientSlider';
import AwesomeMarketing from './AwesomeMarketing';
import FootSocLinks from '../../../../footer/FootSocLinks';

function MarketingServ() {
  return (
    <div className={s.marketing_serv_wrap}>
      <MarketingHeader />
      <MarketingGlimpse />
      <BoostYourApp />
      <MarketingIncludes />
      <MarketingQuestions />
      <MClientSlider />
      <AwesomeMarketing />
      <FootSocLinks />
    </div>
  );
}

export default MarketingServ;
