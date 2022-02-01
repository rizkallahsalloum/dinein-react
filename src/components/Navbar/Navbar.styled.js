import { Link, NavLink } from 'react-router-dom';
import BasketIcon from '../../images/shopping-basket.svg';
// import themeColor from 'styled-theming';
import styled from 'styled-components';
import {
  setColor,
  setFlex,
  setEm,
  media,
  themeColor,
} from '../../utils/styles';
const activeClassName = 'nav-item-active';

export const NavBrand = styled(Link)`
  width: 12em;
  height: 4em;
  cursor: pointer;
  svg {
    fill: ${themeColor};
  }
`;

export const Nav = styled.nav`
  grid-column: center-start/center-end;
  margin: 2rem 0;
  position: relative;
  z-index: 100;
  ${setFlex({ y: 'start', x: 'space-between' })};
  font-weight: 600;
  max-height: ${setEm(100)};
  @media ${media.mobile} {
    width: 100%;
    ${setFlex({ y: 'start', x: 'space-between' })};
    flex-direction: column;
  }
`;

export const NavItems = styled.div`
  ${setFlex()};
  margin-top: 1rem;
`;

export const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  transition: 250ms;
  color: ${themeColor};

  font-size: 1.8rem;
  padding-left: 1rem;

  @media ${media.mobile} {
    padding-left: 0;
  }
  &:not(:last-child) {
    padding-right: 6rem;
    @media ${media.tablet} {
      padding-right: 4rem;
    }
  }
  &:hover {
    color: ${setColor.brickColor};
  }
  &.${activeClassName} {
    color: ${setColor.brickColor};
  }
`;

export const NavItemMobile = styled(NavLink)`
  width: 1.5em;
  height: 1.5em;
  position: relative;
  top: 0.3rem;
  margin-left: 1rem;
  border: none;
  background: transparent;
  z-index: 100;
  @media ${media.mobile} {
    position: absolute;
    top: 1.5rem;
    right: 4vw;
  }

  svg {
    fill: ${themeColor};
  }
`;
export const Cart = styled.button`
  width: 2.8em;
  height: 2.8em;
  position: relative;
  top: 0.3rem;
  margin-left: 1rem;
  border: none;
  background: transparent;
  z-index: 100;
  @media ${media.mobile} {
    position: absolute;
    top: 1rem;
    right: 10vw;
  }

  svg {
    fill: ${themeColor};
  }
`;
export const CartAmount = styled.span`
  background: ${setColor.brickColor};
  color: ${setColor.whiteColor};

  border-radius: 5rem;
  height: 2em;
  width: 2em;
  position: absolute;
  font-size: 1.4rem;
  line-height: 2;
  font-weight: 700;
  text-align: center;
  top: -2rem;
  left: 1.2rem;
  @media ${media.mobile} {
    top: -2.3rem;
    left: 0.5rem;
  }
`;

export const CartModal = styled.div`
  min-width: 25.125em;

  box-shadow: 5px 5px 5px rgb(0 0 0 / 10%);
  border: 1px solid #f5f0f1;
  background: ${setColor.whiteColor};
  opacity: ${(props) => (props.open ? '1' : '0')};
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
  /* max-height: ${(props) => (props.open ? '50vh' : '0')};
  overflow: hidden; */
  padding: ${(props) => (props.open ? '1.5rem' : '0 1.5rem')};
  transition: all 0.3s;
  position: absolute;
  top: 4.5rem;
  right: 0.8rem;
  @media ${media.mobile} {
    width: 100%;
    top: 12rem;
    right: 0;
    padding: 0;
  }
`;
