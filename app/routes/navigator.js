/*
 * @Author: beyondouyuan
 * @Date:   2018-03-30 17:32:29
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-04-02 17:19:28
 */
import React, {
    Component
} from 'react'
import {
    Platform,
    Image,
    StyleSheet
} from 'react-native'

import {
    TabNavigator,
    StackNavigator,
    DrawerNavigator,
    NavigationActions
} from 'react-navigation'

// 底部菜单组件
import Topics from '../views/Topics'
import Mine from '../views/Mine'
import Message from '../views/Message'
import Publish from '../views/Publish'
import Collect from '../views/Collect'

// 侧边栏组件

import Good from '../views/Good'
import Share from '../views/Share'
import Ask from '../views/Ask'
import Job from '../views/Job'

// 堆栈导航组件
import Topic from '../views/Topic'
import Login from '../views/Login'

const tabBarConfig = {
    initialRouteName: 'Topics',
    tabBarPosition: 'bottom',
    lazyLoad: true,
    tabBarOptions: {
        showIcon: true,
        loginRequired: ['Collect','Publish','Message','Mine'],
        pressOpacity: .8,//点击时的透明度
        activeTintColor: 'lightgreen', //选中状态标签颜色
        inactiveTintColor: '#FFFFFF',//未选中状态标签颜色
        labelStyle: {
            fontSize: 12
        },
        iconStyle: {//图标的样式
            marginTop: 0,
        },
        indicatorStyle: { //去掉安卓底部激活项目下划线
            height: 0
        },
        style: {
            height: 65,
            backgroundColor: 'rgba(49, 49, 49, 1)' // 背景色
        }
    }
}
// 底部菜单
const Tab = TabNavigator({
    Topics: {
        screen: Topics,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={require('../assets/icons/all.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Collect: {
        screen: Collect,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/collect.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Publish: {
        screen: Publish,
        tabBarOptions: {
                showLabel: false
        },
        navigationOptions: {
            tabBarLabel: '发布',
            tabBarLabel: () => null,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/publish.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Message: {
        screen: Message,
        navigationOptions: {
            tabBarLabel: '信息',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/message.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/mine.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            )
        }
    }
}, tabBarConfig)

const stackConfig = {
    initialRouteName: 'Tab',
    headerMode: "none",
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
}
// 堆栈菜单
const AppNavigator = StackNavigator({
    Tab: {
        screen: Tab
    },
    Login: {
        screen: Login
    },
    Topic: {
        screen: Topic
    }
}, stackConfig)

// 侧边栏
const Drawer = DrawerNavigator({
    Home: {
        screen: AppNavigator,
        navigationOptions: {
            drawerLabel: '全部',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/all.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Good: {
        screen: Good,
        navigationOptions: {
            drawerLabel: '精华',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/good.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Share: {
        screen: Share,
        navigationOptions: {
            drawerLabel: '分享',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/share.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Ask: {
        screen: Ask,
        navigationOptions: {
            drawerLabel: '问答',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/ask.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Job: {
        screen: Job,
        navigationOptions: {
            drawerLabel: '招聘',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../assets/icons/job.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    }
}, {
    drawerWidth: 240, // 抽屉宽
    drawerBackgroundColor: 'rgba(49, 49 , 49, 1)',//抽屉侧边栏背景色
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      // activeTintColor: 'white',  // 选中文字颜色
      // activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#FFFFFF',  // 未选中文字颜色
      // inactiveBackgroundColor: '#fff', // 未选中背景颜色
      activeTintColor: 'lightgreen',
      style: {  // 样式
        
      }
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
    iconBig: {
        width: 48,
        height: 48
    }
})

export default Drawer