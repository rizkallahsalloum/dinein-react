import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { setFlex, setFont, setColor, setEm, media } from '../../utils/styles';

export const ProductItem = styled.div`
  ${setFlex({ y: 'center', x: 'space-between' })};

  &:not(:last-child)::after {
    content: '';
    background-color: #3c3a42;
    width: ${setEm(3)};
    height: ${setEm(60)};
    display: block;
    position: relative;
    margin: 0 2vw;
    @media ${media.mobile} {
      display: none;
    }
  }
  @media ${media.mobile} {
    ${setFlex({ y: 'center', x: 'space-evenly' })};
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem 0;
  }
  @media ${media.mobileS} {
    ${setFlex()};
    flex-direction: column;
  }
`;
export const ProductType = styled.div`
  margin-left: 2rem;
`;
export const ProductImage = styled.div`
  img {
    max-height: ${setEm(80)};
    max-width: 100%;
  }
`;
export const ProductTitle = styled.div`
  font-family: ${setFont.titleFont};
  font-size: 3rem;
  font-weight: 500;
`;
export const ProductLink = styled(Link)`
  text-transform: capitalize;
  color: ${setColor.lighterGrayColor};
  font-size: 1.4rem;
  transition: 250ms;
  &:hover {
    color: ${setColor.offWhiteColor};
  }
`;
