import React from 'react';
import HeroContent from '../Globals/HeroContent';
import Carousel from '../Carousel';
import { PrimaryLinkBtn } from '../Globals/Buttons';
import { GridLayout, FluidContainer, Container } from '../../utils/styles';

export default function Hero() {
  return (
    <>
      <GridLayout>
        <FluidContainer>
          <Container>
            <HeroContent
              caption="Grill is Ready"
              title="good food good mood"
              text="To eat is a necessity, but to eat intelligently is an art"
            >
              <PrimaryLinkBtn to="/menu">
                <span> Hungry?</span>
              </PrimaryLinkBtn>
            </HeroContent>
            <Carousel />
          </Container>
        </FluidContainer>
      </GridLayout>
    </>
  );
}
