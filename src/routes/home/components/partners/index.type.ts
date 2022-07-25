import styled from 'styled-components';

export const PartnersWrapper = styled.div`
  margin: 100px auto;
`;

export const ImageWrapper = styled.div<{ isMobile: boolean }>`
  max-width: ${(props) => (props.isMobile ? '50%' : '20%')};
  width: 100%;
  max-height: 50px;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s;
  }
`;
