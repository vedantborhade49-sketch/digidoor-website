import { useEffect } from 'react';
import ScrollFrameHero from '../components/hero/ScrollFrameHero';
import HomeIntro from '../sections/home/HomeIntro';
import HomeWork from '../sections/home/HomeWork';
import HomeApproach from '../sections/home/HomeApproach';
import HomeServices from '../sections/home/HomeServices';
import HomeWhy from '../sections/home/HomeWhy';
import HomeSignals from '../sections/home/HomeSignals';
import HomeCTA from '../sections/home/HomeCTA';
import './Home.css';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home-page">
      <ScrollFrameHero />
      <HomeIntro />
      <HomeWork />
      <HomeApproach />
      <HomeServices />
      <HomeWhy />
      <HomeSignals />
      <HomeCTA />
    </main>
  );
}
