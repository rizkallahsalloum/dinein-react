import React from 'react';
import { ReactComponent as Icon } from '../../images/shopping-basket.svg';
import {
  Nav,
  NavItem,
  NavItemMobile,
  NavItems,
  Cart,
  CartAmount,
  CartModal,
} from './Navbar.styled';
import { GridLayout, FluidContainer } from '../../utils/styles';
import { NavBrand } from '../../components/Navbar/Navbar.styled';
import { ReactComponent as Logo } from '../../images/logo.svg';

import { DataContext } from '../../context';
import ShoppingCart from '../ShoppingCart';

class Navbar extends React.Component {
  static contextType = DataContext;
  state = {
    toggleOpen: false,
    mobileView: false,
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  checkMobile = () => {
    if (window.screen.width < 768) {
      return <CartModal to="/cart" />;
    }
  };

  componentDidMount() {
    this.checkMobile();
  }
  render() {
    const { cart } = this.context;
    const CartPathname = window.location.pathname;
    const WindowSize = window.screen.width < 768;
    return (
      <GridLayout>
        <FluidContainer>
          <Nav>
            <NavBrand to="/">
              <Logo />
            </NavBrand>
            <NavItems>
              <NavItem exact to="/">
                Home
              </NavItem>
              <NavItem to="/menu">Menu</NavItem>
              <NavItem to="/contact">Contact</NavItem>

              {WindowSize === true ? (
                <NavItemMobile to="/cart">
                  <CartAmount>{cart.length}</CartAmount>

                  <Icon alt="Cart icon" />
                </NavItemMobile>
              ) : (
                <Cart type="button" onClick={this.toggleOpen}>
                  <CartAmount>{cart.length}</CartAmount>
                  <Icon alt="Cart icon" />
                </Cart>
              )}
              {CartPathname !== '/cart' ? (
                <CartModal open={this.state.open}>
                  <ShoppingCart />
                </CartModal>
              ) : null}
            </NavItems>
          </Nav>
        </FluidContainer>
      </GridLayout>
    );
  }
}

export default Navbar;
