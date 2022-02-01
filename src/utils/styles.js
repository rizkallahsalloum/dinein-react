import React from 'react';

import styled from 'styled-components';

import theme from 'styled-theming';
export const setColor = {
  whiteColor: '#fff',
  offWhiteColor: '#fbf7f7',
  blackColor: '#0d0c0f',
  lighterGrayColor: '#bdbcbf',
  lightGrayColor: '#535765',
  grayColor: '#403640',
  darkgrayColor: '#23212a',
  lightBrownColor: '#c0aea8',
  brickColor: '#cd4124',
  darkGreenColor: '#6d8c7e',
  mustardColor: '#e79c3d',
};
export const themeColor = theme('mode', {
  light: '#fff',
  dark: '#0d0c0f',
});

export const setFont = {
  primaryFont: " 'Poppins', sans-serif ",
  titleFont: 'Bebas Neue',
};
export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display: flex;
  align-items: ${y};
  justify-content: ${x}`;
};

export const setContainer = ({ x = 'center-start', y = 'center-end' } = {}) => {
  return `
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns:
    [full-start] minmax(3rem, 1fr) [ center-start] repeat(
      12,
      [col-start] minmax(min-content, 12rem) [col-end]
    )
    [center-end ] minmax(3rem, 1fr) [full-end];
  justify-content: start;
  grid-column:${x} /  ${y}`;
};
export const setFluid = ({ x = 'full-start', y = 'full-end' } = {}) => {
  return `

  grid-template-rows: max-content;
  grid-template-columns:
    [full-start] minmax(3rem, 1fr) [ center-start] repeat(
      12,
      [col-start] minmax(min-content, 12rem) [col-end]
    )
    [center-end ] minmax(3rem, 1fr) [full-end];
  justify-content: start;
  grid-column:${x} /  ${y}`;
};

export const setEm = (number = 16) => {
  return `${number / 16}em`;
};

export const setBackground = ({
  img = '../images/menu-bg.jpg',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `background:linear-gradient(${color},${color}), url(${img}) bottom / cover fixed no-repeat;`;
};
const size = {
  wide: '100em', //1600px
  large: '80em', //1280px
  desktop: '64em', //1024
  tablet: '50em', //800px
  mobile: '40em', // 640px
  mobileS: '20em', // 320px
};

export const media = {
  wide: `(max-width: ${size.wide})`,
  desktop: `(max-width: ${size.desktop})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
  mobileS: `(max-width: ${size.mobileS})`,
};

export const GridLayout = styled.div`
  grid-column: full;
  display: grid;
  grid-template-rows: max-content;

  grid-template-columns:
    [full-start] minmax(3rem, 1fr) [ center-start] repeat(
      12,
      [col-start] minmax(min-content, 12rem) [col-end]
    )
    [center-end ] minmax(3rem, 1fr) [full-end];
  z-index: 1;
  justify-content: center;
  @media ${media.tablet} {
    grid-template-columns:
      [full-start] minmax(1rem, 1fr) [ center-start] repeat(
        12,
        [col-start] minmax(min-content, 12rem) [col-end]
      )
      [center-end ] minmax(1rem, 1fr) [full-end];
  }
  z-index: auto;
`;

export const FluidContainer = styled.div`
  ${setFluid()};
`;

export const Container = styled.div`
  ${setContainer()};
`;

export const withContainer = (Component) => styled(Component)`
  display: grid;
  grid-column: ${(props) => props.value};
`;

export const CenterContainer = withContainer(({ className, children }) =>
  React.cloneElement(children, { className })
);

export const FlexRow = styled.div`
  ${setFlex({ y: 'center', x: 'space-between' })};
`;
