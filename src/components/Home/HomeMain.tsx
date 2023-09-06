import React from "react";
import Hero from "./HeroSection";

import CourseTab from "../Elements/Tabs/CourseTab";
import PriceTab from "../Elements/Tabs/PriceTab";
import CarouselTab from "./CarouselSection";
import Cta from "./CtaSection";

const HomeMain: React.FC = () => {
  return (
    <main>
      {/* hero-start */}
      <Hero />
      {/* hero-end */}

      {/* course-start */}
      <CourseTab />
      {/* course-end */}

      {/* Carousel-start */}
      <CarouselTab />
      {/* Carousel-end */}

      {/* tab-start */}
      {/* <PriceTab /> */}
      {/* tab-end */}

      {/* cta-start */}
      <Cta />
      {/* cta-end */}
    </main>
  );
};

export default HomeMain;
