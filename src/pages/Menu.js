import React from 'react';
import Header from '../components/Globals/Header';
import Title from '../components/Globals/Title';
import { DataContext } from '../context';
import Categories from '../components/Categories';
import { GridLayout, FluidContainer } from '../utils/styles';
import menuBg from '../images/menu-bg.jpg';
import Cards from '../components/Cards';
import HeaderImg from '../components/Globals/HeroBg';

import styled, { ThemeProvider } from 'styled-components';

const MenuContent = styled.section`
  grid-column: center;
  margin-bottom: 3rem;
`;

class Menu extends React.Component {
  static contextType = DataContext;

  componentDidMount() {
    document.title = 'Our Menu';
  }
  render() {
    const { filterItems, categories } = this.context;

    return (
      <ThemeProvider theme={{ mode: 'light' }}>
        <GridLayout>
          <FluidContainer>
            <HeaderImg img={menuBg} size="auto">
              <Header caption="Grill is Ready" />
            </HeaderImg>
          </FluidContainer>

          <MenuContent>
            <Title title="Our Menu" center />

            <Categories categories={categories} filterItems={filterItems} />
            <Cards />
          </MenuContent>
        </GridLayout>
      </ThemeProvider>
    );
  }
}
export default Menu;
