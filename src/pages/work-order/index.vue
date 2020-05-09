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
    tabChange(index) {
        console.log(index);
        
        this.activeKey=index
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
      let resOrder = await Api.scomWorkOrderList(loginInfo.token, loginInfo.id, 0)
      console.log(resOrder)
      if(resOrder.code!="0"){
        wx.showToast({
          title: resOrder.msg,
          icon: 'none'
        })
      }

      console.log('ccccc...')

        that.allList = [
                     {
              imgUrl:'/static/assets/images/work_list1.png',
              name:'低电量警告',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              address:'广州国际媒体港12楼A栋'
          },{
              imgUrl:'/static/assets/images/work_list2.png',
              name:'低电量警告',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              address:'广州国际媒体港12楼A栋'
          },{
              imgUrl:'/static/assets/images/work_list3.png',
              name:'烟感01',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              address:'广州国际媒体港12楼A栋'
          },
                ]
},

  created () {
    // let app = getApp()
  }
}
</script>
