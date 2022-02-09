import PoppinsFontLight from '../../fonts/Poppinslight.woff';
import PoppinsFontRegular from '../../fonts/Poppinsregular.woff';
import PoppinsFontSemiBold from '../../fonts/Poppinspoppins-semiboldmedium.woff';
import PoppinsFontBold from '../../fonts/Poppinsbold.woff';

import BebasFontLight from '../../fonts/bebasneuelight.woff';
import BebasFontBook from '../../fonts/bebasneuebook.woff';
import BebasFontRegular from '../../fonts/bebasneueregular.woff';
import BebasNeueBold from '../../fonts/bebasneuebold.woff';

import { createGlobalStyle } from 'styled-components';
import { setColor, setFont, media } from '../../utils/styles';

const GlobalStyle = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
    html {
    box-sizing: border-box;
    font-size: 62.5%;
    /* min-height: 100vh; */
  }
  *:focus {
  outline: 0;
  outline: none;
  }

  figure{
    margin: 0;
  }
  ::selection {
  background-color: ${setColor.brickColor} ;
  color: white ;
}
  a {
    color: ${setColor.brickColor} ;
  }
  a, button {
    cursor: pointer;
  }

  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
  ul {
  list-style: none;
}


body{
  background-color: ${setColor.whiteColor};
  background-color: #fff;
  color: #0d0c0f;
  color: ${setColor.blackColor};
  font-family: ${setFont.primaryFont};
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
}

h1 { font-size:4rem; line-height: 1.2; font-family:${setFont.titleFont}; text-transform:uppercase; margin:0 }
h2 { font-size: 3rem;  margin:0 }
h3 { font-size: 2.5rem; line-height: 1;  margin:0 }
h4 { font-size: 2.3rem; line-height: 1.25; font-weight: bold;margin:0 }
h5 { font-size: 2rem; font-weight: bold;margin:0  }
h6 { font-size: 1.8rem; font-weight: bold; margin:0 }
p {
 line-height:1.5;
 margin: 0 0 1.5rem; }

 .new-line {
  white-space: pre-line;
}


.shopping-cart{
  max-height:55vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin:0 -1rem;
  @media ${media.desktop}{
    height:100%;

  }
  @media ${media.mobile}{
    height:100%;
    overflow: hidden;
  }
  /* width */
::-webkit-scrollbar {
  width:0.5rem;
}


/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 .1rem #535765;
  border-radius: 5rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bdbcbf;
  border-radius: 5rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #535765;
}
@font-face {
    @font-face {
    font-family: 'Poppins';
    src: local('Poppins Light'), local('Poppins-Light'), url(${PoppinsFontLight}) format('woff2'), url(${PoppinsFontLight}) format('woff'), url(${PoppinsFontLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
}

    @font-face {
    font-family: 'Poppins';
    src: local('Poppins Regular'), local('Poppins-Regular'), url(${PoppinsFontRegular}) format('woff2'), url(${PoppinsFontRegular}) format('woff'), url(${PoppinsFontRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

    @font-face {
    font-family: 'Poppins';
    src: local('Poppins Poppins-BoldSemiBold'), local('Poppins-SemiBold'), url(${PoppinsFontSemiBold}) format('woff2'), url(${PoppinsFontSemiBold}) format('woff'), url(${PoppinsFontSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
}
    @font-face {
    font-family: 'Poppins';
    src: local('Poppins Bold'), local('Poppins-Bold'), url(${PoppinsFontBold}) format('woff2'), url(${PoppinsFontBold}) format('woff'), url(${PoppinsFontBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
}


    @font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue Light'), local('BebasNeue-Light'), url(${BebasFontLight}) format('woff2'), url(${BebasFontLight}) format('woff'), url(${BebasFontLight}) format('truetype');
    font-weight: 200;
    font-style: normal;
}
@font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue Book'), local('BebasNeueBook'),
    url(${BebasFontBook}) format('woff2'), url(${BebasFontBook}) format('woff'), url(${BebasFontBook}) format('truetype');
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue Regular'), local('BebasNeueRegular'),
    url(${BebasFontRegular}) format('woff2'), url(${BebasFontRegular}) format('woff'), url(${BebasFontRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Bebas Neue';
    src: local('Bebas Neue Bold'), local('BebasNeueBold'),
    url(${BebasNeueBold}) format('woff2'), url(${BebasNeueBold}) format('woff'), url(${BebasNeueBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
}
}


`;

export default GlobalStyle;
