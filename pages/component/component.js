// pages/component/component.js
Page({
    data: {
        showComponent:true
    },
    onLoad: function (options) {

    },
    showComponentHandler:function(){
        var showComponent = this.data.showComponent
        showComponent = !showComponent
        this.setData({
            showComponent: showComponent
        })
    },
    componentEventHandler:function(){
        console.log("component run some method.")
    }
})