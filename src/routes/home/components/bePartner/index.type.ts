import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  background-color: #e2a412;
`;
export const InputStyled = styled.input`
  border: 2px solid #fff;
  border-radius: 8px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  position: relative;

  color: #959ead;

  &:focus {
    outline: none;
  }

  &:after {
    content: '✉️';
    position: absolute;
    top: 50%;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: #000;
    z-index: 10101010;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
`;

export const InputChildWrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:12px;
`;

export const InputChildWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
