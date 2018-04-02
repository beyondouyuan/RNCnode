/*
* @Author: beyondouyuan
* @Date:   2018-03-30 21:57:52
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-03-30 21:58:09
*/
export const Format = (date) => {
    var date = new Date(date);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前';
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '个小时前';
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '个月前';
    } else {
        return parseInt(time / 31536000000) + '年前';
    }
}