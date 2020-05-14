import React from 'react';
import { Contact } from 'sections/Contact';
import { Footer } from 'sections/Footer';
import { Header } from 'sections/Header/Header';
import { Hero } from 'sections/Hero/Hero';
import { Media } from 'sections/Media';
import { Projects } from 'sections/Projects';
import { SkillSets } from 'sections/SkillSets/SkillSets';
import { Summary } from 'sections/Summary/Summary';

export const Main: React.FC = () => {
  return (
    <>
      <Header />

      <Hero />

      <Summary />

      <SkillSets />

      <Projects />

      <Media />

      <Contact />

      <Footer />
    </>
  );
};
