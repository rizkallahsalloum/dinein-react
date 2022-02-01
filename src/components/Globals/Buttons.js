import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { setColor, setFont, setEm, media, setFlex } from '../../utils/styles';

export const PrimaryBtn = styled.button`
  ${setFlex({ y: 'center', x: 'center' })};
  text-align: center;
  border: 0;
  border-radius: 1rem;
  color: ${setColor.whiteColor};
  background-color: ${setColor.brickColor};
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 2rem;
  @media ${media.mobile} {
    padding: 1rem;
    line-height: 2.8;
    font-size: 1.4rem;
  }
  width: ${setEm(200)};
  height: ${setEm(44)};
  transition: all ease-out 0.3s;
  &:hover {
    background-color: ${setColor.darkgrayColor};
  }
`;
export const PrimaryLinkBtn = styled(NavLink)`
  ${setFlex({ y: 'center', x: 'center' })};
  text-align: center;
  border: 0;
  border-radius: 1rem;
  color: ${setColor.whiteColor};
  background-color: ${setColor.brickColor};
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem 2rem;
  @media ${media.mobile} {
    padding: 1rem;
    line-height: 2.8;
    font-size: 1.4rem;
  }
  width: ${setEm(200)};
  height: ${setEm(44)};
  transition: all ease-out 0.3s;
  &:hover {
    background-color: ${setColor.darkgrayColor};
  }
  &:hover span {
    display: none;
  }
  &:hover:before {
    content: 'YES!';
    font-size: 3rem;
    line-height: 1.5;
  }
`;
export const LinkBtn = styled(NavLink)`
  ${setFlex({ y: 'center', x: 'center' })};
  text-align: center;
  border-radius: 0;
  color: ${setColor.whiteColor};
  background-color: ${setColor.brickColor};
  font-size: 1.6rem;
  font-weight: 700;
  @media ${media.mobile} {
    padding: 1rem;
    font-size: 1.4rem;
  }
  width: ${setEm(200)};
  height: ${setEm(44)};
  transition: all ease-out 0.3s;
  &:hover {
    background-color: ${setColor.darkgrayColor};
  }
`;
export const SecondaryBtn = styled(PrimaryBtn)`
  border-radius: 0;
  line-height: 0;
  &:hover:before {
    content: none;
  }
`;
export const OutlinedBtn = styled(PrimaryBtn)`
  border-radius: 0;
  line-height: 0;
  background: transparent;
  color: ${setColor.darkgrayColor};
  border: 1px solid ${setColor.darkgrayColor};
  &:hover {
    color: ${setColor.whiteColor};
  }
  &:hover:before {
    content: none;
  }
`;
export const NavLinkOutlined = styled(LinkBtn)`
  border-radius: 0;
  line-height: 0;
  background: transparent;
  color: ${setColor.darkgrayColor};
  border: 1px solid ${setColor.darkgrayColor};
  &:hover {
    color: ${setColor.whiteColor};
  }
  &:hover:before {
    content: none;
  }
`;
export const FilterBtn = styled(PrimaryBtn)`
  background-color: ${setColor.blackColor};
  border-radius: 1.3rem;
  text-indent: 2em;
  background-size: 4rem;
  text-align: center;
  position: relative;
  line-height: 0;
  color: ${setColor.whiteColor};
  width: 7rem;
  padding: 2rem 9rem;
  font-size: 2rem;
  font-family: ${setFont.titleFont};
  transition: all 0.3s ease-out;
  @media ${media.tablet} {
    margin: 1rem 0;
    padding: 2rem 4rem;
    width: 100%;
  }
  &:hover:before {
    content: none;
  }
  &:hover {
    background-color: ${setColor.darkGreenColor};
  }
  &:active {
    background-color: ${setColor.darkGreenColor};
  }
  img {
    width: 4rem;
    position: absolute;
    left: 2rem;
    top: 0.8rem;
  }
`;
