// pages/classPage/classPage.js
import MyClass from '../../utils/myClass.js'
Page({
    data: {

    },
    onLoad: function (options) {
        let myclass = new MyClass('tom')

        myclass.sayName()
    },
})