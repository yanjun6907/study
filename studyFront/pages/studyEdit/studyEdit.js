import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
var mini = require('../../request/mini.js')

var app = getApp()
Page({
  data: {
    userName:'',
    grade:['初一','初二','初三','高一','高二','高三'],
    objectArray: [
      {
        id: 7,
        name: '初一'
      },
      {
        id: 8,
        name: '初二'
      },
      {
        id: 9,
        name: '初三'
      },
      {
        id: 10,
        name: '高一'
      },
      {
        id: 11,
        name: '高二'
      },
      {
        id: 12,
        name: '高三'
      }
    ],
    index: 0,
    showActionsheet: false,
    groups: [
        { text: '拍照', value: 1 },
        { text: '从手机相册选择', value: 2 },
    ]
  },
  open(){
    this.setData({
      showActionsheet: true
  })
  },
  close: function () {
    this.setData({
        showActionsheet: false
    })
  },
  btnClick(e) {
    wx.removeStorage({ key: 'key'})
    let that = this
    console.log(e)
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['camera','album'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        var imgArr = mini.upload(tempFilePaths)
        imgArr.then((e)=>{
          //回显
          var image = JSON.parse(e)
          console.log(image.data.url)
          that.checkImage(image.data.url)
          that.setData({
            head:image.data.url
          })
          that.close()

        })        
      }
    })   
  },
  async checkImage(e){
    let a=`avatar=${e}`
    const res = await request({url:'/a/u/user',method:'POST',data:a,header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }})
    console.log(res)
  },
  async bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let mun = this.data.objectArray[e.detail.value].id
    let grade =`grade=${mun}`
    const res = await request({url:'/a/u/user',method:'POST',data:grade,header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }})
    this.setData({
      index: e.detail.value,
    })
  },
  goCheckName(){
    wx.navigateTo({
      url: '../studyName/studyName?name='+this.data.userName
    })
  },
  onUnload: function () {
    wx.reLaunch({
      url: '../studyCard/studyCard'
    })
  },
  async onLoad (options) {
    let that = this
    const res = await request({url:'/a/u/user',method:'GET'})
      for(var i=0;i<that.data.objectArray.length;i++){
        if(that.data.objectArray[i].id==res.data.data.grade){
          console.log(i)
          that.setData({
            head:res.data.data.head,
            userName:res.data.data.nickName,
            index:i
          })
        }
      } 
  },
})