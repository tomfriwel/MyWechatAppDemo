// pages/calendar/calendar.js
// const Calendar = require('../../utils/Calendar.js')

// let calendar = new Calendar()
// let result
// result = calendar.solar(2017, 5, 5)

Page({
    data: {
        weekItems: ['日', '一', '二', '三', '四', '五', '六'],
        monthCount: 0,
        fisrtDay: 0,
        currentDate: 0,
        currentMonth: 0,
        currentYear: 0,
        selectedDate: null
    },
    onLoad: function(options) {
        let now = new Date()
        this.setup(now)
    },
    getCountDays(date) {
        var month = date.getMonth();
        date.setMonth(month + 1);
        date.setDate(0);
        return date.getDate();
    },
    itemTap(e) {
        let {
            key
        } = e.currentTarget.dataset
        this.setData({
            selectedDate: key
        })
    },
    preMonth() {
        let {
            currentMonth,
            currentYear,
        } = this.data

        let now = new Date()

        if (currentMonth > 0) {
            currentMonth -= 1
        } else {
            currentMonth = 11
            currentYear -= 1
        }
        now.setMonth(currentMonth)
        now.setFullYear(currentYear)
        
        this.setup(now)
    },
    nextMonth() {
        let {
            currentMonth,
            currentYear,
        } = this.data

        let now = new Date()

        if (currentMonth < 11) {
            currentMonth += 1
        } else {
            currentMonth = 0
            currentYear += 1
        }
        now.setMonth(currentMonth)
        now.setFullYear(currentYear)
        
        this.setup(now)
    },
    setup(date) {
        let now = new Date()
        console.log(date)
        
        date.setDate(1)
        let fisrtDay = date.getDay() //0~6
        let monthCount = this.getCountDays(date)
        let currentMonth = date.getMonth() //0~11
        let currentYear = date.getFullYear()


        let currentDate = null
        if (now.getFullYear() == currentYear && now.getMonth() == currentMonth) {
            currentDate = now.getDate() - 1
        }

        console.log({
            fisrtDay,
            monthCount,
        })

        this.setData({
            fisrtDay,
            monthCount,
            currentDate,
            currentMonth,
            currentYear,
            selectedDate: null
        })
    }
})