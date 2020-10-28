
Page({

  data: {
    telPhone:'',
    email:'',
    id:'',
    formData: {},
    rules: [
      {
        name: 'mobile',
        rules: [
          {required: true, message: '验证码必填'},
          {mobile: true, message: '验证码格式不对'}
        ],
      },
      {
        name: 'emailmobile',
        rules: [
          {required: true, message: '验证码必填'},
          {mobile: true, message: '验证码格式不对'}
        ],
      }
    ]
  },
  formInputChange(e) {
    const {field} = e.currentTarget.dataset
    this.setData({
        [`formData.${field}`]: e.detail.value
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
                title: '校验通过'
            })
        }
    })
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