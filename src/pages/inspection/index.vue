<template>
<div class="gx-container gx-work-con">
    <Tab :list='tabList' @tab-change='tabChange' v-show="userType1==3"/>
    <div class="gx-top-search flex" v-if="userType1==0">
            <picker mode='selector' class="gx-select-title" @bindchange="bindPickerChange" :value='index' :range="basePatrolType">
              {{basePatrolTypeName}}
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
              </picker>
            <picker mode='selector' class="gx-select-title" @bindchange="bindPickerChange" :value='index' :range="basePatrolCycle">
              {{basePatrolCycleName}}
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
            </picker>
        <div class="gx-search">
            <div class="gx-search-con flex">
                <img class="icon-search" src="/static/assets/images/icon_search.png" />
                <input  type="text" placeholder="搜索..." class="gx-search-input">
                <img class="icon-del-btn" src="/static/assets/images/icon_close.png" />
            </div>
        </div>
            <span class="gx-search-close">检索</span>
    </div>

    <!-- <pull-refresh :refreshing="isRefreshing" :on-refresh="onRefresh" pull-height="400px">
      <div class="list">
        <p v-for="n in 20">{{n}}</p>
      </div>
    </pull-refresh> -->

    <!-- <TableView :visibleHeight="winHeight" pulldownDistance="100" refreshPulldownText="你再往下拉试试" refreshUndoText="你松开试试" refreshLoadingText="我在努力刷新中~" loadmoreLoadingText="正在加载数据" loadmoreAllloadedText="没有更多数据" isNeedLoadmore :_loadmore="loadmore" :_refresh="refresh"
    :allloaded="allloaded" :isEmpty="!loading &&allList.length<=0">
            <ul class="work-list-ul">
                <Card type='inspection' :usertype='userType1' :item='item' v-for="(item, index) in allList" :key="index" />
            </ul>   
  </TableView> -->

    <div id="tabContent" class="gx-tab-content">
        <div>
            <ul class="work-list-ul">
                <Card type='inspection' :usertype='userType1' :item='item' v-for="(item, index) in allList" :key="index" />
            </ul>
            <div class="list-bottom-img"></div>
        </div>
    </div>
</div>

</template>

<script>

import * as Api from '@/api/order.js'
import Tab from '@/components/tab/index.vue'
import Card from '@/components/card/card.vue'
// import TableView from '@/components/refreshTable/refreshTable.vue'

