<template>

  <li class="work-list-li">
      <div  class="work-list-img">
          <img :src="item.imgUrl">
      </div>
      <div class="work-list-right">
          <p class="work-list-title">{{item.name}}</p>
          <p class="work-list-time">{{item.summary?item.summary:item.time}}</p>
          <p class="work-list-info">
              <span><i class="icon-address" v-show="item.address"></i>{{item.address? item.address:item.time}}</span>
              <a href="javascript:;" class="work-list-state work-list-processed" @click="leapToDetail" >{{item.status}}<i class="icon-arrow"></i></a>
          </p>
      </div>
  </li>
</template>

<script>
import {inspectionDetailPagePath,} from '@/consts/path'

export default {
  props: {
     item:{
          type:Object,
          required:true,
          default:()=>{}
      },
      type:{
          type:String,
          required:true,
          default:''
      }
  },
  methods: {
      leapToDetail() {
          if(this.type !=='inspection')return
          let url =inspectionDetailPagePath
          mpvue.navigateTo({url})
      }
  },
}
</script>

<style>
.work-list-ul .work-list-li{
    padding: 0.3rem .1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    font-size: 0.40rem;
}

.work-list-ul .work-list-li .work-list-img{
    float: left;
    width: 16%;
}
.work-list-ul .work-list-li .work-list-img img{
    width: 1.2rem;
    height: 1.2rem;
}

.work-list-ul .work-list-li .work-list-right{
    float: left;
    padding: 0rem 0.2rem 0rem 0.4rem;
    color: #777;
    width: 84%;
}

.work-list-ul .work-list-li .work-list-right .work-list-title{
    color: #2A2A2F;
    font-size: 0.35rem;
    /*font-weight: 600;*/
}
.work-list-right .work-list-info .work-list-state{
    float: right;
}
.work-list-processed{
    color: #F15643;
}

.work-list-complete{
    color: #108EE9;
}
</style>
