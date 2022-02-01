import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context';
import { ReactComponent as Icon } from '../../images/cart.svg';
import {
  CardsMenu,
  CardImage,
  CardDetails,
  CardTitle,
  CardDesc,
  CardPrice,
  Button,
  CardStyled,
} from './Card.styled';
export default class Card extends Component {
  static contextType = DataContext;

  render() {
    const { title, slug, images, price, alt, type, ingredients, _id } =
      this.props.product;
    return (
      <CardsMenu id="product">
        <CardStyled>
          <Link to={`${type}/${slug}`}>
            <CardImage>
              <img src={images} alt={alt} />
            </CardImage>
            <CardTitle>{title}</CardTitle>
            <CardDesc>
              <p>{ingredients}</p>
            </CardDesc>
          </Link>
          <CardDetails>
            <CardPrice>${price}</CardPrice>
            <Button onClick={() => this.context.addCart(_id)}>
              <Icon alt="Cart icon" />
            </Button>
          </CardDetails>
        </CardStyled>
      </CardsMenu>
    );
  }
}
