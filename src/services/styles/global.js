import { setCustomText } from 'react-native-global-props'

const customTextProps = {
  style: {
    fontFamily: 'Open sans',
    color: 'black'
  }
}

export default () => {
  setCustomText(customTextProps)
}
