
Page({
  data: {
    register:''
  },
  formInputChange(e) {
    this.setData({
      register: e.detail.value
    })
  },
  submitForm() {
    console.log(this.data.register)
    let str = /^[\u4e00-\u9fa5a-zA-Z][\u4e00-\u9fa5a-zA-Z\d]{3,17}$/
        if (!str.test(this.data.register)) {
          wx.showToast({
            title: '格式不正确',
            icon: 'none'
          })
        } 
        else {
          wx.showToast({
            title: '修改成功 '
        })
        }
  },
  onLoad: function (options) {

  },

})