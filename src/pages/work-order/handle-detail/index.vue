<template>
  <div class>
    <div class="gx-form-card">
      <!-- <List /> -->
      <div
        class="gx-form-card-header flex-row align-center justify-between"
        @click="isFoldTop = !isFoldTop"
      >
        <span>工单信息</span>
        <span
          class="iconfont icon-top transition-all primary-color"
          :class="!isFoldTop? 'rotate180':''"
        ></span>
      </div>
      <div
        class="gx-form-card-body transition-all"
        :class="!isFoldTop&&'height0'"
        v-show="!isFoldTop"
      >
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
          <span class="gx-form-list-right fr">{{}}</span>
        </div>
      </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-form-card">
      <div
        class="gx-form-card-header flex-row align-center justify-between"
        @click="isFoldMiddle = !isFoldMiddle"
      >
        <span>工单进度跟踪</span>
        <span
          class="iconfont icon-top transition-all primary-color"
          :class="!isFoldMiddle? 'rotate180':''"
        ></span>
      </div>
      <div
        class="gx-form-card-body status-con transition-all"
        :class="!isFoldMiddle&&'height0'"
        v-show="!isFoldMiddle"
      >
       <div class="status_item finish-status">
          <span class="iconfont icon-right icon-item bg-right"></span>
          处理完成
          <div class="status-tip-con">
            <div>处理人：王大大</div>
            <div>联系电话：18925066205</div>
            <div>2020-3-22 12:00:00</div>
          </div>
        </div>
         <div class="status_item finish-status">
          <span class="iconfont icon-right icon-item bg-right"></span>
          处理完成
          <div class="status-tip-con">
            <div>处理人：王大大</div>
            <div>联系电话：18925066205</div>
            <div>2020-3-22 12:00:00</div>
          </div>
        </div>
        <div class="status_item finish-status">
          <span class="iconfont icon-right icon-item bg-right"></span>
          处理完成
          <div class="status-tip-con">
            <div>处理人：王大大</div>
            <div>联系电话：18925066205</div>
            <div>2020-3-22 12:00:00</div>
          </div>
        </div>
        <div class="status_item warning">
          <span class="iconfont icon-warning icon-item bg-warning"></span>
          发生告警
          <div class="status-tip-con">
            <div>2020-3-22 12:00:00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gx-form-height"></div>
    <div class="gx-form-card">
      <div
        class="gx-form-card-header flex-row align-center justify-between"
        @click="isFoldBottom = !isFoldBottom"
      >
        <span>处理工单</span>
        <span
          class="iconfont icon-top transition-all primary-color"
          :class="!isFoldBottom? 'rotate180':''"
        ></span>
      </div>
      <div
        class="gx-form-card-body transition-all"
        :class="!isFoldBottom&&'height0'"
        v-show="!isFoldBottom"
      >
        <div class="gx-form-card-list clearfix">
          <p class="gx-form-list-left fl">处理结果</p>
          <span class="gx-form-list-right fr">{{}}</span>
        </div>
        <ImgPick :imgUrls="imgUrls" :isShowAdd="false" title="处理照片" />
        <div class="gx-form-card-list clearfix">
          <p class="gx-form-list-left">处理说明</p>
        </div>
        <p class="gx-form-list-right">{{}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import ImgPick from "@/components/img-picker/index.vue";
import List from "@/components/list/index.vue";

export default {
  components: {
    ImgPick,
    List
  },
  data() {
    return {
      imgUrls: [],
      isFoldTop: false,
      isFoldMiddle: false,
      isFoldBottom: false
    };
  },

  mounted() {},
  methods: {}
};
</script>

<style scoped>
.status-con {
  margin: 10px 0.5rem;
}
.status_item {
  position: relative;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(48, 48, 48, 1);
}
.status_item::after {
  position: absolute;
  content: "";
  left: 25rpx;
  top: 0.2rem;
  height: 100%;
  width: 2px;
  z-index: -1;
  background: #14d593;
}
.status_item:last-child::after {
  height: 0;
}
.icon-item {
  color: white;
  height: 40rpx;
  z-index: 3;
  width: 40rpx;
  border-radius: 50%;
  margin: 0 10rpx;
  font-size: 18px;
}
.bg-right {
  background: #14d593;
}
.bg-warning {
  background: #ff5d49;
}
.status-tip-con {
  margin: 10px 60rpx;
  font-size: 12px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 18px;
}
</style>
