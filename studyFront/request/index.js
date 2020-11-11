export const request=(params)=>{
  let header = {...params.header}
  // let token = wx.getStorageSync('token')
  let token = 'xuexi.xuegepi.lol'
  if(token){
    header['userToken'] = token
  }
  const BaseUrl = 'https://buxueyeba.home.mogeek.cn'
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      header:header,
      url:BaseUrl+params.url,
      success: (result) => {resolve(result)},
      fail: (res) => {reject(res)},
      complete: (res) => {},
    })
  })
}



