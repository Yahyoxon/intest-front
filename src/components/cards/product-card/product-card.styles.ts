import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const ProductCardWrapper = styled.div<{ horizontal?: boolean }>`
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: ${({ horizontal }) => (horizontal ? COLORS.white : '')};
  padding: ${({ horizontal }) => (horizontal ? '1.5rem' : 0)};
  border: ${({ horizontal }) =>
    horizontal ? `1px solid ${COLORS.borderColor}` : 'none'};
`;

export const ProductCardImage = styled.div`
  border-radius: 14px;
  height: 230px;
  overflow: hidden;
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProductCardImageList = styled.div<{ isMobile: boolean }>`
  border-radius: 14px;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: ${(props) => (props.isMobile ? '50%' : '220px')};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-content: space-between;
`;
export const CardWrapper = styled.div<{ before?: string }>`
  box-shadow: 0 13px 46px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  position: relative;
  height: 330px;
  &::before {
    content: '${(props) => props.before}';
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 800;
    color: #fff;
    position: absolute;
    top: 14px;
    left: 10px;
    z-index: 99;
    background-color: red;
  }
`;
export const CardWrapperList = styled.div<{ before?: string }>`
  box-shadow: 0 13px 46px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  position: relative;
  min-height: 200px;
  &::before {
    content: '${(props) => props.before}';
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 800;
    color: #fff;
    position: absolute;
    top: 14px;
    left: 10px;
    z-index: 23232;
    background-color: red;
  }
`;

export const PriceWrapper = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: #183b56;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 0;
    width: 50%;
    height: 1px;
    transform: rotate(-3deg);
    background-color: red;
  }
`;
