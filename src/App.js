import React, { View } from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from './services/styles/theme'
import Router from './modules/router/Router'
import global from './services/styles/global'

export default () => {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	)
}
