import React from 'react';
import Header from '../Globals/Header';
import {
  GridLayout,
  FluidContainer,
  Container,
  CenterContainer,
  setFlex,
} from '../../utils/styles';
import menuBg from '../../images/menu-bg.jpg';
import HeaderImg from '../Globals/HeroBg';

import styled, { ThemeProvider } from 'styled-components';
import { LinkBtn } from '../Globals/Buttons';
export default class Thankyou extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg}>
              <Container>
                <Header caption="Thank you"></Header>
              </Container>
            </HeaderImg>
          </FluidContainer>
          <CenterContainer value="center">
            <ThanksMessage>
              <h5> Thank for your message has been sent</h5>

              <LinkBtn to="/">Back to Homepage</LinkBtn>
            </ThanksMessage>
          </CenterContainer>
        </GridLayout>
      </ThemeProvider>
    );
  }
}

const ThanksMessage = styled.div`
  height: 20em;
  ${setFlex({ y: 'center', x: 'center' })};
  flex-direction: column;
  gap: 3rem;
`;
