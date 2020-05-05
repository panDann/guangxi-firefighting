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
                    <span class="gx-form-list-right fr">每月例行基础巡检</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检任务</p>
                    <span class="gx-form-list-right fr">基础巡检</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检人员</p>
                    <span class="gx-form-list-right fr">李明</span>
                </div>
                <div class="gx-form-card-list clearfix">
                    <p class="gx-form-list-left fl">巡检时间</p>
                    <span class="gx-form-list-right fr">2020-4-27 8:00-18:00</span>
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
                <div class="gx-form-card-list">
                    <div class="clearfix">
                        <div class="gx-form-list-left fl">设备名称1</div>
                        <div class="gx-form-list-right fr">
                            <span class="gx-textOrange">未巡检</span><i class="icon-arrow"></i>
                        </div>
                    </div>
                    <p class="gx-form-list-p">地址：<span>西塔13楼1301房</span></p>
                </div>
                <div class="gx-form-card-list">
                    <div class="clearfix">
                        <div class="gx-form-list-left fl">设备名称2</div>
                        <div class="gx-form-list-right fr">
                            <span class="gx-textBlue">已巡检</span><i class="icon-arrow"></i>
                        </div>
                    </div>
                    <p class="gx-form-list-p">地址：<span>西塔13楼1301房</span></p>
                </div>
                <div class="gx-form-card-list">
                    <div class="clearfix">
                        <div class="gx-form-list-left fl">设备名称3</div>
                        <div class="gx-form-list-right fr">
                            <span class="gx-textBlue">已巡检</span><i class="icon-arrow"></i>
                        </div>
                    </div>
                    <p class="gx-form-list-p">地址：<span>西塔13楼1301房</span></p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
 
<script>
export default {

  data () {
    return {
     
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
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

</style>
