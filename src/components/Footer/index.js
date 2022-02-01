import React from 'react';
import styled from 'styled-components';
import FeaturedProducts from '../FeaturedProducts';
import ChefImg from '../../images/chef.png';
import { setColor, setEm, setFlex, media, setFont } from '../../utils/styles';
import ClocheIcon from '../../images/cloche.svg';

export default function Footer() {
  return (
    <>
      <FooterLeft>
        <img src={ChefImg} alt="Chef" className="chef-image" />
      </FooterLeft>

      <FooterRight>
        <OurMenuFooter>
          <img src={ClocheIcon} alt="Cloche" />
          <h6>our menu</h6>
        </OurMenuFooter>
        <FeaturedProducts />
      </FooterRight>
    </>
  );
}

const FooterLeft = styled.div`
  grid-column: center-start/ col-end 3;
  margin-top: 8rem;
  ${setFlex({ y: 'end', x: 'end' })};

  img {
    max-height: ${setEm(300)};
    justify-self: end;
    margin-right: calc(16rem - 5vw);
    @media ${media.desktop} {
      display: none;
    }
  }
`;

const FooterRight = styled.section`
  background-color: ${setColor.darkgrayColor};
  color: ${setColor.whiteColor};
  border-top-left-radius: 3rem;
  grid-column: col-start 4 / full-end;
  display: grid;

  justify-content: start;
  align-self: end;

  @media ${media.desktop} {
    grid-column: full;
    grid-column: center;
    border-top-right-radius: 3rem;
  }
`;
const OurMenuFooter = styled.div`
  ${setFlex({})};
  position: absolute;
  transform: translateY(-9rem);
  color: ${setColor.darkgrayColor};
  h6 {
    text-transform: uppercase;
    font-family: ${setFont.titleFont};
    font-size: 3rem;
    text-indent: 1.2rem;
  }
  img {
    padding: 1rem;
    border-radius: 50rem;
    background: ${setColor.darkgrayColor};
    width: 2em;
    height: 2em;
  }
  @media ${media.tablet} {
    transform: translateY(-13rem);
    margin: 6rem 0;
  }
`;
