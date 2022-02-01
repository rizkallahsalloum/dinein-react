import styled from 'styled-components';
import { media } from '../../utils/styles';
export const FromStyled = styled.form`
  input,
  textarea,
  select {
    padding: 0 2rem;
    border-radius: 1rem;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fff),
      to(#f8f8f8)
    );
    background: -o-linear-gradient(#fff 0, #f8f8f8 100%);
    background: linear-gradient(#fff, #f8f8f8);
    -webkit-box-shadow: 0 3px 10px rgb(0 0 0 / 9%);
    box-shadow: 0 3px 10px rgb(0 0 0 / 9%);
    margin: 1rem 1rem 1rem 0;
  }
  textarea {
    padding: 2rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 3em;
  position: relative;
`;
export const Select = styled.select`
  width: 48%;
  height: 3em;
  @media ${media.desktop} {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 7em;
`;
export const Checkbox = styled(InputField)`
  width: 1em !important;
  height: 1em;
  box-shadow: none !important;
`;
