<template>
<div class="gx-login-container">
    <div class="gx-login-form">
        <div class="margin-top30">
            <label class="login-form-label">手机号码</label>
            <div class="login-form-item">
                <input type="text" placeholder="请输入手机号码" id="login-input-name">
            </div>
        </div>
        <a href="javascript:;" class="gx-login-btn">保存</a>
    </div>
</div>
</template>
 
<script>
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
      deviceData: [
      {
        label:'设备总数',
        imgUrl:'/static/assets/images/home_list1.png',
        count:23
      },
      {
        label:'在线设备',
        imgUrl:'/static/assets/images/home_list2.png',
        count:23
      }, {
        label:'离线设备',
        imgUrl:'/static/assets/images/home_list3.png',
        count:23
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

</style>
