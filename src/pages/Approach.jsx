import { useEffect } from 'react';
import ProcessRail from '../sections/approach/ProcessRail';
import ApproachHero from '../sections/approach/ApproachHero';
import QuestionSystem from '../sections/approach/QuestionSystem';
import UnderstandStage from '../sections/approach/UnderstandStage';
import DefineStage from '../sections/approach/DefineStage';
import StrategyStage from '../sections/approach/StrategyStage';
import CreativeStage from '../sections/approach/CreativeStage';
import CommunicationStage from '../sections/approach/CommunicationStage';
import ActivationStage from '../sections/approach/ActivationStage';
import MeasureStage from '../sections/approach/MeasureStage';
import ApproachLoop from '../sections/approach/ApproachLoop';
import ApproachCTA from '../sections/approach/ApproachCTA';
import './Approach.css';

export default function Approach() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="approach-page">
      <ProcessRail />
      
      <ApproachHero />
      <QuestionSystem />
      
      {/* 01 WHITE */}
      <UnderstandStage />
      
      {/* 02 DEEP NAVY */}
      <DefineStage />
      
      {/* 03 WHITE */}
      <StrategyStage />
      
      {/* 04 IMAGE/WHITE */}
      <CreativeStage />
      
      {/* 05 DEEP NAVY */}
      <CommunicationStage />
      
      {/* 06 IMAGE/DARK */}
      <ActivationStage />
      
      {/* 07 LIGHT BLUE */}
      <MeasureStage />
      
      {/* LOOP DEEP NAVY */}
      <ApproachLoop />

      <ApproachCTA />
    </main>
  );
}
