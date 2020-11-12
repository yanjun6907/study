import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
    captcha:'',
    captcha2:'',
    telPhone:'',
    email:'',
    id:'',
    formData: {},
    sendTime: '获取验证码',
    snsMsgWait: 60,
    rules1: [{
        name: 'mobile',
        rules: [
          {required: true, message: '验证码必填'},
          {rangelength:[6,7], message: '长度不对'}
        ],
      }],
    rules2:[{
        name: 'emailmobile',
        rules: [
          {required: true, message: '验证码必填'},
          {rangelength:[6,7], message: '长度不对'}
        ],
      }]
  },
  formInputChange(e) {
    const {field} = e.currentTarget.dataset
    this.setData({
        [`formData.${field}`]: e.detail.value,
        captcha:e.detail.value,
        captcha2:e.detail.value,
    })
  },
  goSubmit(){
    if(this.data.id==0){
      let phones = `captcha=${this.data.captcha?this.data.captcha:this.data.captcha2}&contact=${this.data.telPhone}`
      request({url:`/a/u/phone/bind`,method:'POST',data:phones,header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }}).then(res=>{
        console.log(res)
        if(res.data.code==0){
          wx.showToast({
            title: '校验通过'
          })
          wx.navigateTo({
            url: '../phoneVerifiy/phoneVerifiy?id=0',
          })
        }else if(res.data.code==2106){
          wx.showToast({
            title: res.data.message,
            icon:'none'
          })
        }else if(res.data.code==2112){
          wx.showToast({
            title: res.data.message,
            icon:'none'
          })
        }
      })
    }else if(this.data.id==1){
      let emails = `captcha=${this.data.captcha?this.data.captcha:this.data.captcha2}&contact=${this.data.email}`
      request({url:`/a/u/email/bind`,method:'POST',data:emails,header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }}).then(res=>{
        console.log(res)
        if(res.data.code==0){
          wx.showToast({
            title: '校验通过'
          })
          wx.navigateTo({
            url: '../phoneVerifiy/phoneVerifiy?id=1',
          })
        }else if(res.data.code==2106){
          wx.showToast({
            title: res.data.message,
            icon:'none'
          })
        }else if(res.data.code==2112){
          wx.showToast({
            title: res.data.message,
            icon:'none'
          })
        }
      })
    }
  },
  submitForm() {
      this.selectComponent(this.data.id==0?'#form1':'#form2').validate((valid, errors) => {
      console.log('valid', valid, errors)
      if (!valid) {
          const firstError = Object.keys(errors)
          if (firstError.length) {
              wx.showToast({
                title: errors[firstError[0]].message,
                icon:'none'
              })
          }
      }else if(!(/^[0-9]*$/.test(this.data.captcha))){
        wx.showToast({
          title: '验证码格式不对',
          icon:'none'
        })
      }else {
          this.goSubmit()
      }
      })
  },
    // 获取验证码
    async sendCode() { 
      if(this.data.id==0){
        let phones = `contact=${this.data.telPhone}`
        const res = await request({url:'/a/u/phone/captcha',method:'POST',data:phones,header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }})
        if(res.data.code==2104){
          wx.showToast({
            title: res.data.message,
            icon:'none'
          })
          this.setData({
            msg: false,
            sendTime: '重新验证码',
            snsMsgWait: 60,
          })
        }else {
          this.sendTime()
        }
      } else if(this.data.id==1) {
        let emails = `contact=${this.data.email}`
        const res = await request({url:'/a/u/email/captcha',method:'POST',data:emails,header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }})
        if(res.data.code==2104){
          wx.showToast({
            title: res.data.message,
            icon:'none'
          })
          this.setData({
            msg: false,
            sendTime: '重新验证码',
            snsMsgWait: 60,
          })
        }else {
          this.sendTime()
        }
      } 
    },
    // 60秒后重新获取验证码
    sendTime(){
      let that =this
      var inter = setInterval(function() {
        if (that.data.snsMsgWait <= 0) {
          clearInterval(inter)
          that.setData({
           msg: false,
            sendTime: '重新验证码',
            snsMsgWait: 60,
          });
        }else {
         that.setData({
           msg: true,
           sendTime: that.data.snsMsgWait + 's后重发',
           snsMsgWait: that.data.snsMsgWait - 1
         });
        }
      }.bind(this), 1000);
    },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id:options.id,
      email:options.email,
      telPhone:options.phone
    }) 
  }
})