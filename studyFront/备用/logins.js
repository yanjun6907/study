const app = getApp()

Component({
  data:{
    msg:0,
    num2:0,
    num3:0,
    foo:true,
    showDialog: false,
    showDialog2: false,
    weeks: ["日", "一", "二", "三", "四", "五", "六"],

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
  methods:{
    clickme:function(){
      let that=this
      this.setData({
        foo:false,
        showDialog2: true,
      })
      setTimeout(() => {
        that.setData({
          showDialog2: false,
        })
      }, 3000);
    },
    lookme(){
      this.setData({
        showDialog: true
      })
    },
    /**
   * 生命周期函数--监听页面加载
   */
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

    // 更新选择日期
    this.data.selectDate = {
      'year': year,
      'month': month,
      'date': date,
    }
    
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

  // 手动选中日期
  clickDate(e) {
    let index = e.currentTarget.dataset.index
    let list = this.data.calendarDays
    for (let i = 0; i < list.length; i++) {
      list[i].selected = i == index
      if (i == index) {
        console.log(list[i], this.data.selectDate)
        // 如果选择日期不在当月范围内，则重新刷新日历数据
        if (list[i].year != this.data.selectDate.year || list[i].month != this.data.selectDate.month) {
          let date = new Date(list[i].year, list[i].month - 1, list[i].date)
          this.getMonthDaysCurrent(date)
          return
        }
        // 更新顶部显示日期
        this.setData({
          calendarTitle: list[i].year + "年" + (list[i].month > 9 ? list[i].month : "0" + list[i].month) + "月" + (list[i].date > 9 ? list[i].date : "0" + list[i].date)+ "日"
        })
      }
    }
    
    this.setData({
      calendarDays: list
    })
  },
      /**
  * 控制 pop 的打开关闭
  * 该方法作用有2:
  * 1：点击弹窗以外的位置可消失弹窗
  * 2：用到弹出或者关闭弹窗的业务逻辑时都可调用
  */
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });  
  },
  toggleDialog2() {
    this.setData({
      showDialog2: !this.data.showDialog2
    });  
  }
}
})