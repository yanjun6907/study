
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
  onLoad: function (options) {
    this.getMonthDaysCurrent(new Date())
  },
    // 所选时间对应月份日期
    getMonthDaysCurrent(e) {
      let year = e.getFullYear()
      let month = e.getMonth() + 1
      let date = e.getDate()
      let day = e.getDay() // 周几
      let days = new Date(year, month, 0).getDate() //当月天数(即下个月0号=当月最后一天)
      let firstDayDate = new Date(year, month - 1, 1) // 当月1号
      let firstDay = firstDayDate.getDay() //当月1号对应的星期
      let lastDate = new Date(year, month - 1, days) //当月最后一天日期
      let lastDay = lastDate.getDay() //当月最后一天对应的星期
      // 更新顶部显示日期
      this.setData({
        calendarTitle: year + "年" + (month > 9 ? month : "0" + month) + "月" + (date > 9 ? date : "0" + date)+ "日"
      })
      let calendarDays = []
      // 上个月显示的天数及日期
      for (let i = firstDay - 1; i >= 0; i--) {
        let date = new Date(year, month - 1, -i)
        //console.log(date, date.getMonth() + 1)
        calendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'day': date.getDay(),
          'current': false,
          'selected': false
        })
      }
      // 当月显示的日期
      for (let i = 1; i <= days; i++) {
        calendarDays.push({
          'year': year,
          'month': month,
          'date': i,
          'day': new Date(year, month - 1, i).getDay(),
          'current': true,
          'selected': i == date // 判断当前日期
        })
      }
      // 下个月显示的天数及日期
      for (let i = 1; i < 7 - lastDay; i++) {
        let date = new Date(year, month, i)
        //console.log(date, date.getMonth() + 1)
        calendarDays.push({
          'year': date.getFullYear(),
          'month': date.getMonth() + 1,
          'date': date.getDate(),
          'day': date.getDay(),
          'current': false,
          'selected': false
        })
      }
      this.setData({
        calendarDays: calendarDays
      })
    },
    sginInfo(){
      wx.showToast({
        title: `签到成功\r\n逆袭豆+5`,
        icon:'none',
        duration: 3000
      })
      this.setData({
        checked:true
      })
    },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
})