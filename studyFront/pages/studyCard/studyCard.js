import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
  },
  async getUser(){
    const res = await request({url:'/a/u/user',method:'GET'})
    console.log(res.data.data)
    wx.setStorage({
      data: res.data.data,
      key: 'phone',
    })
    this.setData({
      userName:res.data.data.nickName,
      grade:res.data.data.grade,
      bean:res.data.data.bean,
      head:res.data.data.head,
    })
  },
  goChangePhone(){
    wx.navigateTo({
      url: '../phoneBind/phoneBind',
    })
  },
  putStudyCard(){
    wx.navigateTo({
      url: '../studyEdit/studyEdit'
    })
  },
  goCollect(){
    wx.navigateTo({
      url: '../myCollection/myCollection',
    })
  },
  onLoad(options) {
   this.getUser()
  },
})