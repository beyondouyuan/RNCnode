/*
* @Author: beyondouyuan
* @Date:   2018-03-30 22:01:35
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-03-30 23:14:11
*/
import { get, post, getHTML } from '../utils/Request'
import parseAPI from './urls'
// 主题列表
export const getTopics = config => {
    // 默认配置
    const setting = {
        url: parseAPI('topics'),
        params: {
            page: 1,
            tab: '',
            limit: 20,
            mdrender: false
        }
    }
    // 合并自定义参数
    Object.assign(setting, config)
    get(setting)
}

export const getTopic = (config) => {
    const setting = {
        url: parseAPI('topic'),
        params: {
            mdrender: true
        }
    }
    // 合并自定义参数
    Object.assign(setting, config)
    get(setting)
}