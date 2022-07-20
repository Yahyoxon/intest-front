import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  margin-top: 48px;
  border-radius: 8px;
  overflow: hidden;
`;
export const TextWrapper = styled.div`
  width: 50%;
  position: absolute;
  top: 80px;
  left: 100px;
  z-index: 999;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
