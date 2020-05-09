<template>
<div class="">
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>工单信息</span>
        </div>
        <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">工单类型</p>
                    <span class="gx-form-list-right fr">{{}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">告警时间</p>
                    <span class="gx-form-list-right fr">{{}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">发生时间</p>
                    <span class="gx-form-list-right fr">{{}}</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">发生地址</p>
                    <span class="gx-form-list-right fr">缺少说明需要确认</span>
                </div>
            </div>
        </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-form-card">
        <div class="gx-form-card-header">
            <span>处理工单</span>
        </div>
         <div class="gx-form-card-body">
            <div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">处理结果</p>
                    <span class="gx-form-list-right fr">{{}}</span>
                </div>
                <ImgPick :imgUrls="imgUrls"
                 @on-image="onImage"
                 :title="`处理照片（${imgUrls.length}/3）`"/>

                <div class="textarea-container">
                <div class="textarea-container-title">
                    处理说明
                </div>
                <textarea placeholder="简单描述你的处理说明" class="textarea-container-area" v-model="value"></textarea>
                <p class="textarea-container-limit">{{0}}/50</p>
                </div>
            </div>
             <div class="bottom">
             <button class="submit" >提交</button>
                </div>
        </div>
    </div>
</div>
</template>
<script>

import * as Api from '@/api/order.js'
import ImgPick from '@/components/img-picker/index.vue'
export default {
  components: {
    ImgPick,
  },
  data () {
    return {
       imgUrls:[],
       remark:''
    }
  },

  mounted() {
    
  },
  methods: {
      onImage(imgs){
          console.log(imgs);
          
      }
  }
}
</script>

<style scoped>
.textarea-container{
  padding: .2rem;
  font-size: 16px;
  border-top: solid 1px #B1B1B1;
  border-bottom: solid 1px #B1B1B1;

}
.textarea-container-title{
  font-size: 16px
}
.textarea-container-area{
  min-height: 100px;
  border: none;
  font-size: 14px;
  margin: 10px 0;
  width: 100%;

}
.textarea-container-limit{
  text-align: right;
  color: #999;
}
  .bottom{
    margin: .5rem 0.6rem .5rem;
    bottom: 1rem;
    
}

.bottom .submit{
    width: 100%;
    height: .8rem;
    background: #FF8C01;
    color: #fff;
    outline: none;
    border-radius: 0.05rem;
    font-size: 0.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
