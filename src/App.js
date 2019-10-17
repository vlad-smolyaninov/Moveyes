import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './services/styles/theme';
import Router from './modules/router/Router';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};
