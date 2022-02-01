import React from 'react';
import Navbar from '../Navbar';
import {
  GridLayout,
  Container,
  setColor,
  setFlex,
  media,
} from '../../utils/styles';
import styled from 'styled-components';
const Header = ({ caption, title, children }) => {
  return (
    <>
      <GridLayout>
        <Container>
          <Navbar />
          <StyledHeaderTitle>
            <h2>{caption}</h2>
            <div>{children}</div>
          </StyledHeaderTitle>
        </Container>
      </GridLayout>
    </>
  );
};

export default Header;

const StyledHeaderTitle = styled.div`
  grid-column: center;
  color: ${setColor.whiteColor};

  ${setFlex({ y: 'center', x: 'space-between' })};
  flex-direction: column;
  h2 {
    margin-bottom: 2rem;
  }
  h2,
  div {
    transform: translateY(5rem);
    @media ${media.mobile} {
      transform: translateY(5rem);
    }
  }
`;
