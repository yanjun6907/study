import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({

  data: {
    content:''
  },

/****限制字数与计算 */
getValueLength: function (e) {
  let value = e.detail.value
  let len = parseInt(value.length)
  //最多字数限制
  if (len > 300) return;
  this.setData({
    currentWordNumber: len, //当前字数 
    content:e.detail.value
  })
},
async saveArticle(){
  let content = `content=${this.data.content}`
  console.log(this.data.content)
  if(this.data.content!=''){
    const res = await request({url:'/a/u/hole',method:'POST',data:content})
    console.log(res)
    this.goBack()
  }else {
    wx.showToast({
      title: '请输入内容',
      icon: 'none'
    })
  }
  
},
goBack(){
  wx.navigateBack({
    delta: 1  
  })
},
onLoad(options){

},

})