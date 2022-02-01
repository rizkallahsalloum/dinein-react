import React from 'react';
import { images } from '../../Helpers/CarouselData';
import {
  CarouselWrapper,
  CarouselContent,
  CarouselDesc,
  LeftArrow,
  RightArrow,
  CarouselNavigation,
} from './Carousel.styled';
import ArrowRightIcon from '../../images/right-arrow.svg';
import ArrowLeftIcon from '../../images/left-arrow.svg';

class Carousel extends React.Component {
  state = {
    currentImg: 0,
  };
  setCurrentImg = (e) => {
    this.setState({
      currentImg: e,
    });
  };
  render() {
    const { currentImg } = this.state;
    return (
      <CarouselWrapper>
        <CarouselContent
          style={{
            backgroundImage: `url(${images[currentImg].image})`,
            zIndex: 0,
          }}
        >
          <CarouselNavigation>
            <LeftArrow
              onClick={() => {
                currentImg > 0 && this.setCurrentImg(currentImg - 1);
              }}
            >
              <img src={ArrowLeftIcon} alt="Left Arrow" />
            </LeftArrow>

            <RightArrow
              onClick={() => {
                currentImg < images.length - 1 &&
                  this.setCurrentImg(currentImg + 1);
              }}
            >
              <img src={ArrowRightIcon} alt="Right Arrow" />
            </RightArrow>
          </CarouselNavigation>
          <CarouselDesc>
            <h3>{images[currentImg].title}</h3>
            <p>{images[currentImg].subtitle}</p>
            <span>{images[currentImg].price}</span>
          </CarouselDesc>
        </CarouselContent>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
