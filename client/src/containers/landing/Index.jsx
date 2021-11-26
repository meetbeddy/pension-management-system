import React from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default LandingPage;
