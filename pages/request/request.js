// pages/request/request.js
const app = getApp()

Page({
    data: {

    },
    onLoad: function(options) {

    },
    onReady: function() {
        // app.api.movie.getList().then(res=>{

        // }).catch(res=>{})
        app.api.login.login().then(res=>{

        }).catch(res=>{
        })
    },
})