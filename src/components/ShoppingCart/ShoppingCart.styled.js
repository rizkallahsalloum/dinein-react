import styled from 'styled-components';

import { setColor, setFont, setFlex, media } from '../../utils/styles';
import { CardImage } from '../Card/Card.styled';
import { LinkBtn, SecondaryBtn } from '../Globals/Buttons';

export const ShoppingCartAmount = styled.div`
  margin: 0 1rem;
  padding: 1rem 0;
`;
export const ShoppingCartStyled = styled.div`
  ${setFlex({ y: 'start', x: 'space-between' })};
  align-items: start;
  flex: 1;
  flex-wrap: wrap;
  font-family: ${setFont.titleFont};
  margin: 0 0 1rem 0;
  position: relative;
  border-bottom: 1px solid rgba(189, 188, 191, 0.2);
  padding: 2rem 1rem;
  z-index: 100;
  @media ${media.tablet} {
    ${setFlex({ y: 'start', x: 'start' })};
    flex-direction: row;
    margin: 0;
    flex-wrap: nowrap;
    max-width: 100%;
    padding: 2rem 0;
  }
  @media ${media.mobile} {
    ${setFlex({ y: 'start', x: 'space-around' })};
    flex-direction: row;
    margin: 0;
    flex-wrap: nowrap;
    max-width: 100%;
    padding: 2rem 0;
  }
`;
export const CardMain = styled.div`
  ${setFlex({ y: 'start', x: 'space-between' })};
  flex-direction: column;
  min-width: 15em;
  margin-bottom: 1.5rem;
  @media ${media.mobile} {
    padding: 0;
    ${setFlex({ y: 'start', x: 'space-between' })};
    flex-wrap: wrap;
    position: relative;
    left: 5rem;
    padding: 0.5rem 2rem;
    flex-grow: 2;
    margin-bottom: 0rem;
  }
`;
export const CardTitle = styled.h5`
  font-size: 2.5rem;
`;
export const CardType = styled.h6`
  font-size: 2rem;
  font-weight: normal;
  color: ${setColor.brickColor};
`;
export const CardPrice = styled.div`
  font-size: 2rem;
  font-weight: normal;
  flex: 0 50%;
  justify-content: end;
  color: ${setColor.darkgrayColor};
  font-family: ${setFont.titleFont};
`;

export const ShoppingCardImage = styled(CardImage)`
  margin: 0 2rem 0 0;
  img {
    padding: 2.5rem;
    border-radius: 6px;
    position: relative;
    background: rgba(189, 188, 191, 0.1);
    border-radius: 3rem;
    max-width: 6em;
    object-fit: contain;
  }
  @media ${media.mobile} {
    max-width: 5em;
    padding: 0;
    margin: 0;
    position: relative;
    left: 0;
    flex-grow: 1;
  }
`;

export const AmountItem = styled.div`
  ${setFlex({ y: 'center', x: 'space-between' })};
  margin: 0.5rem 0;
  @media ${media.mobile} {
    padding: 2rem 2rem 1rem 0;
  }

  button {
    width: 2.813em;
    height: 2.813em;
    border: 1px solid #1d1f22;
  }
`;

export const AmountItemCount = styled.span`
  ${setFlex({ y: 'center', x: 'space-between' })};
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  padding: 0 3rem;
`;
export const IncreaseButton = styled.a`
  border-radius: 100%;
  ${setFlex({ y: 'center', x: 'space-around' })};
  padding: 0.3rem;
  border: 2px solid #1d1f22;

  &:hover {
    border: 2px solid ${setColor.lighterGrayColor};
    background-color: ${setColor.lighterGrayColor};
  }

  img {
    width: 0.8em;
  }
`;
export const ReductionButton = styled(IncreaseButton)``;
export const DeleteItem = styled(IncreaseButton)`
  margin-left: auto;
  img {
    width: 1em;
  }
`;

export const CartTotalAmount = styled.span`
  ${setFlex({ y: 'center', x: 'space-between' })};
  font-family: ${setFont.titleFont};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  margin: 2rem 0;
  @media ${media.mobile} {
    span {
      ${setFlex({ y: 'space-evenly', x: 'space-between' })};
    }
  }
`;
export const CartFooter = styled.span`
  ${setFlex({ y: 'start', x: 'space-between' })};
  color: ${setColor.darkgrayColor};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  margin: 3rem 0 1rem;
`;

export const ViewBagBtn = styled(LinkBtn)`
  background: transparent;
  color: ${setColor.darkgrayColor};
  border: 1px solid ${setColor.darkgrayColor};
  height: 3.3em;
  font-size: 1.3rem;
  text-transform: uppercase;
  &:hover {
    color: ${setColor.whiteColor};
  }
  @media ${media.mobile} {
    padding:0;
`;
export const CheckoutBtn = styled(SecondaryBtn)`
  font-size: 1.3rem;
  height: 3.3em;
  text-transform: uppercase;
`;
