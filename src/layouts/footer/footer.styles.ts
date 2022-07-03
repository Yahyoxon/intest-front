import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 31px 0;
  background-color: ${COLORS.lightBg};
`;

export const FooterDownWrapper = styled.div`
  padding: 12px 0;
  background-color: ${COLORS.darkBg};
`;

export const PaymentTypes = styled.div`
  padding: 8px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};
  border-radius: 5px;
  img {
    object-fit: contain;
  }
`;
