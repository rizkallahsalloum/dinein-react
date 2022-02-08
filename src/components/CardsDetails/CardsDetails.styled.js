import styled from 'styled-components';

import { setContainer, setFlex, setColor, media } from '../../utils/styles';

export const CardsDetailsStyled = styled.div`
  margin: 5rem 0;
  ${setContainer()};
  section {
    &:first-of-type {
      ${setFlex({ y: 'center', x: 'space-around' })};
      line-height: 2;

      @media ${media.desktop} {
        flex-wrap: wrap;
      }
      @media ${media.mobile} {
        flex-wrap: wrap;
      }
    }
  }
`;
export const ThumbGalleryStyled = styled.div`
  @media ${media.mobile} {
    flex-basis: 20em;
    order: 1;
  }
`;

export const LargeImg = styled.div`
  max-width: 35em;
  @media ${media.mobile} {
    margin: 0 5rem 3rem;
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 20em;
    max-width: 25em;
    display: block;
  }
`;
export const ItemTitle = styled.div`
  ${setFlex({ y: 'center', x: 'space-between' })};
  margin-bottom: 1rem;
  @media ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    order: 3;
  }
`;
export const ItemIngredients = styled.p`
  color: ${setColor.grayColor};
  font-weight: 500;
  @media ${media.mobile} {
    order: 4;
  }
`;
export const ItemDescription = styled.p`
  color: ${setColor.lightGrayColor};
  font-weight: 300;
  @media ${media.mobile} {
    order: 5;
  }
`;
export const ItemName = styled.h3`
  padding-bottom: 0.8rem;
  @media ${media.mobile} {
  }
`;
export const ItemPrice = styled.h4``;
export const AddToCart = styled.button``;
export const DetailsThumbImg = styled.div`
  ${setFlex({ y: 'end', x: 'start' })};
  margin: 1.5rem 0;

  img {
    max-width: 10rem;
    height: 10rem;
    width: 100%;
    display: block;
    object-fit: contain;
    padding: 2rem;
    border: 1px solid ${setColor.lighterGrayColor};
    border-radius: 1rem;
    opacity: 0.7;
    transition: 0.1s linear;
    cursor: pointer;
    margin-right: 0.7rem;
    margin-bottom: 1.5rem;

    @media ${media.mobile} {
      min-width: 5rem;
      /* max-height: 5rem; */
    }
  }
  .active {
    opacity: 1;
    border: 1px solid ${setColor.mustardColor};
  }
`;

export const ItemInfo = styled.div`
  ${setFlex({ y: '', x: '' })};
  flex-direction: column;
  flex-basis: clamp(10em, 40em, 50em);
  margin: 2.5rem 0 0 2rem;
  @media ${media.mobile} {
    align-items: flex-start;
    margin: 0;
    /* max-width: 10em; */
  }
`;
export const ItemGallery = styled.section``;
export const ItemGalleryThumbStyled = styled.div`
  @media ${media.mobile} {
    order: 2;
  }
`;
export const ItemInfoFooter = styled.div`
  ${setFlex({ y: 'flex-start', x: '' })};
  @media ${media.mobile} {
    order: 6;
  }

  button {
    margin-right: 5rem;
    @media ${media.mobile} {
      margin-bottom: 2rem;
    }
  }
  @media ${media.mobile} {
    ${setFlex({ y: 'center', x: '' })};
    flex-direction: column-reverse;
    align-content: center;
    width: 100%;
  }
`;
