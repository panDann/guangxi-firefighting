<template>
<div class="gx-container gx-work-con">
    <Tab :list='tabList' @tab-change='tabChange'/>
    <List title="111" :list="[]" />

        <div>
            <ul class="work-list-ul">
                <Card type='workOrder'  :item='item' v-for="(item, index) in allList" :key="index" />
            </ul>
            <div class="list-bottom-img"></div>
        </div>
</div>

</template>

<script>

import * as Api from '@/api/order.js'
import Tab from '@/components/tab/index.vue'
import Card from '@/components/card/card.vue'
import List from '@/components/list/index.vue'

export default {
  data () {
    return {
      warningIcon: {
        key20:'/static/assets/images/work_list3.png',
        key21:'/static/assets/images/work_list2.png',
        key22:'/static/assets/images/work_list3.png',
        key23:'/static/assets/images/work_list1.png', 
      },
      baseStatus:['待完成','待完成','已完成'],
      activeKey:0,
      tabList: [
          {
              label:'全部',
              count:'10',
              key:0
          },
          {
              label:'待处理',
              count:'10',
              key:1
          },
          {
              label:'已完成',
              count:'10',
              key:2
          },
      ],
      allList:[],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    Tab,
    Card,
    List

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
    async tabChange(index) {
      console.log(index);
      this.activeKey=index
      let that = this
      let status = index
      if(index==0){
        status = null
      }else if(index==1){
        status = 0
      }
      console.log('vvvvvvvvvvv...')
      let loginInfo = wx.getStorageSync("loginInfo")
      let resOrder = await Api.scomWorkOrderList(loginInfo.token, loginInfo.id, status)
      console.log(resOrder)
      if(resOrder.code!="0"){
        wx.showToast({
          title: resOrder.msg,
          icon: 'none'
        })
        return
      }

      that.allList = []
      for (let devkey in resOrder.data) {
        let orderTmp = {}
        let order = resOrder.data[devkey]
        orderTmp.name = order.topic
        orderTmp.status = that.baseStatus[order.status]
        let alarmTypeId = order.alarmTypeId
        orderTmp.imgUrl = that.warningIcon['key'+alarmTypeId]
        orderTmp.address = order.address
        orderTmp.time = order.createTime
        orderTmp.showcolor = order.status
        that.allList.push(orderTmp);
      }

    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  async onLoad(){
    let that = this

    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('inspection/main/onLoad...')
    console.log(loginInfo)

    //请求工单列表
      console.log('OrderList...')
      let resOrder = await Api.scomWorkOrderList(loginInfo.token, loginInfo.id)
      console.log(resOrder)
      if(resOrder.code!="0"){
        wx.showToast({
          title: resOrder.msg,
          icon: 'none'
        })
        return
      }

      console.log('ccccc...')

      that.allList = []
      for (let devkey in resOrder.data) {
        let orderTmp = {}
        let order = resOrder.data[devkey]
        orderTmp.name = order.topic
        orderTmp.status = that.baseStatus[order.status]
        let alarmTypeId = order.alarmTypeId
        orderTmp.imgUrl = that.warningIcon['key'+alarmTypeId]
        orderTmp.address = order.address
        orderTmp.time = order.createTime
        orderTmp.showcolor = order.status
        that.allList.push(orderTmp);
      }
},

  created () {
    // let app = getApp()
  }
}
</script>
