// pages/form/form.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    formSubmit: function (e) {
        console.log('form发生了submit事件：', e)
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function () {
        console.log('form发生了reset事件')
    }
})