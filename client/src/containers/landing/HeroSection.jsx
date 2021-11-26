import React from "react";

function HeroSection() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h1>We Breath Life Into The Future </h1>
            <h2>
              Retirement security is often compared to a three-legged stool
              supported by Social Security, employer-provided pension funds, and
              private savings.
            </h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src="assets/img/hero-img.png"
              className="img-fluid animated"
              alt
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
