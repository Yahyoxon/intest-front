import styled from 'styled-components';

export const BannerWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.isMobile ? '300px' : '500px')};
  display: flex;
  justify-content: center;
  margin-top: 48px;
  border-radius: 8px;
  overflow: hidden;
`;
export const TextWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  position: absolute;
  z-index: 999;
  box-sizing: border-box;
  padding: ${(props) => (props.isMobile ? '40px 20px' : '120px 80px')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
