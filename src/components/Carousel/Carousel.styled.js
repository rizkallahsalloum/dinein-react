import styled from 'styled-components';
import { setEm, media, setColor, setFont, setFlex } from '../../utils/styles';

export const CarouselWrapper = styled.div`
  grid-column: col-start 6 / center-end;
  width: 100%;
  height: ${setEm(500)};
  display: flex;
  margin-top: 5rem;

  @media ${media.desktop} {
    grid-column: col-start 5 / center-end;
    height: ${setEm(500)};
  }
  @media ${media.tablet} {
    grid-column: center;
    height: ${setEm(300)};
  }
`;

export const CarouselContent = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: grid;
  justify-items: end;
  align-content: end;
  position: relative;
  z-index: 0;
  @media ${media.mobile} {
    justify-items: center;
  }
`;

export const CarouselNavigation = styled.div`
  ${setFlex({ y: 'start', x: 'space-around' })};
  position: absolute;
  bottom: -15rem;
  @media ${media.desktop} {
    bottom: -5rem;
  }
  @media ${media.mobile} {
    right: 0;
  }
  /* bottom: clamp(1vw, -5rem, -3vw); */
`;

export const LeftArrow = styled.a`
  border-radius: 50%;
  ${setFlex({ y: 'center', x: 'space-between' })};
  padding: 1.5rem;
  margin-right: 3rem;

  &:hover {
    background-color: #f4f4f4;
  }
  img {
    width: 1em;
    height: 1em;
  }
`;
export const RightArrow = styled(LeftArrow)`
  margin-right: 0;
`;

export const CarouselDesc = styled.div`
  position: absolute;
  left: 0;
  top: 5rem;
  height: ${setEm(150)};
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: linear-gradient(145deg, #535765, #403640);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  box-shadow: 0px 6px 46px -1px rgba(34, 60, 80, 0.2);
  color: ${setColor.whiteColor};
  padding: 3rem;
  /* max-width: 100%;
  max-height: 30vh; */
  line-height: 2;
  text-align: center;
  h3 {
    font-size: 3rem;
    font-family: ${setFont.titleFont};
  }
  p {
    padding-top: 0.5rem;
  }
  span {
    font-size: 3rem;
    font-family: ${setFont.titleFont};
    color: ${setColor.mustardColor};
  }
  @media ${media.mobile} {
    display: none;
  }
`;
