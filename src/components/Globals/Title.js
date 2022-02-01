import React from 'react';
import styled from 'styled-components';

function Title({ className, title, center }) {
  return <h3 className={className}>{title}</h3>;
}

export default styled(Title)`
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  text-transform: capitalize;
  margin: 5rem 0;
  font-size: 3rem;
`;
