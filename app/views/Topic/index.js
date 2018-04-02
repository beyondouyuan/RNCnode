/*
 * @Author: beyondouyuan
 * @Date:   2018-03-30 22:45:39
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-03-30 23:54:47
 */
import React, {
  Component
} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'

import HtmlView from '../../components/HtmlView'
import parseAPI from '../../api/urls'
import { Format } from '../../utils/Format'
import { getTopic } from '../../api'
class Topic extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      id: this.props.navigation.state.params.id,
      title: '',
      content: '',
      author: {},
      create_at: '',
      replies: [],
      reply_count: 0,
      visit_count: 0
    };
    this.handleResponse = this.handleResponse.bind(this)
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    const { id } = this.state
    let url = parseAPI('topic') + id
    const condition = {
      url,
      callback: this.handleResponse
    }
    getTopic(condition)
  }

  handleResponse(res) {
    // const body = res._bodyInit
    const { data } = res
    this.setState({
      title: data.title,
      content: data.content,
      author: data.author,
      create_at: data.create_at,
      replies: data.replies,
      reply_count: data.reply_count,
      visit_count: data.visit_count
    }, () => console.log(data))
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.top}>
          <View style={styles.title}>
          <Text style={styles.txt}>
            {this.state.title}
          </Text>
        </View>
        <View style={styles.author}>
          <Image
            style={styles.authorImg}
            source={{uri: this.state.author.avatar_url}}
          />
          <Text>
            {this.state.author.loginname}
          </Text>
          <Text style={styles.authorInfo}>作者</Text>
        </View>
        <View style={styles.time}>
          <Text>发表于：{Format(this.state.create_at)}</Text>
        </View>
        </View>
        <View style={styles.content}>
          <HtmlView value={this.state.content} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#F4F4F4'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 14
  },
  txt: {
    fontSize: 24,
    color: '#434343'
  },
  icon: {
        width: 16,
        height: 16
  },
  author: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImg: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: 16
  },
  time: {
    paddingTop: 12
  },
  authorInfo: {
    marginLeft: 16,
    color: '#e78170',
    borderColor: '#e78170',
    borderWidth: 1,
    paddingLeft: 6,
    paddingRight: 6
  },
  content: {
    padding: 14
  }
});


export default Topic