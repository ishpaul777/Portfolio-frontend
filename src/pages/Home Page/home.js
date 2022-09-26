/* eslint-disable react/prop-types */
import React from 'react';
import Hero from './components/Hero/hero';
import background from './assets/background_gradient.png';
// import TestimoialSection from './components/testimonial/testimonial';
import './gradient.css';

const Home = ({ data }) => (
  <div>
    <img
      src={background}
      className="box1 animated infinite rotate-full"
      alt="rotating circle"
    />
    <Hero data={data.HeroSection} />
    {/* <TestimoialSection /> */}
  </div>
);

export default Home;
