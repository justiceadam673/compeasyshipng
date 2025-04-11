import About from "./About";
import HowEastShipWorks from "./HowEastShipWorks";
import MissionAndVision from "./MissionAndVision";
import WhyEasyShip from "./WhyEasyShip";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";

const ShowCase = () => {
  return (
    <main className='w-full'>
      <div className='h-auto max-w-[1413px] mx-auto px-4'>
        <About />
        <HowEastShipWorks />
        <MissionAndVision />
        <WhyEasyShip />
        <WhatWeDo />
        <Testimonials />
      </div>
    </main>
  );
};

export default ShowCase;
