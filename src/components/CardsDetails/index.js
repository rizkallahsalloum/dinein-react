import React from 'react';
import { withRouter } from 'react-router-dom';
import { DataContext } from '../../context';
import { CardsDetailsStyled } from './CardsDetails.styled';
import { OutlinedBtn, SecondaryBtn } from '../Globals/Buttons';
import Header from '../../components/Globals/Header';
import {
  ItemGallery,
  ItemInfo,
  ThumbGalleryStyled,
  LargeImg,
  DetailsThumbImg,
  ItemTitle,
  ItemDescription,
  ItemIngredients,
  ItemName,
  ItemPrice,
  ItemInfoFooter,
} from './CardsDetails.styled';
import {
  GridLayout,
  FluidContainer,
  CenterContainer,
} from '../../utils/styles';
import menuBg from '../../images/menu-bg.jpg';
import HeaderImg from '../../components/Globals/HeroBg';
import Footer from '../../components/Footer';
import NotFoundPage from '../../pages/NotFoundPage';

import { ThemeProvider } from 'styled-components';

class CardsDetails extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      indexThumb: 0,
      slug: this.props.match.params.slug,
    };
  }
  componentDidMount() {
    this.context.getTotal();
  }

  myRef = React.createRef();
  handleThumb = (indexThumb) => {
    this.setState({ indexThumb: indexThumb });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '');
    }
    images[indexThumb].className = 'active';
  };
  // Later check to use the key=item instead of index

  render() {
    let { indexThumb } = this.state;
    let { getProduct } = this.context;
    let product = getProduct(this.state.slug);
    if (!product) {
      return <NotFoundPage />;
    }

    const { _id, thumb, alt, title, price, ingredients, description } = product;

    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg}>
              <Header caption="Grill is Ready" />
            </HeaderImg>
            <CardsDetailsStyled>
              <CenterContainer value="center">
                <section>
                  <ItemGallery>
                    <ThumbGalleryStyled key={_id}>
                      <LargeImg>
                        <img src={thumb[indexThumb]} alt={alt} />
                      </LargeImg>
                    </ThumbGalleryStyled>
                  </ItemGallery>
                  <ItemInfo>
                    <ItemTitle>
                      <ItemName>{title}</ItemName>
                      <ItemPrice>${price}</ItemPrice>
                    </ItemTitle>

                    <ItemIngredients>{ingredients}</ItemIngredients>

                    <ItemDescription>{description}</ItemDescription>
                    <DetailsThumbImg ref={this.myRef}>
                      {thumb.map((img, index) => (
                        <img
                          src={img}
                          alt=""
                          key={index}
                          onClick={() => this.handleThumb(index)}
                        />
                      ))}
                    </DetailsThumbImg>
                    <ItemInfoFooter>
                      <OutlinedBtn onClick={this.props.history.goBack}>
                        Back to Menu
                      </OutlinedBtn>
                      <SecondaryBtn onClick={() => this.context.addCart(_id)}>
                        Add to Cart
                      </SecondaryBtn>
                    </ItemInfoFooter>
                  </ItemInfo>
                </section>
              </CenterContainer>
            </CardsDetailsStyled>
          </FluidContainer>
          <Footer />
        </GridLayout>
      </ThemeProvider>
    );
  }
}

export default withRouter(CardsDetails);