export default {
  data () {
    return {
      currentPage: 1,
      totalPage: 0,
      loading: false,
      allloaded: false,
      userid:'',
      userInfo: {},
      hasUserInfo: false,
    winWidth: 0,
    winHeight: 840,
      userType1:'',
      basePatrolTypeName:'',
      basePatrolType:['基础巡检', '网络巡检', '自报警巡检'],
      basePatrolCycleName:'',
      basePatrolCycle:['全部', '每日', '每周', '每月', '非周期'],
      basePatrolStatus:['未完成','未完成','已完成'],
      basePatrolCycleIcon:[ '/static/assets/images/patrol_list3.png',
                            '/static/assets/images/patrol_list1.png',
                            '/static/assets/images/patrol_list2.png',
                            '/static/assets/images/patrol_list4.png'],
      activeKey:0,
      tabList: [
          {
              label:'全部',
              count:'10',
              key:0
          },
          {
              label:'未完成',
              count:'10',
              key:1
          },
          {
              label:'已完成',
              count:'10',
              key:2
          },
      ],
      allList:[
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    Tab,Card
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
    leapToDetail(planId) {


      console.log('userType: '+this.userType1)
      if(this.userType1==3){
        let url =inspectionDetailPagePath
        mpvue.navigateTo({url})
      }else if(thisw.userType1==0){
        let url ='/pages/inspection/plan/main?planId='+1
        mpvue.navigateTo({url})
      }

    },
    async tabChange(index) {

        let that = this
        let loginInfo = wx.getStorageSync("loginInfo")
        this.activeKey=index
        console.log('index: '+index)

        if(loginInfo.sysUserType==3){
            //请求巡检工单
            console.log('patrolOrder...')
            let status=(index==1||index==2)?index:null

            if(index==0){
              status = null
            }else if(index==2){
              status = 2 //已完成
            }else if(index==1){
              status = 0 //待完成
            }
            let resPatrolTask = await Api.scomPatrolTask(loginInfo.token, loginInfo.id, status)
            console.log(resPatrolTask)
            if(resPatrolTask.code!="0"){
                wx.showToast({
                    title: resPatrolTask.msg,
                    icon: 'none'
                })
                return
            }
            that.allList = []
            for(let index in resPatrolTask.data){
              let dict = resPatrolTask.data[index]
              let tmpDict = {}

              let tmpPatrolTypeName = that.basePatrolType[dict.patrolTaskType]
              tmpDict.id = dict.id
              tmpDict.name = dict.topic
              tmpDict.status = that.basePatrolStatus[dict.status]
              tmpDict.summary = dict.name + ' | '+tmpPatrolTypeName
              tmpDict.imgUrl = that.basePatrolCycleIcon[dict.cycle]
              tmpDict.showcolor = dict.status
              tmpDict.time = dict.updateTime
              that.allList.push(tmpDict)
            }
        }
        console.log('aaaaaaaaa...')

    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },

    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        basePatrolTypeName: basePatrolType[e.detail.value]
      })
    },
  },

   // 加载更多
    loadmore({detail}) {
      console.info('loadmore...');

      var totalPage = this.token;
      var currentPage = this.currentPage + 1;
      if (currentPage > totalPage) {
        this.allloaded = true
      } else {
        this.currentPage = currentPage
      }

    },

  // 刷新
    refresh({detail}) {
      console.info('refresh...');

      this.loading = false
      this.allloaded = false
      this.currentPage = 1
    },

  async onLoad(){
    let that = this

    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('inspection/main/onLoad...')
    console.log(loginInfo)

    that.userType1 = loginInfo.sysUserType
    // that.userType1 = 0

    console.log('userType: '+that.userType1)

    if(that.userType1==3){
      //巡检员
      wx.setNavigationBarTitle({
        title: '巡检工单' 
      })

      //请求巡检工单
      console.log('patrolOrder...')
      let resPatrolTask = await Api.scomPatrolTask(loginInfo.token, loginInfo.id)
      console.log(resPatrolTask)
      if(resPatrolTask.code!="0"){
        wx.showToast({
          title: resPatrolTask.msg,
          icon: 'none'
        })
        return
      }

      that.allList = []
      for(let index in resPatrolTask.data){
        let dict = resPatrolTask.data[index]
        let tmpDict = {}

        let tmpPatrolTypeName = that.basePatrolType[dict.patrolTaskType]
        tmpDict.id = dict.id
        tmpDict.name = dict.topic
        tmpDict.status = that.basePatrolStatus[dict.status]
        tmpDict.summary = dict.name + ' | '+tmpPatrolTypeName
        tmpDict.imgUrl = that.basePatrolCycleIcon[dict.cycle]
        tmpDict.showcolor = dict.status
        tmpDict.time = dict.updateTime
        that.allList.push(tmpDict)
      }

    }else if(that.userType1==0){
      //管理员
      wx.setNavigationBarTitle({
        title: '巡检计划' 
      })

      that.basePatrolTypeName = that.basePatrolType[0]
      that.basePatrolCycleName = that.basePatrolCycle[0]
      console.log('basePatrolTypeName: '+that.basePatrolTypeName)

      //请求巡检计划
      console.log('PatrolPlan...')
      let resPatrolPlan = await Api.scomPatrolPlan(loginInfo.token, loginInfo.tenantId)
      console.log(resPatrolPlan)
      if(resPatrolPlan.code!="0"){
        wx.showToast({
          title: resPatrolPlan.msg,
          icon: 'none'
        })
        return
      }

      that.allList = []
      for(let index in resPatrolPlan.data){
        let dict = resPatrolPlan.data[index]
        let tmpDict = {}

        let tmpPatrolTypeName = that.basePatrolType[dict.patrolTaskType]
        tmpDict.id = dict.id
        tmpDict.name = dict.topic
        tmpDict.status = that.basePatrolStatus[dict.status]
        tmpDict.summary = dict.name + ' | '+tmpPatrolTypeName
        tmpDict.imgUrl = that.basePatrolCycleIcon[dict.cycle]
        tmpDict.showcolor = dict.status
        tmpDict.time = dict.updateTime
        that.allList.push(tmpDict)
      }

      // that.allList = [
      //               {
      //         id:1,
      //         imgUrl:'/static/assets/images/patrol_list1.png',
      //         name:'每周二房消防基础巡检（14周）',
      //         time:'2020-02-22 15:22:43',
      //         status:'待处理',
      //         summary:'李明 | 临时巡检'
      //     },{
      //         id:2,
      //         imgUrl:'/static/assets/images/patrol_list2.png',
      //         name:'每月消防网络巡检（4月）',
      //         time:'2020-02-22 15:22:43',
      //         status:'已完成',
      //         summary:'李明 | 临时巡检'
      //     }
      //           ]
    }else{

    }

  },

  getContentHeight(){
    var that = this;
    console.info('getContentHeight');
    //获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.info(res);
        // 获取可使用窗口宽度
        let clientHeight = res.windowHeight;
        console.log('windowHeight: ' + clientHeight);

        // 获取可使用窗口高度
        let clientWidth = res.windowWidth;
        // 算出比例
        let ratio = 750 / clientWidth;
        // 算出高度(单位rpx)
        let height = clientHeight * ratio;
        // 设置高度
        console.log('height: ' + height);
        that.setData({
          winHeight: height - 450
        });
      }
    })
  },

  created () {
    // let app = getApp()
    var that = this;
    console.info('getContentHeight');
    //获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.info(res);
        // 获取可使用窗口宽度
        let clientHeight = res.windowHeight;
        console.log('windowHeight: ' + clientHeight);

        // 获取可使用窗口高度
        let clientWidth = res.windowWidth;
        // 算出比例
        let ratio = 750 / clientWidth;
        // 算出高度(单位rpx)
        let height = clientHeight * ratio;
        // 设置高度
        console.log('height: ' + height);
        that.winHeight = height - 450
      }
    })
  }
}
</script>

