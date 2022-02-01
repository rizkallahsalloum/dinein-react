import styled from 'styled-components';

export const ThumbGalleryStyled = styled.div``;

export const LargeImg = styled.figure`
  img {
    max-width: 500px;
    min-width: 290px;
    overflow: hidden;
    margin: 25px;
  }
`;

export const StyledThumbs = styled.div`
  img {
    width: 90px;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 3px solid #ddd;
    margin-right: 5px;
    opacity: 0.7;
    border-radius: 5px;
    &:active {
      opacity: 1;
      border: 5px solid blueviolet;
    }
  }
`;
