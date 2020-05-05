<template>
<div class="gx-login-container">
    <img src="/static/assets/images/login_logo.png" class="gx-logo" alt="" srcset="">
    <div class="gx-login-form">
        <div>
            <label class="login-form-label">手机号码</label>
            <div class="login-form-item">
                <input type="text" v-model="form.phone" placeholder="请输入手机号码" id="login-input-name">
            </div>
        </div>
        <div>
            <label  class="login-form-label">验证码</label>
            <div class="login-form-item">
                <input type="text" v-model="form.code" placeholder="请输入验证码" id="login-input-pwd">
                <a href="javascript:;" class="login-btn-code" @click="getCode">获取验证码</a>
            </div>
        </div>
        <a href="javascript:;" class="gx-login-btn">登录</a>
    </div>

</div>

</template>

<script>
import * as Api from '@/api/login.js'
import { Validator } from  '@/utils/validator.js'
export default {
  data () {
    return {
      form:{
        phone:'',
        code:'',
      },
      rules:[
        {
          phone:[
            {require:true,message:'请输入手机号'},
            {validator:/^1\d{10}$/,message:'手机号不规范'},
            ]
        }
      ],
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },


  mounted() {
      // fetch('/login')
  },
  methods: {
 
    async getCode() {
      let { rules,form } = this
      if(!Validator(form,rules))return

          wx.showLoading({
            title:'加载中' ,
            mask: true,
            duration:3000
          });
          let {phone} = this.form
          
         let res = await Api.getCode(phone)
         
    },
    async login() {

    },
  
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>

@import './index.css';
</style>
