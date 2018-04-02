/*
* @Author: beyondouyuan
* @Date:   2018-03-30 21:56:57
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-04-02 16:49:41
*/
import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,
  FlatList,
  Text
} from 'react-native'

import { Format } from '../utils/Format'
export default class TopicList extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        navigate: this.props.navigate
      };
      this.renderItemHandle = this.renderItemHandle.bind(this)
      this.keyExtractorHandle = this.keyExtractorHandle.bind(this)
      this.handleEndReached = this.handleEndReached.bind(this)
    }
    componentDidMount() {
    }
    renderItemHandle(item, index) {
        const { navigate } = this.state
        return (
            <View
                   style={styles.list}
                   key={item.id+index}>
                <TouchableOpacity
                  onPress={() =>
                    navigate('Topic', { id: item.id })
                  }
                >
                   <View
                       style={styles.authorContainer}
                       >
                       <Image
                           source={{
                               uri: item.author.avatar_url
                           }}
                           style={styles.authorImg}
                       />
                       <Text
                           style={styles.txt}
                           
                       >
                           {item.author.loginname}
                       </Text>
                       <Text
                           style={styles.txt}
                           >
                           {Format(item.create_at)}
                       </Text>
                   </View>
                   <View
                       style={styles.title}
                       >
                       <Text
                           style={styles.titTxt}
                           >
                           {item.title}
                       </Text>
                   </View>
                   <View
                       style={styles.countContainer}
                       
                   >
                       <View
                           style={styles.count}
                       >
                           <Image
                               source={require('../assets/icons/visit.png')}
                           />
                           <Text style={styles.countTxt}>{item.visit_count}</Text>
                       </View>
                       <View
                           style={styles.count}
                       >
                           <Image
                               source={require('../assets/icons/reply.png')}
                           />
                           <Text style={styles.countTxt}>{item.reply_count}</Text>
                       </View>
                   </View>
                   </TouchableOpacity>
               </View>
        )
    }
    keyExtractorHandle(item, index) {
        return item.id
    }
    handleEndReached() {
        this.setState({
            // page: this.state.page+1
        }, () => {
            setTimeout(() => {
                // this.fetchMore()
            }, 600)
        })
    }
    render() {
        const { data }  = this.props
        return (
            <View>
                <FlatList
                    data={data}
                    onEndReachedThreshold={1}
                    scrollToEnd={(e) => {
                        this.handleEndReached()
                    }}
                    onEndReached={this.handleEndReached}
                    renderItem={({item, index}) => this.renderItemHandle(item, index)}
                    keyExtractor={this.keyExtractorHandle}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        padding: 15,
    },
    authorContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10
    },
    txt: {
        marginLeft: 16
    },
    title: {
        paddingLeft: 10,
        paddingRight: 10
    },
    titTxt: {
        fontSize: 14
    },
    countContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    count: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    countTxt: {
        marginLeft: 10,
        marginRight: 10
    },
    authorImg: {
        width: 32,
        height: 32,
        borderRadius:32
    }
});