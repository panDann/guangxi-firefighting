<template>
<div class="">
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>巡检信息</span>
        </div>
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检计划</p>
                    <span class="gx-form-list-right fr">{{taskDetails.topic}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检任务</p>
                    <span class="gx-form-list-right fr">{{taskType[taskDetails.patrolTaskType?taskDetails.patrolTaskType:0]}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检人员</p>
                    <span class="gx-form-list-right fr">{{taskDetails.name}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检时间</p>
                    <span class="gx-form-list-right fr">缺少说明需要确认</span>
                </div>
            </div>
        </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>巡检设备列表</span>
        </div>
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list" :item='item' v-for="(item, index) in orderDeviceList" :key="index">
                    <div class="clearfix">
                        <div class="gx-form-list-left fl">{{item.equipmentName}}</div>
                        <div class="gx-form-list-right fr">
                            <span :class='StatColor[item.status?item.status:0]'>{{deviceStat[item.status?item.status:0]}}</span>
                            <a  href="javascript:;" class="equipmentk-list-state" @click="leapToDetail(item.id)">
                                <i class="icon-arrow"></i>
                            </a>
                        </div>
                    </div>
                    <p class="gx-form-list-p">地址：<span>{{item.name}}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
 
<script>

import * as Api from '@/api/order.js'

export default {

  data () {
    return {
       taskDetails:{},
       taskType:['基础巡检','网路巡检','自报警巡检'],
       taskCycle:['每日','每周','每月','非周期'],
       deviceStat:['','未巡检','已巡检'],
       StatColor:['','gx-textOrange', 'gx-textBlue'],
       orderDeviceList:[]
    }
  },

  mounted() {
    
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
    },

    leapToDetail(id){
          console.log('device id: '+id)
          let url = '/pages/inspection/device/main'+'?deviceId='+id
          console.log('leapToDetail...')
          console.log(url)
          mpvue.navigateTo({url})
    }
  },

  async onLoad(options){
    let that = this
    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('PatrolPlanDetails/main/onLoad...')
    console.log(loginInfo)
    console.log(options)

    var planId = options.planId;
    console.log('planId: '+planId)

    if (planId == null || planId == 'undefined') {
      planId = -1;
    }

    //请求巡检工单详情
    console.log('TaskDetail3...')
    let resDetails = await Api.scomPatrolTaskDetails(loginInfo.token, planId)

    if(!resDetails || resDetails.code!="0"){
        wx.showToast({
          title: resDetails.msg,
          icon: 'none'
        })
        return
    }
    console.log('++++++++++++3')
    console.log(resDetails.data)
    that.taskDetails = resDetails.data

    //请求巡检工单设备列表
    console.log('TaskDeviceList...')
    let resDeviceList = await Api.getTaskEquipmentById(loginInfo.token, planId)

    if(!resDeviceList || resDeviceList.code!="0"){
        wx.showToast({
          title: resDeviceList.msg,
          icon: 'none'
        })
        return
    }
    console.log('++++++++++++4')
    console.log(resDeviceList.data)
    that.orderDeviceList = resDeviceList.data

    // that.orderDeviceList = [
    //     {'equipmentName':'设备名称1','name':'西塔13楼1301房','status':1},
    //     {'equipmentName':'设备名称2','name':'西塔13楼1302房','status':2},
    //     {'equipmentName':'设备名称3','name':'西塔13楼1303房','status':2}
    // ]
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.equipmentk-list-state{
    float: right;
}

</style>
