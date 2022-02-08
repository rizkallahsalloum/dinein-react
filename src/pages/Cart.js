import React from 'react';
import Header from '../components/Globals/Header';
import Title from '../components/Globals/Title';
import { NavLinkOutlined } from '../components/Globals/Buttons';
import {
  GridLayout,
  FluidContainer,
  Container,
  setFlex,
  setColor,
  media,
} from '../utils/styles';
import menuBg from '../images/menu-bg.jpg';
import HeaderImg from '../components/Globals/HeroBg';
import ShoppingCart from '../components/ShoppingCart';
import { ShoppingCartStyled } from '../components/ShoppingCart/ShoppingCart.styled';

import styled, { ThemeProvider } from 'styled-components';

const StyledCart = styled.section`
  grid-column: center;
  position: relative;
  a,
  button {
    font-size: 1.5rem;
  }
  @media ${media.mobile} {
    h3 {
      margin: 2rem 0;
    }
    a {
      padding: 0;
    }
  }
`;
const CartStyled = styled(ShoppingCartStyled)`
  ${setFlex({ y: 'center', x: 'space-between' })};
  align-items: stretch;

  .shopping-cart {
    height: 100%;
    min-height: 100vh;
    overflow: unset;
    ::-webkit-scrollbar {
      display: none;
    }
    @media ${media.tablet} {
      height: 100%;
      max-height:100vh;
      overflow-x: hidden;
      overflow-y: scroll;

    }
    @media ${media.mobile} {
      height: 100%;
      max-height:100vh;
      overflow-x: hidden;
      overflow-y: scroll;
      ::-webkit-scrollbar {
      display: none;
    }
    }

  }

  .shopping-cart-amount {
    display: none;
  }
  @media ${media.mobile} {
    flex-direction: column;
  }
  button {
    padding: 2rem 0;
    font-size: 1.8rem;

    :hover {
      background: ${setColor.grayColor};
    }
  }
  .cart-width {
    width: 70%;
    max-width: 100%;
    @media ${media.tablet} {
      width: 100%;
      height: 100%;
    }
    @media ${media.mobile} {
      width: 100%;
      height: 100%;
      margin-bottom:5rem;
    }
  }
  section {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem;
    ${setFlex({ y: 'space-between', x: 'space-between' })};
    max-height: 10em;
    padding: 2rem;
    flex-direction: column;
    background: ${setColor.darkgrayColor};
    color: ${setColor.whiteColor};
    @media ${media.desktop} {
      position: fixed;
      margin-top: auto;
      z-index:1000;
      bottom: 0;
      left:0;
      right:0;
      width: 100%;
      ${setFlex({ y: 'center', x: 'space-around' })};
      span{
        padding: 0;
        margin:0.5rem 2rem 0.4rem 0;
        button{
          padding: 0 2rem;
          height: 2.5em;
        }

     flex-direction:row;
    }
    @media ${media.mobile} {
      position: fixed;
      flex-direction: row;
      ${setFlex({ y: 'center', x: 'space-around' })};
      bottom: 0;
      margin-top: auto;
      z-index: 100;
      width: 100%;
      padding: 0;
      margin-left:0;
      margin-right:0;
      height: 5em;
      span{
        padding: 0;
        margin:0.5rem 2rem 0.4rem 0;
        ${setFlex({ y: 'center', x: 'space-evenly' })};
        button{
          padding: 0 2rem;
          height: 2.5em;
          width:100%;

        }
      }
  }
`;

class Cart extends React.Component {
  componentDidMount() {
    document.title = 'Cart';
  }
  render() {
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg}>
              <Container>
                <Header caption="Cart" />
              </Container>
            </HeaderImg>
          </FluidContainer>
          <StyledCart>
            <Title title="Cart" left />
            <NavLinkOutlined to="/menu">Back to menu</NavLinkOutlined>
            <CartStyled>
              <ShoppingCart />
            </CartStyled>
          </StyledCart>
        </GridLayout>
      </ThemeProvider>
    );
  }
}

export default Cart;
