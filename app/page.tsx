import React from "react";
import {
  Footer,
  HeroSection,
  NavBar,
  Section02,
  Section03,
  Section04,
} from "./sections";

const Home = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <Section02 />
      <Section03 />
      <Section04 />
      <Footer />
    </main>
  );
};

export default Home;
