import React from "react"
import { ThemeProvider } from "styled-components/native"
import theme from "./services/styles/theme"
import Router from "./modules/router/Router"
import setGlobalStyles from "./services/styles/global"
import { Provider } from "mobx-react"
import storesContext from "./stores"

setGlobalStyles();

const App = () => (
  <Provider value={storesContext}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>
)

export default App
