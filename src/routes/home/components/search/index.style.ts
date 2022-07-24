import styled from 'styled-components';

export const SearchForm = styled.div<{ isMobile?: boolean }>`
  width: ${(props) => (props.isMobile ? '100%' : '70%')};
  position: relative;
  margin: 0 auto;
`;
export const ResultsWrapper = styled.div`
  max-height: 500px;
  position: absolute;
  top: 110px;
  left: 0;
  z-index: 99;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.13);
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const SearchWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center !important;
  justify-content: center;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.13);
  border: none;
  position: relative;
  margin-top: 30px;
`;
export const InputWrapper = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #5a7184;
  height: 90%;
  width: 100%;
  border: none;
  background: #fff;
  padding-left: 70px;
  &:focus {
    outline: none;
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;
