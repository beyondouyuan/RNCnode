/*
* @Author: beyondouyuan
* @Date:   2018-03-30 09:49:02
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-03-30 22:52:08
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RNHtmlView from 'react-native-htmlview'
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text
} from 'react-native'


const screenWidth = Dimensions.get('window').width

function uniqueId(min = 1, max = 10000) {
  var range = max - min
  return min + Math.round(Math.random() * range)
}
const fontSize = 14
const rowMargin = 5
const defaultHtmlStyles = {
  image: {
    width: screenWidth - 20,
    height: screenWidth - 20,
    resizeMode: Image.resizeMode.contain
  },
  p: {
    fontSize,
    color: 'rgba(0,0,0,0.8)'
  },
  pwrapper: {
    marginTop: 5,
    marginBottom: 5
  },
  a: {
    color: '#187CB3',
    fontSize: fontSize,
    paddingLeft: 4,
    paddingRight: 4,
    marginRight: 10,
    marginLeft: 10
  },
  h1: {
    fontSize: fontSize * 1.6,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)'
  },
  h1wrapper: {
    marginTop: rowMargin,
    marginBottom: rowMargin
  },
  h2: {
    fontSize: fontSize * 1.5,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.85)'
  },
  h2wrapper: {
    marginBottom: rowMargin,
    marginTop: rowMargin
  },
  h3: {
    fontWeight: 'bold',
    fontSize: fontSize * 1.4,
    color: 'rgba(0,0,0,0.8)'
  },
  h3wrapper: {
    marginBottom: rowMargin - 2,
    marginTop: rowMargin - 2
  },
  h4: {
    fontSize: fontSize * 1.3,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: 'bold'
  },
  h4wrapper: {
    marginBottom: rowMargin - 2,
    marginTop: rowMargin - 2
  },
  h5: {
    fontSize: fontSize * 1.2,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: 'bold'
  },
  h5wrapper: {
    marginBottom: rowMargin - 3,
    marginTop: rowMargin - 3
  },
  h6: {
    fontSize: fontSize * 1.1,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: 'bold'
  },
  h6wrapper: {
    marginBottom: rowMargin - 3,
    marginTop: rowMargin - 3
  },
  li: {
    fontSize: fontSize * 0.9,
    color: 'rgba(0,0,0,0.7)'
  },
  liwrapper: {
    paddingLeft: 20,
    marginBottom: 10
  },
  strong: {
    fontWeight: 'bold'
  },
  em: {
    fontStyle: 'italic'
  },
  codeScrollView: {
    backgroundColor: '#333',
    flexDirection: 'column',
    marginBottom: 15
  },
  codeRow: {
    flex: 1,
    flexDirection: 'row',
    height: 25,
    alignItems: 'center'
  },
  codeFirstRow: {
    paddingTop: 20,
    height: 25 + 20
  },
  codeLastRow: {
    paddingBottom: 20,
    height: 25 + 20
  },
  codeFirstAndLastRow: {
    paddingBottom: 20,
    height: 25 + 40,
    paddingTop: 20
  },
  lineNum: {
    width: 55,
    color: 'rgba(255,255,255,0.5)'
  },
  lineNumWrapper: {
    width: 55,
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
  },
  codeWrapper: {
    flexDirection: 'column'
  },
  codeLineWrapper: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  blockquotewrapper: {
    paddingLeft: 20,
    borderLeftColor: '#3498DB',
    borderLeftWidth: 3
  }
}
export default class HtmlView extends Component {
    static propTypes = {
        value: PropTypes.string,
        style: PropTypes.object,
        maxImageWidth: PropTypes.number
    };
    static defaultProps = {
        maxImageWidth: screenWidth - 20,
        style: {},
        value: ''
    };
    constructor(props) {
      super(props);
      this.state = {
      };
      this.handleImageLoadEnd = this.handleImageLoadEnd.bind(this)
      this.handleRenderNode = this.handleRenderNode.bind(this)
      this.images = {}
      const styles = {}
      for(let key in defaultHtmlStyles) {
        if (props.style[key]) {
            styles[key] = { ...defaultHtmlStyles[key], ...props.styles[key] }
        } else {
            styles[key] = defaultHtmlStyles[key]
        }
      }
      this.styles = StyleSheet.create(styles)
    }
    handleImageLoadEnd(uri, index) {
        const { maxImageWidth } = this.props
        Image.getSize(
            uri,
            (width, height) => {
                if (width > maxImageWidth) {
                    width = maxImageWidth
                    height = maxImageWidth / width * height
                } 
                this.images[index] && this.images[index].setNativeProps({
                    style: {
                        width: width,
                        height: height
                    }
                })
            },
            err => {}
        )
    }
    handleRenderNode(node, index) {
        if (node.name == 'iframe') {
          return (
            <View key={'iframe_' + index} style={{ width: 200, height: 200 }}>
              <Text>{node.attribs.src}</Text>
            </View>
          )
        }
        if (node.name === 'img') {
            const uri = node.attribs.src
            return (
                <Image
                    style={this.styles.image}
                    source={{uri: uri}}
                    resizeMode="center"
                    key={'img_' + index}
                    onLoadEnd={() => this.handleImageLoadEnd(uri, index)}
                />
            )
        }
    } 
    render() {
        const { value } = this.props
        return (
            <RNHtmlView
                value={value}
                stylesheet={this.styles}
                renderNode={this.handleRenderNode}
            />
        )
    }
}