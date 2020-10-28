Page({
  data: {
    title:'',
    userName:'爱学习的张三',
    bean:0,
    round1:true,
    round2:true,
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{text: '下次一定'}, {text: '马上授权'}],
    oneButton: [{text: '确定'}],
  },
  openConfirm: function () {
    let that =this
    setTimeout(function(){
      that.setData({
        dialogShow: true
      })
    },800)   
  },
  tapDialogButton(e) {
    wx.showToast({
    title: '无最新公告',
    // icon: 'info',
    duration: 3000
    })
    this.setData({
      showOneButtonDialog: false,
    })
  },
  tapDialogButton2(e) {
    if(e.detail.item.value==0){
      this.setData({
        dialogShow: false,
      })
    }else {
      wx.navigateTo({
        url: '../phoneBind/phoneBind',
      })
    }
  },
  tapOneDialogButton(e) {
    this.setData({
      showOneButtonDialog: true,
      round1: false
    })
  },
  sginIn(){
    wx.navigateTo({
      url: '../sgins/sgins',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
    this.setData({
      round2:false
    })
  },
  onLoad: function (options) {
   this.openConfirm()
  }
})