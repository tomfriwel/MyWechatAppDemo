// pages/calendar/calendar.js
const Calendar = require('../../utils/Calendar.js')

let calendar = new Calendar()
// let result
// result = calendar.solar(2018, 9, 12)

// console.log(result)

Page({
    data: {
        weekItems: ['日', '一', '二', '三', '四', '五', '六'],
        monthCount: 0,
        fisrtDay: 0,
        currentDate: 0,
        currentMonth: 0,
        currentYear: 0,
        selectedDate: null,
        days: [],
        lunarTitle: ''
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

        let {
            currentMonth,
            currentYear,
        } = this.data

        // console.log({
        //     currentMonth,
        //     currentYear,
        //     key
        // })

        this.setupLunarTitle(currentYear, currentMonth, key)
        // let res = calendar.solar(currentYear, currentMonth + 1, key + 1)

        // let {
        //     animal,
        //     ganzhi_year,
        //     ganzhi_month,
        //     ganzhi_day,
        //     lunar_month_chinese,
        //     lunar_day_chinese
        // } = res
        // console.log(res)
        // console.log(`${ganzhi_year}年 【${animal}年】 ${ganzhi_month}月 ${ganzhi_day}日`)
        // console.log(`${lunar_month_chinese} ${lunar_day_chinese}`)

        this.setData({
            selectedDate: key
        })
    },
    setupLunarTitle(year, month, day) {
        let res = calendar.solar(year, month + 1, day + 1)

        let {
            animal,
            ganzhi_year,
            ganzhi_month,
            ganzhi_day,
            lunar_month_chinese,
            lunar_day_chinese
        } = res
        // console.log(res)
        // console.log(`${ganzhi_year}年 【${animal}年】 ${ganzhi_month}月 ${ganzhi_day}日`)
        // console.log(`${lunar_month_chinese} ${lunar_day_chinese}`)
        this.setData({
            lunarTitle: `${lunar_month_chinese} ${lunar_day_chinese} ${ganzhi_year}年 【${animal}年】 ${ganzhi_month}月 ${ganzhi_day}日`
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

            // this.setupLunarTitle(currentYear, currentMonth, currentDate)
        }
        this.setupLunarTitle(currentYear, currentMonth, currentDate)

        // console.log({
        //     fisrtDay,
        //     monthCount,
        // })

        let days = []
        for (let i = 0; i < monthCount; i++) {
            let res = calendar.solar(currentYear, currentMonth + 1, i + 1)

            let {
                animal,
                ganzhi_year,
                ganzhi_month,
                ganzhi_day,
                lunar_month_chinese,
                lunar_day_chinese,
                lunar_day
            } = res
            days.push(Object.assign({
                day: i + 1,
                isFisrt: lunar_day == 1
            }, {
                animal,
                ganzhi_year,
                ganzhi_month,
                ganzhi_day,
                lunar_month_chinese,
                lunar_day_chinese,
                lunar_day
            }))
        }

        this.setData({
            fisrtDay,
            monthCount,
            currentDate,
            currentMonth,
            currentYear,
            selectedDate: null,
            days
        })
    }
})