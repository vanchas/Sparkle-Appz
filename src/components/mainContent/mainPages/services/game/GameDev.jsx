import React from 'react';
import s from './game.module.scss';
import GameHeader from './GameHeader';
import GameGlimpse from './GameGlimps';
import GameBuild from './GameBuild';
import GameApp from './GameApp';
import GameQuestions from './GameQuestion';
import ClientSlider from '../../home/ClientSlider';
import Awesome from '../ios/Awesome';
import FootSocLinks from '../../../../footer/FootSocLinks';

function GameDev() {
  return (
    <div className={s.game_dev_wrap}>
      <GameHeader />
      <GameGlimpse />
      <GameBuild />
      <GameApp />
      <GameQuestions />
      <ClientSlider />
      <Awesome />
      <FootSocLinks />
    </div>
  );
}

export default GameDev;
