<script>
import * as Api from '@/api/login.js'

export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }

    let loginInfo = wx.getStorageSync("loginInfo")
      console.log('App start...')
      console.log(loginInfo)
      if(loginInfo){

        checkToken(loginInfo.token)
        
      }else{
        wx.reLaunch({url: '/pages/login/main'})
      }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}

//暂时使用该方法检查token过期或非法
async function checkToken(token){
  console.log('check token...')
  console.log(token)
  let res = await Api.checkToken(token, 0)
    
  console.log(res)
  if(res.code=="2003"||res.code=="2005"){
      wx.clearStorageSync()
      console.log('clearStorageSync...')
      wx.reLaunch({url: '/pages/login/main'})
      return 
  }
  wx.reLaunch({url: '/pages/first/main'})
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
