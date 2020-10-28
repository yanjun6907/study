
Page({

  data: {
    id:'',
    phone:'',
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
  sendCode: function() { 
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
  formInputChange(e) {
    const {field} = e.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: e.detail.value,
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
  submitForm1() {
    this.selectComponent('#form1').validate((valid, errors) => {
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