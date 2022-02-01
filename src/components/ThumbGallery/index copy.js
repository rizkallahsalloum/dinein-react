import React from 'react';

import Thumbs from './Thumbs';
import { DataContext } from '../../Context';
import {
  ThumbGalleryStyled,
  LargeImg,
  StyledThumbs,
} from './ThumbGallery.styled';

class ThumbGallery extends React.Component {
  static contextType = DataContext;
  state = {
    product: [],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '');
    }
    images[index].className = 'active';
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = 'active';
  }
  render() {
    const { product, index } = this.state;
    return (
      <div>
        {product.map((item, indexKey) => (
          <section key={indexKey}>
            <ThumbGalleryStyled key={item._id}>
              <LargeImg>
                <img src={item.src[index]} alt="" />
              </LargeImg>

              <StyledThumbs>
                <Thumbs
                  images={item.src}
                  tab={this.handleTab}
                  myRef={this.myRef}
                />
              </StyledThumbs>
            </ThumbGalleryStyled>
          </section>
        ))}
      </div>
    );
  }
}

export default ThumbGallery;
