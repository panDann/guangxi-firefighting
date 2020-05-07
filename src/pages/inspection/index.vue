<template>
<div class="gx-container gx-work-con">
    <Tab :list='tabList' @tab-change='tabChange'/>

    <div id="tabContent" class="gx-tab-content">
        <div>
            <ul class="work-list-ul">
                <Card type='inspection'  :item='item' v-for="(item, index) in allList" :key="index" />
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
      allList:[
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    Tab,
    Card
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

        let that = this
        let loginInfo = wx.getStorageSync("loginInfo")
        console.log(index);
        this.activeKey=index
        console.log('tttttttt...')

        if(loginInfo.sysUserType==3){
            //请求巡检工单
            console.log('patrolOrder...')
            let resPatrolTask = await Api.scomPatrolTask(loginInfo.token, loginInfo.id, index)
            console.log(resPatrolTask)
            if(resPatrolTask.code!="0"){
                wx.showToast({
                    title: resPatrolTask.msg,
                    icon: 'none'
                })
            }

            if(index==1){
                that.allList = [
                    {
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          }
                ]
            }else if(index==2){
                that.allList = [
                    {
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
                ]
            }else{
                that.allList = [
                    {
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          }
                ]
            }
        }
        console.log('aaaaaaaaa...')

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

    if(loginInfo.sysUserType==3){
      //巡检员
      wx.setNavigationBarTitle({
        title: '巡检工单' 
      })

      //请求巡检工单
      console.log('patrolOrder...')
      let resPatrolTask = await Api.scomPatrolTask(loginInfo.token, loginInfo.id, 0)
      console.log(resPatrolTask)
      if(resPatrolTask.code!="0"){
        wx.showToast({
          title: resPatrolTask.msg,
          icon: 'none'
        })
      }

        that.allList = [
                    {
              imgUrl:'/static/assets/images/patrol_list1.png',
              name:'每周二房消防基础巡检（14周）',
              time:'2020-02-22 15:22:43',
              status:'待处理',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list2.png',
              name:'每月消防网络巡检（4月）',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },{
              imgUrl:'/static/assets/images/patrol_list3.png',
              name:'每日消防网络巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          },
          {
              imgUrl:'/static/assets/images/patrol_list4.png',
              name:'临时巡检',
              time:'2020-02-22 15:22:43',
              status:'已完成',
              summary:'李明 | 临时巡检'
          }
                ]

    }else if(loginInfo.sysUserType==0){
      //管理员
      wx.setNavigationBarTitle({
        title: '巡检计划' 
      })

      //请求巡检计划
      console.log('PatrolPlan...')
      let resPatrolPlan = await Api.scomPatrolPlan(loginInfo.token, loginInfo.tenantId)
      console.log(resPatrolPlan)
      if(resPatrolPlan.code!="0"){
        wx.showToast({
          title: resPatrolPlan.msg,
          icon: 'none'
        })
      }
    }else{

    }

  },

  created () {
    // let app = getApp()
  }
}
</script>
