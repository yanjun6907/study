
Page({

  data: {
    userName:'qq',
    grade:['初一','初二','初三','高一','高二','高三'],
    objectArray: [
      {
        id: 0,
        name: '初一'
      },
      {
        id: 1,
        name: '初二'
      },
      {
        id: 2,
        name: '初三'
      },
      {
        id: 3,
        name: '高一'
      },
      {
        id: 3,
        name: '高二'
      },
      {
        id: 3,
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
      console.log(e)
      if(e.detail.value==1){
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
            wx.uploadFile({  
              url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址  
              filePath: tempFilePaths[0],  
              name: 'file',  
              formData: {  
                'user': 'test'  
              },  
              success: (res) => {  
                //上传成功  
              },  
              fail: function(t) {  
                //上传失败  
            },  
            })  
            
          }
        })
      }else if(e.detail.value==2){
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
            wx.uploadFile({  
              url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址  
              filePath: tempFilePaths[0],  
              name: 'file',  
              formData: {  
                'user': 'test'  
              },  
              success: (res) => {  
                //上传成功  
              },  
              fail: function(t) {  
                //上传失败  
            },  
            })  
          }
        })
      }
      // this.close()
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },
  onLoad: function (options) {

  },
})