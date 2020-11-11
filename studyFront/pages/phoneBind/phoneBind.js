
Page({
  data: {
    Phone:'',
    Email:''
  },
  phone(){
    wx.navigateTo({
      url: '../phoneVerifiy/phoneVerifiy?id=0',
    })
  },
  email(){
    wx.navigateTo({
      url: '../phoneVerifiy/phoneVerifiy?id=1',
    })
  },
  phoneChange(){
    var p = this.data.Phone
    wx.navigateTo({
      url: '../phoneChange/phoneChange?id=0&phone='+p,
    })
  },
  emailChange(){
    var e = this.data.Email
    wx.navigateTo({
      url: '../phoneChange/phoneChange?id=1&email='+e,
    })
  },
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'phone',
      success(res){
        that.setData({
          Phone:res.data.phone,
          Email:res.data.email
        })
      }
    })
  },
})