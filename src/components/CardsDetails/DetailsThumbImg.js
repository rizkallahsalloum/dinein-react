import React, { Component } from 'react';
import styled from 'styled-components';

const DetailsThumbImg = styled.figure`
  display: flex;
`;

export class Thumbs extends Component {
  render() {
    const { images, tab, myRef } = this.props;

    return (
      <DetailsThumbImg ref={myRef}>
        {images.thumb.map((img, indexThumb) => (
          <img
            src={img}
            alt=""
            key={indexThumb}
            onClick={() => tab(indexThumb)}
          />
        ))}
      </DetailsThumbImg>
    );
  }
}

export default Thumbs;
