import React, { ReactNode } from 'react'
import { StatusBar } from 'react-native'
import theme from '../../services/styles/theme'
import Footer from './Footer'
import Header from './Header'
import { ContentWrapper, LayoutWrapper } from './styled'

export interface ILayout {
	children: ReactNode
}

const Layout: React.SFC<ILayout> = ({ children }) => (
	<LayoutWrapper>
		<StatusBar barStyle='dark-content' backgroundColor={theme.color.main} />
		<Header />
		<ContentWrapper>{children}</ContentWrapper>
		<Footer />
	</LayoutWrapper>
)

export default Layout
