import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
    show: false,
    userName:'爱学习的张三',
    msg:false,
    userInfo:{
      code:'',
      avatarUrl:'',
      nickName:''
    },
    buttons: [
      {
          type: 'default',
          className: '',
          text: '取消',
          value: 0
      },
      {
          type: 'primary',
          className: '',
          text: '允许',
          value: 1
      }
  ]
  },
  //获取用户信息
  bindGetUserInfo(e){
    let that = this
    wx.login({
      success (res) {
        that.data.userInfo.code = res.code
      }
    })
    that.data.userInfo.avatarUrl = e.detail.userInfo.avatarUrl
    that.data.userInfo.nickName = e.detail.userInfo.nickName
  },
  open: function () {
    this.setData({
        show: true
    })
  },
  async buttontap(e) {
    if(e.detail.item.value==0){
      this.setData({
        show: false
      })
    }else {
      console.log(this.data.userInfo)
      const res = await request({url:'/a/login',method:'POST',data:this.data.userInfo})
      console.log(res)
      wx.showToast({
        title: '登录成功',
        duration:1500,  
      })
     setTimeout(function(){
      wx.navigateTo({
        url: '../homePage/hpmePage',
      })
     },2000)
    }
  },
  onLoad: function (options) {

  },

})