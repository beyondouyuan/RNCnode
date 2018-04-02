/*
* @Author: beyondouyuan
* @Date:   2018-03-30 21:59:12
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-03-30 21:59:40
*/

export const get = config => {
    let { url, params, callback } = config
    if (params) {
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`))
        if (url.search(/\?/) === -1) {
            url += `?${paramsArray.join('&')}`
        } else {
            url += `&${paramsArray.join('&')}`
        }
    }

    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(resJSON => {
        callback(resJSON)
    })
    .done()
}


export const getHTML = config => {
    let { url, params, callback } = config
    if (params) {
        let paramsArray = []
        Object.keys(params).forEach(key => paramsArray.push(`${key}=${params[key]}`))
        if (url.search(/\?/) === -1) {
            url += `?${paramsArray.join('&')}`
        } else {
            url += `&${paramsArray.join('&')}`
        }
    }

    fetch(url, {
        method: 'GET'
    })
    // .then(res => res.json())
    .then(res => {
        callback(res)
    })
    .done()
}

export const post = config => {
    const { url, params, headers, callback } = config
    fetch(url, {
        method: 'POST',
        headers: {
            'token': headers
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(resJSON => {
        callback(resJSON)
    })
    .done()
}