import {request} from '../../request/index.js'
const regeneratorRuntime = require('../../lib/runtime.js')
Page({
  data: {
    total:15,
    sginDay:3,
    checked:false,
    weeks: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    // 所选择日期
    selectDate: {
      'year': new Date().getFullYear(),
      'month': new Date().getMonth() + 1,
      'date': new Date().getDate(),
    },
    calendarTitle: '',
    // 日期list 
    calendarDays: []
  },
  onLoad(options) {
    this.getMonthDaysCurrent(new Date())
  },
    // 所选时间对应月份日期
    async getMonthDaysCurrent(e) {
      let year = e.getFullYear()
      let month = e.getMonth() + 1
      let date = e.getDate()
      let day = e.getDay() // 周几
      let days = new Date(year, month, 0).getDate() //当月天数(即下个月0号=当月最后一天)
      let firstDayDate = new Date(year, month - 1, 1) // 当月1号
      let firstDay = firstDayDate.getDay() //当月1号对应的星期
      let lastDate = new Date(year, month - 1, days) //当月最后一天日期
      let lastDay = lastDate.getDay() //当月最后一天对应的星期
      const res = await request({url:'/a/u/signs',method:'GET'})
      console.log(res.data)
      // 更新顶部显示日期
      this.setData({
        calendarTitle: year + "年" + (month > 9 ? month : "0" + month) + "月" + (date > 9 ? date : "0" + date)+ "日",
        total:res.data.data[0].coutSign,
        sginDay:res.data.data[0].mostSign,
      })
    
      let firstCalendarDays = []
      let calendarDay = []
      // // 上个月显示的天数及日期
      for (let i = firstDay - 1; i >= 0; i--) {
        let date = new Date(year, month - 1, -i)
        //console.log(date, date.getMonth() + 1)
        firstCalendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'day': date.getDay(),
          'current': false,
          'selected': 0
        })
      }
      // 当月显示的日期
      for (let i = 1; i <= days; i++) {
            calendarDay.push({
              'year': year,
              'month': month,
              'date': i,
              'day': new Date(year, month - 1, i).getDay(),
              'current': true,
              'selected':0
            }) 
      } 
      // // 下个月显示的天数及日期
      for (let i = 1; i < 7 - lastDay; i++) {
        let date = new Date(year, month, i)
        //console.log(date, date.getMonth() + 1)
        calendarDay.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'day': date.getDay(),
          'current': false,
          'selected': 0
        })
      }
      for (let i = 1; i <= days; i++) {
        for (let j = 0; j < res.data.data.length; j++) {
          if(res.data.data[j].createTime ==year +""+ (month > 9 ? month : "0" + month) +""+ (i > 9 ? i : "0" + i)){
            calendarDay[i-1].selected = 1
          }
        }
      }
      if(calendarDay[date-1].selected == 1){  
        this.setData({
          checked:true
        })
      }
      let calen = firstCalendarDays.concat(calendarDay)
      this.setData({
        calendarDays:calen
      })
    },
    async sginInfo(){
      let that = this
      const res = await request({url:'/a/u/signs',method:'POST'})
      console.log(res.data)
      if(res.data.code==1102){
        wx.showToast({
          title: `签到成功\r\n逆袭豆+5`,
          icon:'none',
          duration: 3000
        })
        this.setData({
          checked:true
        })
        wx.setStorage({
          key: 'checked',
          data: that.data.checked==true,
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 1,
          })
        }, 3000);
      } 
    },
})