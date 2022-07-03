import { Button } from 'components/button';
import { COLORS } from 'config/styles-config';
import styled from 'styled-components';

export const OpenerButton = styled(Button)`
  border-radius: 14px 0px 0px 14px !important;
  background-color: transparent;
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.border};
  font-weight: 600;
  font-size: 1rem;
  &:hover {
    background-color: transparent;
    border-width: 1px;
  }
`;
