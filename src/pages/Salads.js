import React from 'react';
import { DataContext } from '../context';

import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Globals/Header';
import Title from '../components/Globals/Title';
import { GridLayout, FluidContainer, CenterContainer } from '../utils/styles';
import menuBg from '../images/menu-bg.jpg';

import HeaderImg from '../components/Globals/HeroBg';
import Footer from '../components/Footer';

import Loading from '../components/Globals/Loading';
import { NavLinkOutlined } from '../components/Globals/Buttons';
import Card from '../components/Card';
import { CardsMenu } from '../components/Cards/Cards.styled.js';

class Salads extends React.Component {
  static contextType = DataContext;
  componentDidMount() {
    document.title = 'Menu | Salads';
  }
  render() {
    let { loading, typeSalad: products } = this.context;
    products = products.map((product) => {
      return <Card key={product._id} product={product} />;
    });
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg}>
              <CenterContainer>
                <Header caption="Grill is Ready" />
              </CenterContainer>
            </HeaderImg>
          </FluidContainer>
          <CenterContainer value="center">
            <div>
              <MenuContent>
                <Title title="Our Salads Menu" center />
                <NavLinkOutlined to="/menu">Back to menu</NavLinkOutlined>
                <CardsMenu>{loading ? <Loading /> : products}</CardsMenu>
              </MenuContent>
            </div>
          </CenterContainer>
          <Footer />
        </GridLayout>
      </ThemeProvider>
    );
  }
}

export default Salads;

const MenuContent = styled.section``;
