import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: max-content;
  grid-template-columns:
    [full-start] minmax(3rem, 1fr) [ center-start] repeat(
      12,
      [col-start] minmax(min-content, 10rem) [col-end]
    )
    [center-end ] minmax(3rem, 1fr) [full-end];
  z-index: 1;
`;

export const Row = styled.div`
  grid-column: ${(props) => (props.sd ? props.sd : 'full-start')} /
    ${(props) => (props.ed ? props.ed : 'full-end')};

  @media ${(props) => props.theme.breakpoints.m} {
    grid-column: ${(props) => (props.sm ? props.sm : 'center-start')} /
      ${(props) => (props.em ? props.em : 'center-end')};
  }

  @media ${(props) => props.theme.breakpoints.s} {
    grid-column: ${(props) => (props.ss ? props.ss : 'center-start')} /
      ${(props) => (props.es ? props.es : 'center-start')};
  }
`;
