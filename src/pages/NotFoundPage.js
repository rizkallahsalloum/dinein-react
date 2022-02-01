import React from 'react';
import Header from '../components/Globals/Header';

import {
  GridLayout,
  FluidContainer,
  Container,
  FlexRow,
} from '../utils/styles';
import menuBg from '../images/menu-bg.jpg';
import HeaderImg from '../components/Globals/HeroBg';

import { ThemeProvider } from 'styled-components';
import { LinkBtn } from '../components/Globals/Buttons';
export default class Error extends React.Component {
  componentDidMount() {
    document.title = '404 Error Page Not Found';
  }
  render() {
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg}>
              <Container>
                <Header caption=" 404 Error Page Not Found">
                  <LinkBtn to="/">Back to Homepage</LinkBtn>
                </Header>
              </Container>
            </HeaderImg>
          </FluidContainer>
        </GridLayout>
      </ThemeProvider>
    );
  }
}
