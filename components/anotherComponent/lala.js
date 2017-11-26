var componentData = {
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        anotherText: {
            type: String,
            value: 'another default value'
        }
    },
    data: {
        count: 0
    },
    methods: {
        increaseCount: function () {
            var count = this.data.count
            count++
            this.setData({
                count: count,
                innerText: "count=" + count
            })
        }
    },
    // 生命周期函数
    created: function () {
    },
    attached: function () {
    },
    ready: function () {
    },
    moved: function () {
    },
    detached: function () {
    }
}

module.exports = Behavior(componentData)