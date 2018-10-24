// pages/remember/remember.js
// 类似于《刻意练习》里的记忆小游戏，点击开始。
// 显示完6个数字后，在输入框中输入记忆的数字，回车查看是否正确。
Page({
    data: {
        num: 'Click to start',
        nums: [],
        text: ''
    },
    onLoad: function(options) {

    },
    start() {
        const z = this;
        let n = 0;
        let timer;
        let nums = []

        run()

        function run() {
            if (n < 6) {
                let num = Math.floor(Math.random() * 10)
                nums.push(num)
                z.setData({
                    num,
                    nums
                })
                n++
                timer = setTimeout(run, 1000)
            } else {
                clearTimeout(timer);
            }
        }
    },
    inputConfirm(e) {
        let {
            value
        } = e.detail
        if (value == this.data.nums.join('')) {
            this.setData({
                text: 'Correct!'
            })
        } else {
            this.setData({
                text: 'Wrong!'
            })
        }
    }
})