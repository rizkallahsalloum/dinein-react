import React from 'react';

import { DataContext } from '../../context';
import {
  ThumbGalleryStyled,
  LargeImg,
  StyledThumbs,
} from './ThumbGallery.styled';

class ThumbGallery extends React.Component {
  static contextType = DataContext;
  state = {
    products: [],
    index: 0,
  };

  render() {
    const { products, index } = this.context;
    return (
      <div>
        {products.map((item) => (
          <section>
            <ThumbGalleryStyled key={item._id}>
              <LargeImg>
                <img src={item.thumb[index]} alt="" />
              </LargeImg>

              <StyledThumbs>
                {item.thumb.map((img) => (
                  <img src={img} alt="" />
                ))}
              </StyledThumbs>
            </ThumbGalleryStyled>
          </section>
        ))}
      </div>
    );
  }
}

export default ThumbGallery;
