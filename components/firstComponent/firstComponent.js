// components/firstComponent/firstComponent.js
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
            observer: function (newVal, oldVal) { 
                console.log("newVal:" + newVal +", oldVal:"+oldVal)
            }
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {},
        defaultText:'Hello tomfriwel',
        count:0
    },
    methods: {
        // 这里是一个自定义方法
        customMethod: function () { },
        increaseCount: function() {
            var count = this.data.count
            count++
            this.setData({
                count:count,
                innerText:"count="+count
            })


            var myEventDetail = {} // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('increaseCount', myEventDetail, myEventOption)
        }
    },
    // 生命周期函数
    created:function(){
        console.log("firstComponent created")
        // 无法获取data
    },
    attached: function () {
        console.log("firstComponent attached")
        // 无法获取data
    },
    ready: function () {
        console.log("firstComponent ready")
        console.log(this.data)
    },
    moved: function () {
        console.log("firstComponent moved")
        console.log(this.data)
    },
    detached: function () {
        console.log("firstComponent detached")
        console.log(this.data)
    }
})