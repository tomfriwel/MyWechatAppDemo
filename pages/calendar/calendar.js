// pages/calendar/calendar.js
const Calendar = require('../../utils/Calendar/Calendar.js')
const holidayData = require('../../utils/Calendar/holiday.js')

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

        this.setupLunarTitle(currentYear, currentMonth, key)

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
        console.log(res)
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
        }
        this.setupLunarTitle(currentYear, currentMonth, currentDate)

        let days = []
        let obj = null
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
            let json = {
                day: i + 1,
                isFisrt: lunar_day == 1,
                infos: [],
                style: 'normal'
            }
            days.push(Object.assign(json, {
                animal,
                ganzhi_year,
                ganzhi_month,
                ganzhi_day,
                lunar_month_chinese,
                lunar_day_chinese,
                lunar_day
            }))

            // 将当前日期的信息添加到infos数组里，显示的时候取第一个，如果要查看全部信息可以取出infos里的数据
            json.infos.unshift(lunar_day_chinese)
            if (json.isFisrt) {
                json.infos.unshift(lunar_month_chinese)
                json.style = 'first'
            }

            if (holidayData[currentYear] && holidayData[currentYear][currentMonth + 1] && holidayData[currentYear][currentMonth + 1][i + 1]) {
                // title = holidayData[currentMonth + 1][i + 1].title
                // json.infos.unshift(holidayData[currentMonth + 1][i + 1].title)
                // json.style = 'holiday'
                obj = holidayData[currentYear][currentMonth + 1][i + 1]
            }
            if (obj && obj.range[0] < i + 2 && obj.range[1] > i) {
                json.style = 'holiday'
                if (obj.at == i + 1) {
                    json.infos.unshift(obj.title)
                }
                if (obj.range[1] == i + 1) {
                    obj = null
                }
            }
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