
const host = 'http://127.0.0.1:8080/',
      $hideLoading = mpvue.hideLoading

export const fetch  = (url, data,method='POST',header = {})=> {
      mpvue.showLoading({
        title:data.loadingText || '加载中' // 数据请求前loading
      })
      return new Promise((resolve, reject) => {
        mpvue.request({
          url: host + url, // 仅为示例
          method,// 默认POST请求
          data,
          header: {
            'content-type': 'application/json', // 默认值
            ...header,
          },
          success: function (res) {
            $hideLoading()
            resolve(res.data)
          },
          fail: function (res) {
            $hideLoading()
            reject({msg:'请求失败'})
          },
          complete: function () {
            $hideLoading()
          }
        })
      })
    }
