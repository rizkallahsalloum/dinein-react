import React from 'react';

import PlusIcon from '../../images/plus-icon.svg';
import DeleteIcon from '../../images/delete-icon.svg';
import MinusIcon from '../../images/minus-icon.svg';
import { DataContext } from '../../context';
import {
  AmountItem,
  AmountItemCount,
  CartTotalAmount,
  DeleteItem,
  ShoppingCardImage,
  CardTitle,
  CardType,
  CardPrice,
  ShoppingCartStyled,
  ReductionButton,
  IncreaseButton,
  CardMain,
  CartFooter,
  ViewBagBtn,
  CheckoutBtn,
  ShoppingCartAmount,
} from './ShoppingCart.styled';

export default class ShoppingCart extends React.Component {
  static contextType = DataContext;

  render() {
    const CartPathname = window.location.pathname;

    const { cart, reduction, increase, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return (
        <p
          style={{
            textAlign: 'center',
            margin: '2rem',
          }}
        >
          Your Cart is Empty
        </p>
      );
    } else {
      return (
        <>
          <ShoppingCartAmount className="shopping-cart-amount">
            <div>Shopping cart ({cart.length})</div>
          </ShoppingCartAmount>
          <div className="cart-width shopping-cart">
            {cart.map((item) => (
              <ShoppingCartStyled key={item._id}>
                <ShoppingCardImage>
                  <img src={item.images} alt={item.alt} />
                </ShoppingCardImage>

                <div>
                  <CardMain>
                    <CardTitle>{item.title}</CardTitle>
                    <CardType>{item.type}</CardType>
                    <CardPrice>${item.price * item.count}</CardPrice>
                  </CardMain>

                  <AmountItem>
                    <ReductionButton onClick={() => reduction(item._id)}>
                      <img src={MinusIcon} alt="Minus" />
                    </ReductionButton>
                    <AmountItemCount>{item.count}</AmountItemCount>
                    <IncreaseButton onClick={() => increase(item._id)}>
                      <img src={PlusIcon} alt="Plus" />
                    </IncreaseButton>
                    <DeleteItem onClick={() => removeProduct(item._id)}>
                      <img src={DeleteIcon} alt="Delete" />
                    </DeleteItem>
                  </AmountItem>
                </div>
              </ShoppingCartStyled>
            ))}
          </div>
          <section>
            <CartTotalAmount>
              <span>Total</span> <span>${total}</span>
            </CartTotalAmount>
            <CartFooter>
              {CartPathname !== '/cart' ? (
                <ViewBagBtn to="/cart">View Cart</ViewBagBtn>
              ) : null}
              <CheckoutBtn>Checkout</CheckoutBtn>
            </CartFooter>
          </section>
        </>
      );
    }
  }
}
