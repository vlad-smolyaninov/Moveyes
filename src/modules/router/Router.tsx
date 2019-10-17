import * as React from "react"
import Main from "../scenes/main/Main";
import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Layout from "../layout/Layout"
import {TransitionConfiguration} from "./animations"


const AppNavigator = createStackNavigator({
    Home: {
      screen: Main,
    },
    Details: {
      screen: Layout,
    }
  },
  {
    headerMode: 'none',
    transitionConfig: TransitionConfiguration
  }
);

export default createAppContainer(AppNavigator)