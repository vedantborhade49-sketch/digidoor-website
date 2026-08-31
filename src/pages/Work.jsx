import { useEffect } from 'react';
import WorkHero from '../sections/work/WorkHero';
import FeaturedWork from '../sections/work/FeaturedWork';
import BeyondCampaign from '../sections/work/BeyondCampaign';
import Capabilities from '../sections/work/Capabilities';
import WorkCTA from '../sections/work/WorkCTA';
import './Work.css';

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="work-page">
      <WorkHero />
      <FeaturedWork />
      <BeyondCampaign />
      <Capabilities />
      <WorkCTA />
    </main>
  );
}
