<template>
<page-meta
  
  root-font-size="16px"
>
 <div class="gx-container gx-home">
        <div class="gx-home-work">
            <p class="gx-home-time">{{today}}</p>
            <div class="gx-home-remind">
                <div class="gx-home-remind-box">
                    <div class="gx-home-bg">
                        <p class="gx-home-unm">{{totalTask}}</p>
                    </div>
                    <p class="gx-home-title">{{totalTitle}}</p>
                </div>

            </div>
        </div>
        <div class="gx-home-info">
            <i class="icon-remind"></i>
            <span class="gx-home-text">广州国际媒体港12楼A区烟感报警</span>
        </div>
        <div class="gx-home-card">
            <a href="javascript:;" @click="deviceList" class="gx-home-card-title"><span>设备情况</span><i class="icon-arrow"></i></a>
            <ul class="gx-home-card-ul">
                <li class="gx-home-card-list" v-for="(item, index) in deviceData" :key="index">
                    <img :src="item.imgUrl" class="gx-home-card-list-img">
                    <p class="gx-home-card-list-title">{{item.label}}</p>
                    <p class="gx-home-card-list-unm">{{item.count}}</p>
                </li>
            </ul>
        </div>
    <div class="gx-home-card">
        <a class="gx-home-card-title"><span>今日警告</span></a>
        <ul class="gx-home-card-ul">
            <li class="gx-home-card-list" v-for="(item, index) in todayWarningData" :key="index">
                <img :src="warningIcon[item.id]" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">{{item.name}}</p>
                <p class="gx-home-card-list-unm">{{item.count}}</p>
            </li>
        </ul>
    </div>
    <div class="gx-home-card">
        <div class="gx-home-card-title">
            <span>近15天告警统计</span>
            <div class="gx-home-card-tab">
                <span :class="(activeTab&&'active')" @click="activeTab=1">近7天</span> <span :class="(!activeTab&&'active')" @click="activeTab=0">近15天</span>
            </div>
        </div> 
        <div class="gx-home-chart">
        <mpvue-echarts :echarts="echarts" :onInit="initChart" />
        </div>
        <!-- <div id="homecharts" class="gx-home-chart"></div> -->
    </div>
    <div class="equipment-list-box">
        <ul class="equipment-list-ul">
          <Card :item='item' v-for="(item, index) in list" :key="index" />
        </ul>
        <div class="list-bottom-img"></div>
    </div>
</div> 
</page-meta>

</template>
 
<script>
import * as Api from '@/api/first.js'
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  var option = {
    backgroundColor: '#fff',
    color: ['#37A2DA', '#67E0E3','#108EE9'],
   
    legend: {
      data: ['烟雾告警', '低电压告警', '防拆告警']
    },
    grid: {
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    }, 
    series: [{
      name: '烟雾告警',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: '低电压告警',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    },{
      name: '防拆告警',
      type: 'line',
      smooth: true,
      data: [38, 20, 33, 44, 72, 10, 51]
    }],
     
  }
  chart.setOption(option)
  return chart
}

export default {
  
  components: {
    mpvueEcharts
  },
  data () {
    return {
      today:'',
      sysUserType:0,
      echarts,
      activeTab:1,
      initChart,
      totalTask: 0,
      totalTitle: '',
      deviceData: [
      {
        label:'设备总数',
        imgUrl:'/static/assets/images/home_list1.png',
        count:0
      },
      {
        label:'在线设备',
        imgUrl:'/static/assets/images/home_list2.png',
        count:0
      }, {
        label:'离线设备',
        imgUrl:'/static/assets/images/home_list3.png',
        count:0
      },
    ],
     todayWarningData:[
       {
                id: 20,
                name: "烟雾告警",
                count: 56
        },
        {
                id: 21,
                name: "防拆告警",
                count: 8
        },
        {
                id: 22,
                name: "烟感故障",
                count: 8
        },
        {
                id: 23,
                name: "低电量告警",
                count: 16
        }

     ],
      warningIcon: {
        '20':'/static/assets/images/home_list5.png',
        '21':'/static/assets/images/home_list6.png',
        '22':'/static/assets/images/home_list7.png',
        '23':'/static/assets/images/home_list4.png',
      }
    }
  },

  mounted() {
    console.log(mpvueEcharts);
    
  },
  methods: {

    deviceList(){
      console.log("deviceList...")
      wx.navigateTo({
        url: '/pages/device/main'
      })
    },
  },

  async onLoad(){
    let that = this
    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('first/main/onLoad...')
    console.log(loginInfo)

    //当天日期
    let day1 = new Date();
    let year = day1.getFullYear()+'年';
    let month = day1.getMonth()+1+'月';
    let date = day1.getDate()+'日';
    that.today = [year,month,date].join('')
    console.log(that.today);

    //根据身份请求任务总数
    that.sysUserType = loginInfo.sysUserTyp
    if(loginInfo.sysUserType==3){
      //巡检员
      that.totalTitle = '巡检任务'
      //请求巡检任务
      console.log('patrolTask...')
      let resTask = await Api.patrolTask(loginInfo.userId, loginInfo.tenantId, loginInfo.token)
      console.log(resTask)
      if(resTask.data && resTask.code==="0"){
        that.totalTask = resTask.data.count?resTask.data.count:0
      }
    }else if(loginInfo.sysUserType==0){
      //管理员
      that.totalTitle = '告警任务'

      //请求告警任务
      console.log('warningTask...')
      let resWarnCount = await Api.warnOrderInfo(loginInfo.userId, loginInfo.tenantId, loginInfo.token)
      console.log(resWarnCount)
      if(resWarnCount.data && resWarnCount.code==="0"){
        that.totalTask = resWarnCount.data.count?resWarnCount.data.count:0
      }
    }else{

    }

    //请设备情况
    console.log('equipmentInfo...')
    let resDevice = await Api.equipmentInfo(loginInfo.tenantId, loginInfo.token)
    console.log(resDevice)
    if(resDevice.data && resDevice.code==="0"){
      console.log('========')
      that.deviceData[0].count = resDevice.data.sumcount?res.data.sumcount:0
      that.deviceData[1].count = resDevice.data.online?res.data.online:0
      that.deviceData[2].count = resDevice.data.offline?res.data.offline:0
      console.log(that.deviceData)
    }

    //今日告警
    console.log('today warn...')
    let resTodayWarn = await Api.warnStatisitics(loginInfo.tenantId, loginInfo.token)
    console.log(resTodayWarn)
    if(resTodayWarn.data && resTodayWarn.code==="0"){
      console.log('+++++++++')

      // for(let index in that.todayWarningData){
      //   let warnId = that.todayWarningData[index].id
      //   console.log('id: '+warnId)
      //   console.log(that.warningIcon[warnId]);
      // }
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.gx-home-chart {
  width: 100%;
  height: 500rpx;
  margin-left: 0px;
  margin-top: 0rpx;
}

.gx-home-card-title:active {
    pointer-events: auto;
}
</style>
