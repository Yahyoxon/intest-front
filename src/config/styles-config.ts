import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
    a {
      text-decoration: none;
    }
  }
`;

export const COLORS = {
  primary: '#3F51B5',
  primaryVariant: '#3748A6',
  secondary: '#FF7F4D',
  textMain: '#242424',
  success: '#64C962',
  gray: '#F5F5F5',
  stroke: '#EDEDED',
  darkGray: '#9A9A9A',
  white: '#ffffff',
  bg: '#ffffff',
  disabled: '#9A9A9A',
  border: '#E1E1E1',
  inputBackground: '#F8F8F8',
  lightBg: '#EEF4FF',
  darkBg: '#10182C',
  borderColor: '#F0F0F0',
};
