import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Layout from '../layout/Layout'
import Main from '../scenes/main/Main'
import { TransitionConfiguration } from './animations'

const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Main
		},
		Details: {
			screen: Layout
		}
	},
	{
		headerMode: 'none',
		transitionConfig: TransitionConfiguration
	}
)

export default createAppContainer(AppNavigator)
