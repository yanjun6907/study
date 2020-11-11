import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
    round1:false,
    round2:true,
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{text: '下次一定'}, {text: '马上授权'}],
    oneButton: [{text: '确定'}],
  },
/* ------------------------公告-------------------------- */
  async noticeDialogButton(e) {
    const res = await request({url:'/a/u/notice/latest',method:'GET'})
    if(res.data.code == 0){
        this.setData({
          round1:false,
          showOneButtonDialog: true,
          content:res.data.data.content,
          title:res.data.data.title
        })
    }else {
      wx.showToast({
      title: '无最新公告',
      icon: 'none',
      duration: 3000
      })
      this.setData({
        showOneButtonDialog: false,
      })
    }
  },
  tapDialogButton(e) {
    this.setData({
      showOneButtonDialog: false,
    })
  },
  async getNotice(){
    const res = await request({url:'/a/u/notice/refresh',method:'GET'})
    console.log(res)
    if(res.data.code == 0){
        this.setData({
          round1:res.data.data.unRead == 1?true:false
        })
    }
  },
  /* --------------------------------------------------- */

  /* --------------------------签到--------------------------- */
  sginIn(){
    wx.navigateTo({
      url: '../sgins/sgins',
    })
    this.setData({
      round2:false
    })
  },
  //获取当日‘已签到’状态
  async getSign(e){
    const res = await request({url:'/a/u/signs',method:'GET'})
    console.log(res.data)
    let year = e.getFullYear()
    let month = e.getMonth() + 1
    let date = e.getDate()
    for (let j = 0; j < res.data.data.length; j++) {
      if(res.data.data[j].createTime ==year +""+ (month > 9 ? month : "0" + month) +""+ (date > 9 ? date : "0" + date)){
        this.setData({
          round2:false
        })
      }
    }
  },
  /* ---------------------------------------------------------- */

  /* -------------------------手机绑定-------------------------- */
  tapDialogButton2(e) {
    if(e.detail.index==0){
      this.setData({
        dialogShow: false,
      })
    }else {
      wx.navigateTo({
        url: '../phoneBind/phoneBind',
      })
    }
  },
  /* ---------------------------------------------------------------- */
  /*------------------------------学生证------------------------------*/
  goStudyCard(){
    wx.navigateTo({
      url: '../studyCard/studyCard',
    })
  },
  async getUser(){
    const res = await request({url:'/a/u/user',method:'GET'})
    this.setData({
      userName:res.data.data.nickName,
      bean:res.data.data.bean,
      head:res.data.data.head,
      dialogShow:res.data.data.phone==''?true:false
    })
  },
  /* -------------------------------------------------------- */
  //树洞
  goTreeHole(){
    wx.navigateTo({
      url: '../treeHole/treeHole',
    })
  },
  /* ================================ */
  onLoad(options) {
    this.getUser()
    this.getSign(new Date())
    this.getNotice()
  }
})