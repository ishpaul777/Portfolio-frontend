/* eslint-disable react/prop-types */
import React from 'react';
import Hero from './components/Hero/hero';
import background from './assets/background_gradient.png';
import background1 from './assets/bg-desktop.png';
import TestimoialSection from './components/testimonial/testimonial';
import Contact from './components/Contact/contactSection';
import './assets/gradient.css';

const Home = ({ data }) => (
  <div>
    <img
      src={background}
      className="box animated infinite rotate-full"
      alt="rotating circle"
    />
    <img
      src={background1}
      className="box1 animated infinite rotate-full"
      alt="rotating circle"
    />
    <Hero data={data.HeroSection} />
    <TestimoialSection data={data.testimoials} />
    <Contact />
  </div>
);

export default Home;
