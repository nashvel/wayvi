import React from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/common/TrustedBy';
import Features from '../components/home/Features';
import Testimonials from '../components/common/Testimonials';
import CTA from '../components/common/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
