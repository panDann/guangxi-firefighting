<template>
<div class="">
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>基础信息</span>
            <i class="icon-arrow-bottom fr"></i>
        </div>
        <div class="gx-form-card-body">
            <!--在线-->
            <div class="equipment-info-img">
                <img src="/static/assets/images/list_img.png" class="list-img-bg">
                <span class="equipment-info-zaixian">在线</span>
            </div>
            <!--告警-->
            <!--<div class="equipment-info-img">-->
                <!--<img src="images/list_img.png" class="list-img-bg">-->
                <!--<span class="equipment-info-gaojing">告警</span>-->
            <!--</div>-->
            <!--离线-->
            <!--<div class="equipment-info-img">-->
                <!--<img src="images/list_img2.png" class="list-img-bg">-->
                <!--<span class="equipment-info-lixian">离线</span>-->
            <!--</div>-->
            <div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">设备名称</p>
                    <span class="gx-form-list-right fr">yg001</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">品牌/型号</p>
                    <span class="gx-form-list-right fr">泛海三江-ABC123</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">IMEI</p>
                    <span class="gx-form-list-right fr">89027352897702973</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left list-left-bold  fl">安装位置信息</p>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">建筑地址</p>
                    <span class="gx-form-list-right fr">广州市海珠区阅江西路</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">安装位置</p>
                    <span class="gx-form-list-right fr">13楼A区1301房间</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left list-left-bold  fl">负责人信息</p>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">设备负责人</p>
                    <span class="gx-form-list-right fr">张三</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">联系电话</p>
                    <span class="gx-form-list-right fr">188****3958</span>
                </div>
            </div>
        </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>上报数据</span>
        </div>
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix">
                    <div class="gx-form-list-left fl">

                        <div class="form-list-select-box">
                            <p class="form-list-select"><span>全部属性</span><i class="icon-san-bottom"></i></p>
                            <ul class="form-list-select-ul">
                                <li>全部属性</li>
                                <li>部分属性</li>
                            </ul>
                        </div>
                    </div>
                    <div class="gx-form-list-right fr">
                        <div class="form-list-select-box">
                            <p class="form-list-select"><span>2020年4月</span><i class="icon-san-bottom"></i></p>
                            <ul class="form-list-select-ul">
                                <li>2020年4月</li>
                                <li>2020年5月</li>
                                <li>2020年6月</li>
                                <li>2020年7月</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">上报时间：<span>2020-4-22 12:00</span></p>
                    <span class="gx-form-list-right fr">数值：<span>56</span></span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">上报时间：<span>2020-4-21 14:00</span></p>
                    <span class="gx-form-list-right fr">数值：<span>84</span></span>
                </div>

            </div>
        </div>
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
