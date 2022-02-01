import React from 'react';
import { DataContext } from '../../context';
import { FilterBtn } from '../Globals/Buttons';
import { setFlex, media } from '../../utils/styles';

import styled from 'styled-components';

const Filter = styled.div`
  ${setFlex({ y: 'start', x: 'space-around' })};
  margin: 5rem 0;
  @media ${media.tablet} {
    flex-direction: column;
    ${setFlex({ y: 'center', x: 'space-around' })};
    padding: 0 5rem;
  }
`;
class Categories extends React.Component {
  static contextType = DataContext;

  render() {
    const { filterItems, categories, icons } = this.context;
    return (
      <Filter id="product">
        {categories.map((item, index) => (
          <FilterBtn
            img={icons}
            type="button"
            key={index}
            onClick={() => filterItems(item)}
          >
            {item}
            <img src={icons[index]} alt="icon" />
          </FilterBtn>
        ))}
      </Filter>
    );
  }
}

export default Categories;
