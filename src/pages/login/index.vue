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
import card from '@/components/card'
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

  components: {
    card
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


.gx-login-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation: bgSize 8s infinite ease-in-out alternate;
    background-attachment: fixed;
    padding: 0.72rem 1.15rem 0;
}

.gx-login-container .gx-logo {
    display: block;
    width: 2rem;
    height: 1.5rem!important;
    margin:.5rem auto ;
}

.login-title{
    font-size: 0.75rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
}

.gx-login-container .gx-login-form {
    font-size: 0.4rem;
}

.gx-login-container .gx-login-form .login-form-label{
    font-size: 0.35rem;
    color: #333;
}

.gx-login-container .gx-login-form .login-form-item {
    border-bottom: 1px solid #DCE2F0;
    margin-bottom: 0.40rem;
    display: flex;
    align-items: center;
}

.gx-login-container .gx-login-form .login-form-item i {
    color: #333;
    width: 0.94rem;
    text-align: center;
    font-size: .44rem;
}

.gx-login-container .gx-login-form .login-form-item input {
    padding: 0.2rem 0;
    color: #333;
    flex-grow: 1;
}
input::placeholder{
  font-size: 50%;
}

.gx-login-container .gx-login-form .login-form-item .del-btn {
    padding-left: 0.4rem;
    display: none;
}

.gx-login-container .gx-login-form .login-form-item .del-btn:before {
    font-family: "CTwing";
    content: "\ebbd";
    color: #fff;
    font-size: .48rem;
}

.gx-login-container .gx-login-form .login-form-item .login-btn-code {
    color: #FF8C01;
}

.login-btn-code:active, .login-btn-code:hover, .login-btn-code:focus{
    color: #d97501;
}

.gx-login-container .gx-login-form .gx-login-btn {
    width: 100%;
    height: 1rem;
    background-color: #FF8C01;
    font-size: 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 0.05rem;
    margin-top: 0.84rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.08rem;
    pointer-events: none;
}

.gx-login-btn:active, .gx-login-btn:hover {
    background-color: #dd7601;
    color: #fff;
    pointer-events: auto;
}
</style>
