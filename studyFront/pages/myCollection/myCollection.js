import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
    currentData: 0, 
    selectPerson: true,
    loading:false,
    videoList:{
      page:1,
      size:10,
    }
  },
    //获取当前滑块的index
  bindchange: function(e) {
    console.log(e)
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    const that = this;
    // console.log(e.target.dataset.current)
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } 
    else {
      that.setData({
      currentData: e.target.dataset.current
      })
    }
  },
  //下拉监听函数
  onPullDownRefresh(){
    wx.stopPullDownRefresh()
  },
  //上拉触底事件
  onReachBottom(){
    console.log('ok')
    this.setData({
      loading:true,
    })
  },
  async getList(){
    const video = await request({ url: '/a/u/video/list',method:'GET',data:this.data.videoList })
    const aricle = await request({ url: '/a/u/article/list',method:'GET',data:this.data.videoList })
    console.log(video)
    console.log(aricle)
  },
  onLoad(){
    this.getList()
  }
})