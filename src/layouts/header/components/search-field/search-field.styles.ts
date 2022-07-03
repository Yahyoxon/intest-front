import { Input } from 'components/input';
import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const SearchFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const CustomInput = styled(Input)`
  border-radius: 0px 14px 14px 0px !important;
  background-color: ${COLORS.inputBackground} !important;
  width: 30rem;
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
  &&&& > .MuiInputBase-input {
    background-color: ${COLORS.inputBackground};
  }
  &&&& > .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.border};
  }
`;
