/*
* @Author: beyondouyuan
* @Date:   2018-03-30 17:36:42
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-03-30 19:02:11
*/
import React, {
    Component
} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity 
} from 'react-native'


class Collect extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}>
          <Text>收藏</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default Collect