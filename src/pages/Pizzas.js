import React from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { DataContext } from '../context';
import Header from '../components/Globals/Header';
import Title from '../components/Globals/Title';
import { GridLayout, FluidContainer, CenterContainer } from '../utils/styles';
import pizzaBg from '../images/pizza-bg.jpg';

import HeaderImg from '../components/Globals/HeroBg';
import Footer from '../components/Footer';

import Loading from '../components/Globals/Loading';
import { NavLinkOutlined } from '../components/Globals/Buttons';
import Card from '../components/Card';
import { CardsMenu } from '../components/Cards/Cards.styled.js';

class Pizzas extends React.Component {
  static contextType = DataContext;
  componentDidMount() {
    document.title = 'Menu | Pizzas';
  }
  render() {
    let { loading, typePizza: products } = this.context;
    products = products.map((product) => {
      return <Card key={product._id} product={product} />;
    });
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={pizzaBg} size="cover">
              <CenterContainer>
                <Header caption="Fresh from the oven!" />
              </CenterContainer>
            </HeaderImg>
          </FluidContainer>
          <CenterContainer value="center">
            <div>
              <MenuContent>
                <Title title="Our Pizzas Menu" center />
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

export default Pizzas;

const MenuContent = styled.section``;
