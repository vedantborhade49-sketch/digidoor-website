import CareerHero from '../sections/career/CareerHero';
import WhyDigidoor from '../sections/career/WhyDigidoor';
import CareerDisciplines from '../sections/career/CareerDisciplines';
import WorkYouWillTouch from '../sections/career/WorkYouWillTouch';
import HowWeWork from '../sections/career/HowWeWork';
import Culture from '../sections/career/Culture';
import WhoWeLookFor from '../sections/career/WhoWeLookFor';
import OpenPositions from '../sections/career/OpenPositions';
import JoinUs from '../sections/career/JoinUs';
import './Career.css';

export default function Career() {
  return (
    <main className="career-page">
      <CareerHero />
      <WhyDigidoor />
      <CareerDisciplines />
      <WorkYouWillTouch />
      <HowWeWork />
      <Culture />
      <WhoWeLookFor />
      <OpenPositions />
      <JoinUs />
    </main>
  );
}
