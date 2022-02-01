import React from 'react';
import Header from '../components/Globals/Header';
import Title from '../components/Globals/Title';
import { Link } from 'react-router-dom';
import {
  GridLayout,
  FluidContainer,
  Container,
  setFlex,
  media,
} from '../utils/styles';
import menuBg from '../images/menu-bg.jpg';
import HeaderImg from '../components/Globals/HeroBg';
import { contactInfo } from '../Helpers/ContactInfo';

import styled, { ThemeProvider } from 'styled-components';
import Form from '../components/Form';

class Contact extends React.Component {
  componentDidMount() {
    document.title = 'Contact us';
  }
  render() {
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg}>
              <Container>
                <Header caption="Get in Touch" />
              </Container>
            </HeaderImg>
          </FluidContainer>
          <StyledContact>
            <Title title="Say Hello!" left />
            <h6>Let us know more about you!</h6>
            <div>
              <Form />
              <ContactInfo>
                <h3>Contact Information</h3>
                <p className="new-line">{contactInfo.address}</p>
                <p>{contactInfo.phone}</p>
                <p className="new-line">{contactInfo.working}</p>
                <h3>Follow us</h3>
                <Social>
                  <Link to="#">{contactInfo.social.facebook}</Link>
                  <Link to="#">{contactInfo.social.instagram}</Link>
                  <Link to="#">{contactInfo.social.youtube}</Link>
                </Social>
              </ContactInfo>
            </div>
          </StyledContact>
        </GridLayout>
      </ThemeProvider>
    );
  }
}

export default Contact;

const StyledContact = styled.section`
  input {
    /* border: 2px red solid; */
    width: 18em;
    @media ${media.desktop} {
      width: 100%;
    }
  }
  textarea {
    width: 40em;
    @media ${media.desktop} {
      width: 100%;
    }
  }
  grid-column: center;
  margin-bottom: 6rem;
  div {
    ${setFlex({ y: 'center', x: 'space-between' })};

    align-items: flex-start;
    flex-wrap: wrap;
  }
  button {
    text-transform: uppercase;
    margin: 2rem 0;
    @media ${media.mobile} {
      width: 100%;
    }
  }
  h3,
  h6 {
    margin-bottom: 2rem;
  }
`;
const ContactInfo = styled.section`
  position: relative;
  top: -5rem;
  margin-right: 10rem;
  @media ${media.desktop} {
    top: 5rem;
  }
  a {
    font-weight: 600;
  }
`;

const Social = styled.div`
  ${setFlex({ y: 'center', x: 'space-between' })};
  /* flex-direction: row; */
`;
