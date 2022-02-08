import styled from 'styled-components';

import { setColor, setFont, setFlex } from '../../utils/styles';

export const CardsMenu = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 2rem;
  grid-row-gap: 0rem;
  color: ${setColor.blackColor};

  a {
    color: ${setColor.blackColor};
  }
`;
export const CardStyled = styled.div`
  border-radius: 6px;
  position: relative;
  background: rgba(189, 188, 191, 0.1);
  border-radius: 3rem;
  padding: 2.5rem;
  margin: 1rem 0;
  box-sizing: border-box;
  width: 100%;
  line-height: 2;
  text-align: center;
  transition: 0.5s;
  ${setFlex({ y: 'space-between', x: 'space-around' })};
  flex-direction: column;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    cursor: pointer;
    z-index: 1;
    position: relative;
  }
`;
export const CardImage = styled.figure`
  height: 11em;
  img {
    width: 100%;
    height: auto;
    max-width: 10em;
    filter: drop-shadow(1px 10px 10px #8d8d8da1);
  }
`;
export const CardTitle = styled.h3`
  font-family: ${setFont.titleFont};
  font-size: 3.5rem;
  font-weight: 600;
`;
export const CardDesc = styled.div``;
export const CardDetails = styled.div`
  ${setFlex({ y: 'center', x: 'space-between' })};
`;
export const CardPrice = styled.div`
  font-family: ${setFont.titleFont};
  font-size: 3rem;
  font-weight: 600;
`;
export const Button = styled.button`
  background-position: bottom;
  background-color: rgba(231, 156, 61, 0.2);
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 30%;
  border: none;
  text-align: center;
  transition: all 0.3s ease-out;
  svg {
    fill: ${setColor.mustardColor};
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    top: 0.3rem;
    transition: all 0.3s ease-out;
  }
  &:hover {
    background-color: rgba(231, 156, 61, 1);
    svg {
      fill: ${setColor.whiteColor};
    }
  }
`;
