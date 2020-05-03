<template>
<div class="gx-container gx-home">
        <div class="gx-home-work">
            <p class="gx-home-time">2020年4月11日</p>
            <div class="gx-home-remind">
                <div class="gx-home-remind-box">
                    <div class="gx-home-bg">
                        <p class="gx-home-unm">3</p>
                    </div>
                    <p class="gx-home-title">巡检任务</p>
                </div>

            </div>
        </div>
        <div class="gx-home-info">
            <i class="icon-remind"></i>
            <span class="gx-home-text">广州国际媒体港12楼A区烟感报警</span>
        </div>
        <div class="gx-home-card">
            <a class="gx-home-card-title"><span>设备情况</span><i class="icon-arrow"></i></a>
            <ul class="gx-home-card-ul">
                <li class="gx-home-card-list">
                    <img src="images/home_list1.png" class="gx-home-card-list-img">
                    <p class="gx-home-card-list-title">设备总数</p>
                    <p class="gx-home-card-list-unm">23</p>
                </li>
                <li class="gx-home-card-list">
                    <img src="images/home_list2.png" class="gx-home-card-list-img">
                    <p class="gx-home-card-list-title">在线设备</p>
                    <p class="gx-home-card-list-unm">10</p>
                </li>
                <li class="gx-home-card-list">
                    <img src="images/home_list3.png" class="gx-home-card-list-img">
                    <p class="gx-home-card-list-title">离线设备</p>
                    <p class="gx-home-card-list-unm">2</p>
                </li>
            </ul>
        </div>
    <div class="gx-home-card">
        <a class="gx-home-card-title"><span>今日警告</span><i class="icon-arrow"></i></a>
        <ul class="gx-home-card-ul">
            <li class="gx-home-card-list">
                <img src="images/home_list4.png" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">告警总数</p>
                <p class="gx-home-card-list-unm">23</p>
            </li>
            <li class="gx-home-card-list">
                <img src="images/home_list5.png" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">低电量告警</p>
                <p class="gx-home-card-list-unm">4</p>
            </li>
            <li class="gx-home-card-list">
                <img src="images/home_list6.png" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">低电量告警</p>
                <p class="gx-home-card-list-unm">8</p>
            </li>
            <li class="gx-home-card-list">
                <img src="images/home_list7.png" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">防拆告警</p>
                <p class="gx-home-card-list-unm">2</p>
            </li>
        </ul>
    </div>
    <div class="gx-home-card">
        <div class="gx-home-card-title">
            <span>近15天告警统计</span>
            <div class="gx-home-card-tab">
                <span class="active">近7天</span> <span>近15天</span>
            </div>
        </div>
        <div id="homecharts" class="gx-home-chart"></div>
    </div>
</div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