<style scoped>

.gx-top-search{
    padding: 0.2rem;
    border-bottom: 1px solid #eee;
    font-size: 0.4rem;
}
.gx-top-search .gx-select-box{
    float: left;
    width:20%;
    height: 0.9rem;
    line-height:  0.9rem;
    text-align: center;
    position: relative;
}

.gx-select-title{
    font-size: 0.4rem;
    color: #444;
}

.gx-select-title span{
    padding-left: 0.3rem;
}

.gx-select-list {
    z-index: 1000;
    display: none;
    background: #fff;
    border: 1px solid #eee;
}
.flex {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}
.gx-search{
  flex:2;
  margin: 0 .1rem;
}
.gx-search-con{
  
    border: 1px solid #ddd;
}

.gx-search .gx-search-close{
    margin-left: 0.3rem;
    color: #666;
}
.gx-search-input{
    padding: 0.1rem 0;
    color: #333;
    flex-grow: 1;
    height:  0.6rem;
    line-height:  0.9rem;
    font-size: 0.4rem;

}
.icon-arrow-bottom{
    width: 0.3rem;
    height: 0.3rem;
    /* background-image: url("../images/icon_arrow_bottom.png"); */
    display: inline-block;
}

.icon-search{
    width: 0.5rem;
    height: 0.5rem;
    /* background-image: url("../images/icon_search.png"); */
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: -0.1rem;
    margin:0rem 0.2rem;
}

.icon-del-btn{
    width: 0.4rem;
    height: 0.4rem;
    /* background-image: url("../images/icon_close.png"); */
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    vertical-align: -0.1rem;
    margin:0rem 0.2rem;
}


</style>
