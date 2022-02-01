import React from 'react';
import { setColor, setFont, setEm, media, setFlex } from '../../utils/styles';
import styled from 'styled-components';
import flameIcon from '../../images/flame.svg';

const HeroContent = ({ className, caption, title, text, children }) => {
  return (
    <div className={className}>
      <h6>{caption}</h6>
      <h1>{title}</h1>
      <blockquote className="hero-quote">
        <p>{text}</p>
      </blockquote>
      {children}
    </div>
  );
};

const HeroContentWrapper = styled(HeroContent)`
  grid-column: center-start/col-end 5;

  ${setFlex({ y: 'start', x: 'flex-start' })};
  flex-direction: column;
  align-items: start;
  margin-top: 6rem;

  @media ${media.desktop} {
    grid-column: center-start/col-end 4;
  }
  h1 {
    font-size: clamp(7rem, 15rem, 12vw);
    /* font-size: clamp(3rem, 1rem + 10vw, 7rem); */
    line-height: 0.9;
    font-family: ${setFont.titleFont};
    text-transform: uppercase;
    font-weight: 600;
    color: ${setColor.darkgrayColor};
    margin: 2rem 0 0 -0.4rem;
  }
  h6 {
    color: #b5b5b5;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-family: ${setFont.titleFont};
    &::after {
      content: '';
      display: inline-block;
      background-image: url(${flameIcon});
      width: ${setEm(16)};
      height: ${setEm(16)};
      margin-left: 1rem;
    }
  }
  blockquote {
    position: relative;
    max-width: ${setEm(350)};
    text-transform: capitalize;
    font-family: ${setFont.primaryFont};
    font-weight: 600;
    font-size: 1.8rem;
    color: ${setColor.darkgrayColor};
    @media ${media.mobile} {
      margin: 2rem 0 1rem 2rem;
    }
    &::before {
      content: '';
      background-color: #dbdbdb;
      width: 5px;
      height: 40px;
      display: block;
      position: absolute;
      left: -3.9rem;
      top: 0.4rem;
      @media ${media.mobile} {
        blockquote::before {
          content: '';
          background-color: #dbdbdb;
          width: 5px;
          height: 40px;
          display: block;
          position: absolute;
          left: -1.9rem;
          top: 0.4rem;
        }
      }
      @media ${media.mobileS} {
        blockquote::before {
          content: '';
          background-color: #dbdbdb;
          width: 5px;
          height: 40px;
          display: block;
          position: absolute;
          left: -1.9rem;
          top: 0.4rem;
        }
      }
    }
  }
`;

export default HeroContentWrapper;
