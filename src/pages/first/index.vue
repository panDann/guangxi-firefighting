<template>
<div class="gx-container gx-home">
        <div class="gx-home-work">
            <p class="gx-home-time">2020年4月11日</p>
            <div class="gx-home-remind">
                <div class="gx-home-remind-box">
                    <div class="gx-home-bg">
                        <p class="gx-home-unm">{{patrolTask}}</p>
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
        <a class="gx-home-card-title"><span>今日警告</span><i class="icon-arrow"></i></a>
        <ul class="gx-home-card-ul">
            <li class="gx-home-card-list" v-for="(item, index) in warningData" :key="index">
                <img :src="item.imgUrl" class="gx-home-card-list-img">
                <p class="gx-home-card-list-title">{{item.label}}</p>
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
</template>
 
<script>
import * as Api from '@/api/first.js'
import {line,} from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
const echarts = line
function initChart (canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  var option = {
    backgroundColor: '#fff',
    color: ['#37A2DA', '#67E0E3'],
   
    legend: {
      data: ['A', 'B']
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
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }]
  }
  chart.setOption(option)
  return chart
}

// function initChart(canvas,width,height) {
//       const chart = echarts.init(canvas, null, {
//          width: width,
//          height: height
//        })
//       canvas.setChart(chart)
//             var  option = {
//                 title: {
//                     show:false,
//                 },
//                 tooltip: {
//                     trigger: 'axis',
//                     axisPointer: {
//                         lineStyle: {
//                             color: '#57617B'
//                         }
//                     },
//                     textStyle:{
//                         fontSize:12
//                     }
//                 },
//                 legend: {
//                     icon: 'rect',
//                     itemWidth: 5,
//                     itemHeight: 5,
//                     itemGap: 13,
//                     data: [{
//                         name:'烟雾报警',
//                     },{
//                         name:'低电量报警',
//                     }],
//                     textStyle: {
//                         fontSize: 10,
//                         color: '#666'
//                     }
//                 },
//                 grid: {
//                     left: '6%',
//                     right: '5%',
//                     bottom: '5%',
//                     top: "20%",
//                     containLabel: true
//                 },
//                 xAxis: [{
//                     type: 'category',
//                     boundaryGap: [0.2, 0.2],
//                     nameLocation: 'middle' ,
//                     axisLine: {
//                         show: false,
//                         alignWithLabel:2,
//                     },
//                     axisLabel: {
//                         margin: 5,
//                         textStyle: {
//                             fontSize:10,
//                             color:'#666'
//                         }
//                     },
//                     axisTick:{
//                         show: false,
//                     },
//                     splitLine:{
//                         show: false,
//                     },
//                     data: ['8.15','8.16', '8.17', '8.18', '8.19', '8.20', '8.21', '8.22']
//                 }],
//                 yAxis: [{
//                     name:'个数',
//                     nameLocation: 'end' ,
//                     nameTextStyle:{
//                         color :'#666',
//                         fontSize: 10 ,
//                     },
//                     type: 'value',
//                     axisTick: {
//                         show: false
//                     },
//                     axisLine: {
//                         show: false,
//                     },
//                     axisLabel: {
//                         margin: 10,
//                         textStyle: {
//                             fontSize: 10,
//                             color:'#666'
//                         }
//                     },
//                     splitLine: {
//                         show: true,
//                         textStyle: {
//                             color:'#eee'
//                         }
//                     }
//                 }],
//                 series: [{
//                     name: '烟雾报警',
//                     type: 'line',
//                     smooth: true,
//                     symbol: 'circle',
//                     symbolSize: 2,
//                     showSymbol: false,
//                     lineStyle: {
//                         normal: {
//                             width: 1
//                         }
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: '#F04864',
//                             borderColor: '#F04864',
//                             borderWidth: 1

//                         }
//                     },
//                     data: [40, 55, 34, 37, 47 ,59, 44, 37, 28]
//                 }, {
//                     name: '低电量报警',
//                     type: 'line',
//                     smooth: true,
//                     symbol: 'circle',
//                     symbolSize: 2,
//                     showSymbol: false,
//                     lineStyle: {
//                         normal: {
//                             width: 1
//                         }
//                     },

//                     itemStyle: {
//                         normal: {
//                             color: '#FACC14',
//                             borderColor: '#FACC14',
//                             borderWidth: 1

//                         }
//                     },
//                     data: [43, 36, 45, 55, 33, 41, 58, 46, 42]
//                 } ]
//             };

//              myChart.setOption(option);
//            return  myChart
//             // window.resize(myChart.resize);
//     }
export default {
  
  components: {
    mpvueEcharts
  },
  data () {
    return {
      echarts,
      activeTab:1,
      initChart,
      patrolTask: '0',
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
     warningData: [
      {
        label:'告警总数',
        imgUrl:'/static/assets/images/home_list4.png',
        count:23
      },
      {
        label:'低电量告警',
        imgUrl:'/static/assets/images/home_list5.png',
        count:23
      }, {
        label:'低电量告警',
        imgUrl:'/static/assets/images/home_list6.png',
        count:23
      },
      {
        label:'防拆告警',
        imgUrl:'/static/assets/images/home_list7.png',
        count:23
      },
    ]
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

  async onLoad(){
    let that = this
    let loginInfo = wx.getStorageSync("loginInfo")
    console.log('onLoad...')
    console.log(loginInfo)

    //请求巡检任务
    console.log('patrolTask...')
    let resTask = await Api.patrolTask(loginInfo.userId, loginInfo.tenantId, loginInfo.token)
    console.log(resTask)
    if(resTask.data && resTask.code==="0"){
      that.patrolTask = resTask.data.count?resTask.data.count:0
    }

    //设备情况
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
    
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

.gx-home-card-title:active {
    pointer-events: auto;
}
</style>
