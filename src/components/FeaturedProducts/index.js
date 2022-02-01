import React from 'react';
import { DataContext } from '../../context';
import styled from 'styled-components';
import { setEm, setFlex, media } from '../../utils/styles';

import {
  ProductItem,
  ProductType,
  ProductImage,
  ProductTitle,
  ProductLink,
} from './FeaturedProducts.styled';
import BurgerImage from '../../images/menu/burger-menu.png';
import PizzaImage from '../../images/menu/pizza-menu.png';
import SaladImage from '../../images/menu/salad-menu.png';

class FeaturedProducts extends React.Component {
  static contextType = DataContext;

  render() {
    return (
      <>
        <Products>
          <ProductItem>
            <ProductImage>
              <img src={BurgerImage} alt="Burgers" />
            </ProductImage>
            <ProductType>
              <ProductTitle>burger</ProductTitle>
              <ProductLink to="/burger">see all</ProductLink>
            </ProductType>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <img src={PizzaImage} alt="Pizzas" />
            </ProductImage>
            <ProductType>
              <ProductTitle>pizza</ProductTitle>
              <ProductLink to="/pizza">see all</ProductLink>
            </ProductType>
          </ProductItem>
          <ProductItem>
            <ProductImage>
              <img src={SaladImage} alt="Salads" />
            </ProductImage>
            <ProductType>
              <ProductTitle>salad</ProductTitle>
              <ProductLink to="/salad">see all</ProductLink>
            </ProductType>
          </ProductItem>
        </Products>
      </>
    );
  }
}

export default FeaturedProducts;

const Products = styled.div`
  ${setFlex({ y: 'center', x: 'flex-start' })};
  min-height: ${setEm(200)};
  padding: 0 0 0 3rem;
  @media ${media.large} {
    padding: 0 5rem;
  }
  @media ${media.desktop} {
    ${setFlex()};
    padding: 0 5rem;
  }
  @media ${media.mobile} {
    ${setFlex()};
    flex-direction: column;
    padding: 0 5rem;
  }
  border-top-right-radius: 3rem;
`;
