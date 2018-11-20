// pages/live/live.js
Page({
    statechange(e) {
        console.log('live-player code:', e.detail.code)
    },
    error(e) {
        console.error('live-player error:', e)
    }
})