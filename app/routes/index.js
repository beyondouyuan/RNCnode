/*
 * @Author: beyondouyuan
 * @Date:   2018-03-30 18:04:08
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-04-02 11:11:25
 */

import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'
import {
    Platform,
    View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import {
  StackNavigator,
  addNavigationHelpers,
  NavigationActions
} from 'react-navigation'

import Navigator from './navigator'
export default class App extends Component {
    render(){
        return (
            <Navigator screenProps={this.props.navigation} />
        )
    }
}