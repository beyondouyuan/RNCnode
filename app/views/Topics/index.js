/*
* @Author: beyondouyuan
* @Date:   2018-03-30 17:37:04
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-04-02 14:59:02
*/
import React, {
    Component
} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'

import TopicList from '../../components/TopicList'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'
import { getTopics } from '../../api'

class Topics extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      page: 1,
      list: [],
      tabs: ['精华', '分享', '问答', '招聘']
    };
    this.fetchData = this.fetchData.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    const { page } = this.state
    const tab = '' // 不带主题参数或者带all字段，则获取全部
    const condition = {
      params: {
        page,
        tab
      },
      callback: this.handleResponse
    }
    getTopics(condition)
  }
  handleResponse(res) {
    this.setState({
      list: this.state.list.concat(res.data)
    }, () => console.log('hi'))
  }

  render() {
    const { list } = this.state
    const {navigate} = this.props.navigation
    return (
      <TopicList data={list} navigate={navigate} />
    );
  }
}

const styles = StyleSheet.create({

});


export default Topics