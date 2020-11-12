import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
    id:'',
    iphone:'',
    email:'',
    captcha:'',
    ok:'',
    formData: {},
    smsFlag: -1,
    sendTime: '获取验证码',
    snsMsgWait: 60,
    rules: [{
        name: 'qq',
        rules:[
          {required: true, message: '手机号必填'},
          {mobile: true,message: '请输入11位的手机号码'},
        ]
      }], 
    rules1: [{
        name: 'mobile',
        rules: [
          {required: true, message: '验证码必填'},
          {rangelength:[6,6],message: '请输入6位的验证码'},
        ],
      },],
    rules2: [{
        name: 'email',
        rules: [
          {required: true, message: '邮箱必填'},
          {email: true, message: '邮箱格式不对'}
        ]
      }], 
      rules3: [{
        name: 'emailmobile',
        rules: [
          {required: true, message: '验证码必填'},
          {rangelength:[6,6],message: '请输入6位的验证码'},
        ],
      }]
  },
  // 获取验证码
  async sendCode() { 
    if(this.data.id==0){
      let phones = `contact=${this.data.iphone}`
      const res = await request({url:'/a/u/phone/captcha',method:'POST',data:phones,header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }})
      console.log(res)
    } else if(this.data.id==1) {
      let emails = `contact=${this.data.email}`
      const res = await request({url:'/a/u/email/captcha',method:'POST',data:emails,header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }})
      console.log(res)
    }
  // 60秒后重新获取验证码
    let that =this
     var inter = setInterval(function() {
       if (that.data.snsMsgWait <= 0) {
         clearInterval(inter)
         that.setData({
          msg: false,
           sendTime: '重新验证码',
           snsMsgWait: 60,
           smsFlag: -1
         });
       }else {
        that.setData({
          msg: true,
          smsFlag: -1,
          sendTime: that.data.snsMsgWait + 's后重发',
          snsMsgWait: that.data.snsMsgWait - 1
        });
       }
     }.bind(this), 1000);
   },
  formInputChange1(e) {
    const {field} = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value,
        captcha:e.detail.value,
    })  
  },
  formInputChange2(e) {
    const {field} = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value,
        iphone:e.detail.value,
    })  
  },
  formInputChange3(e) {
    const {field} = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value,
        email:e.detail.value,
    })  
  },
  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
        console.log('valid', valid, errors)
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
                this.setData({
                    error: errors[firstError[0]].message
                })
            }
        } else {
          wx.showToast({
            title: '请获取验证码',
          })
          this.setData({
            smsFlag: 0
          })
        }
    })
  },
  submitPhone(){
    let phones = `captcha=${this.data.captcha}&contact=${this.data.iphone}`
    request({url:`/a/u/phone/bind`,method:'POST',data:phones,header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }}).then(res=>{
      console.log(res)
      if(res.data.code==0){
        wx.navigateTo({
          url: '../studyCard/studyCard',
        })
      }
    })
  },
  submitForm1() {
    let that = this
    this.selectComponent('#form1').validate((valid, errors) => {
        console.log('valid', valid, errors)
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
              that.setData({
                    error: errors[firstError[0]].message
                })
            }
        } else {
            wx.showToast({
                title: '校验通过'
            })
            that.setData({
              ok: 0
          })
        }
    })
  },
   submitForm2() {
    this.selectComponent('#form2').validate((valid, errors) => {
        console.log('valid', valid, errors)
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
                this.setData({
                    error: errors[firstError[0]].message
                })
            }
        } else {
          wx.showToast({
            title: '请获取验证码',
          })
          this.setData({
            smsFlag: 0
          })
        }
    })
  },
  submitEmail(){
    let emails = `captcha=${this.data.captcha}&contact=${this.data.email}`
    request({url:`/a/u/email/bind`,method:'POST',data:emails,header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }}).then(res=>{
      console.log(res)
      if(res.data.code==0){
        wx.navigateTo({
          url: '../studyCard/studyCard',
        })
      }
    })
  },
  submitForm3() {
    this.selectComponent('#form3').validate((valid, errors) => {
        console.log('valid', valid, errors)
        if (!valid) {
            const firstError = Object.keys(errors)
            if (firstError.length) {
                this.setData({
                    error: errors[firstError[0]].message
                })
            }
        } else {
            wx.showToast({
                title: '校验通过'
            })
            that.setData({
              ok: 1
          })
        }
    })
  },
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id:options.id
    }) 
  },

})