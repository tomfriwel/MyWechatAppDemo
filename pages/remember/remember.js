// pages/remember/remember.js
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