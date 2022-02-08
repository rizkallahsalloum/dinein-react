import React from 'react';

import { DataContext } from '../context';
import Header from '../components/Globals/Header';
import Title from '../components/Globals/Title';
import { GridLayout, FluidContainer, CenterContainer } from '../utils/styles';
import burgerBG from '../images/burger-bg.jpg';

import HeaderImg from '../components/Globals/HeroBg';
import Footer from '../components/Footer';
import styled, { ThemeProvider } from 'styled-components';

import Loading from '../components/Globals/Loading';
import { NavLinkOutlined } from '../components/Globals/Buttons';
import Card from '../components/Card';
import { CardsMenu } from '../components/Cards/Cards.styled.js';
class Burgers extends React.Component {
  static contextType = DataContext;
  componentDidMount() {
    document.title = 'Menu | Burgers';
  }
  render() {
    let { loading, typeBurger: products } = this.context;
    products = products.map((product) => {
      return <Card key={product._id} product={product} />;
    });
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={burgerBG} size="auto">
              <CenterContainer>
                <Header caption="Juicy!" />
              </CenterContainer>
            </HeaderImg>
          </FluidContainer>
          <CenterContainer value="center">
            <div>
              <MenuContent>
                <Title title="Our Burgers Menu" center />
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

export default Burgers;

const MenuContent = styled.section``;
