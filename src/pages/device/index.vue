<template>
<div class="gx-container gx-work-con">
    <div class="gx-top-search flex">
            <picker mode='date' class="gx-select-title">
              全部
                <img class="icon-arrow-bottom" src="/static/assets/images/icon_arrow_bottom.png" />
              </picker>
        <div class="gx-search">
            <div class="gx-search-con flex">
                <img class="icon-search" src="/static/assets/images/icon_search.png" />
                <input  type="text" placeholder="搜索..." class="gx-search-input">
                <img class="icon-del-btn" src="/static/assets/images/icon_close.png" />
            </div>
        </div>
            <span class="gx-search-close">取消</span>
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

import Card from '@/pages/device/components/card.vue'
import mpvue from 'mpvue'

export default {
  
  components: {
    Card
  },
  mounted() {
    console.log(mpvue)
  },
  data () {
    return {
      list:[
        {
          imgUrl:'/static/assets/images/equipment_list1.png',
          number:'8901930003921',
          name:'广州国际媒体港烟感1',
          address:'12楼A栋192室'
        },
         {
          imgUrl:'/static/assets/images/equipment_list2.png',
          number:'8901930003921',
          name:'广州国际媒体港烟感1',
          address:'12楼A栋192室'
        },
         {
          imgUrl:'/static/assets/images/equipment_list3.png',
          number:'8901930003921',
          name:'广州国际媒体港烟感1',
          address:'12楼A栋192室'
        },
      ],
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
    background-repeat: no-repeat;
    background-size: 100%;
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
