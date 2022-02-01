import React, { Component } from 'react';
import { setFlex } from '../../utils/styles';
import styled from 'styled-components';
import { CardStyled } from '../Card/Card.styled';

const CardStyledLoading = styled(CardStyled)`
  ${setFlex({ y: 'center', x: 'space-around' })};
  height: 20em;
`;
const CardImage = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 50rem;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  width: 120px;
  height: 120px;
  border-radius: 100%;

  @keyframes shine {
  to {
    background-position-x: -200%;
  }
`;

const CardTitle = styled(CardImage)`
  border-radius: 2rem;
  height: 1em;
`;
const CardDesc = styled(CardTitle)``;
const CardDetails = styled(CardTitle)``;
const CardPrice = styled(CardTitle)``;
export default class Loading extends Component {
  render() {
    return (
      <CardStyledLoading>
        <CardImage></CardImage>
        <CardTitle></CardTitle>
        <CardDesc></CardDesc>
        <CardDetails>
          <CardPrice></CardPrice>
          <div></div>
        </CardDetails>
      </CardStyledLoading>
    );
  }
}
