import React from 'react';
import Marquee from 'react-fast-marquee';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Layout from '@/components/layout';
import HeroSection from '@/components/hero-section';
import ConceptSection from '@/components/concept-section';
import Afterconcept from '@/components/afterconcept';
import BenefitsSection from '@/components/benefits-section';
import FinalCall from '@/components/final-call';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ConceptSection />
      <Afterconcept />
      <BenefitsSection />
      <FinalCall />
    </Layout>
  );
};

export default Home;
