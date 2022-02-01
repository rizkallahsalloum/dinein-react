import React from 'react';
import { DataContext } from '../../context';
import { CardsMenu } from './Cards.styled';
import Card from '../Card';
import Loading from '../../components/Globals/Loading';

class Cards extends React.Component {
  static contextType = DataContext;

  render() {
    let { loading, sortedProducts: products, filterItems } = this.context;
    products = products.map((product, index) => {
      return (
        <React.Fragment key={index}>
          {loading ? <Loading /> : <Card key={product._id} product={product} />}
        </React.Fragment>
      );
    });

    return (
      <>
        <CardsMenu id="product" filterItems={filterItems} items={filterItems}>
          {products}
        </CardsMenu>
      </>
    );
  }
}

export default Cards;
