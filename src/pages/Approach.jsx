import { useEffect } from 'react';
import ApproachHero from '../sections/approach/ApproachHero';
import WhyApproach from '../sections/approach/WhyApproach';
import ApproachIntro from '../sections/approach/ApproachIntro';
import ApproachJourney from '../sections/approach/ApproachJourney';
import ConnectedDisciplines from '../sections/approach/ConnectedDisciplines';
import IdeaToMarket from '../sections/approach/IdeaToMarket';
import Success from '../sections/approach/Success';
import ApproachPhilosophy from '../sections/approach/ApproachPhilosophy';
import ApproachCTA from '../sections/approach/ApproachCTA';
import './Approach.css';

export default function Approach() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="approach-page">
      <ApproachHero />
      <WhyApproach />
      <ApproachIntro />
      <ApproachJourney />
      <ConnectedDisciplines />
      <IdeaToMarket />
      <Success />
      <ApproachPhilosophy />
      <ApproachCTA />
    </main>
  );
}
