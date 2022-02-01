import React from 'react';

import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer';
import Header from '../components/Globals/Header';
import { GridLayout } from '../utils/styles';

import { ThemeProvider } from 'styled-components';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'DINE IN | Good Food Good Mood';
  }
  render() {
    return (
      <>
        <ThemeProvider theme={{ mode: 'dark' }}>
          <GridLayout>
            <Header />
            <Hero />
            <Footer />
          </GridLayout>
        </ThemeProvider>
      </>
    );
  }
}

export default Home;
