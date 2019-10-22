import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styled from 'styled-components/native'

export const LayoutWrapper = styled(SafeAreaView)`
  flex: 1;
  background: ${(p) => p.theme.color.main};
`

export const HeaderWrapper = styled(View)`
  z-index: 100;
  background: ${(p) => p.theme.color.main};
  height: 50px;
  elevation: 5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(Text)`
  text-transform: capitalize;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`

export const Logo = styled(Image)`
  width: 46px;
  height: 40px;
  margin-right: 20px;
`

export const ContentWrapper = styled(SafeAreaView)`
  flex-grow: 1;
  background: ${(p) => p.theme.color.mainLight};
`

export const FooterWrapper = styled(View)`
  background: ${(p) => p.theme.color.main};
  height: 50px;
  flex-direction: row;
`

export const FooterTab = styled(View)`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`
