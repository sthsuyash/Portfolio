import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    {/* left section of the hero container  */}
    <LeftSection>
      <SectionTitle main center>
        I'm Suyash, <br />
        a Developer and Analyst
      </SectionTitle>
      <SectionText>
        I'm a Full Stack Developer based in Kathmandu, Nepal, a hardworking developer and quick learner focused on completing work quickly to consistently exceed targets dedicated to business success.<br />
        I am keen on Business Analytics and Data Science.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/sthsuyash'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
