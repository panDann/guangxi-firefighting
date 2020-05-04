import mpvue from 'mpvue'

const host = ''

export const fetch  = (url, data,method='POST',header = {})=> {
      wx.showLoading({
        title: '加载中' // 数据请求前loading
      })
      return new Promise((resolve, reject) => {
        wx.request({
          url: host + url, // 仅为示例
          method,
          data,
          headers: {
            'content-type': 'application/json', // 默认值
            ...header,
          },
          success: function (res) {
            wx.hideLoading()
            resolve(res.data)
          },
          fail: function (res) {
            wx.hideLoading()
            reject(false)
          },
          complete: function () {
            wx.hideLoading()
          }
        })
      })
    }
