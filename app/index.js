/*
* @Author: beyondouyuan
* @Date:   2018-03-30 17:30:59
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-04-02 11:12:22
*/
import React, { Component } from 'react'
import {
    Platform,
    View
} from 'react-native'
import Router from './routes'
export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <Router />
      // </Provider>
    )
  }
}