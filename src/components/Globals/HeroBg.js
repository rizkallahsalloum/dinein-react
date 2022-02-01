import styled from 'styled-components';

import { setBackground } from '../../utils/styles';
const HeaderImg = styled.header`
  min-height: 45vh;
  ${(props) =>
    setBackground({ img: props.img, color: 'rgba(000, 000, 000, 0.3) ' })};
`;

export default HeaderImg;
