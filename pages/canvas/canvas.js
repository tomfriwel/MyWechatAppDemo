// canvas.js
var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw = { seconds: 0, t: 0 };
height = 300;
width = 375;

xAxis = Math.floor(height / 2);
yAxis = 0//Math.floor(width / 4);
Page({
    /**
     * 页面的初始数据
     */
    data: {
        spreakingAnimation: {},//放大动画 
        r: 0,
        c: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var animation = wx.createAnimation({
            duration: 1000,
        })
        animation.opacity(0).scale(3, 3).step();//修改透明度,放大  
        this.setData({
            spreakingAnimation: animation.export()
        })
        // var that = this;
        // this.interval = setInterval(function () {
        //   that.drawContent()
        //   console.log(that.data.r)
        // }, 10)
        this.draw();
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        clearInterval(this.interval)
        clearTimeout(this.timer)
    },
    drawContent: function () {
        var r = this.data.r;
        var c = this.data.c;

        c *= r > 100 || r < 0 ? -1 : 1;
        r += c;
        this.setData({ r: r, c: c })
        var context = wx.createContext()
        context.beginPath(0)
        context.arc(151, 151, r, 0, Math.PI * 2)
        context.setFillStyle('#ffffff')
        context.setStrokeStyle('#aaaaaa')
        context.fill()
        context.stroke()
        wx.drawCanvas({
            canvasId: 'my_canvas',
            actions: context.getActions()
        })
    },
    draw: function () {
        var context = wx.createContext()
        context.strokeStyle = '#000';
        context.lineJoin = 'round';
        // Clear the canvas
        // context.clearRect(0, 0, width, height);

        // Draw the axes in their own path
        context.beginPath();
        // drawAxes();
        context.stroke();

        // Set styles for animated graphics
        context.save();
        context.strokeStyle = '#00f';
        context.fillStyle = '#fff';
        context.lineWidth = 2;

        // Draw the sine curve at time draw.t, as well as the circle.
        context.beginPath();
        this.drawSine(draw.t, context);

        // drawCircle();
        context.stroke();

        // Draw the arrow at time t in its own path.
        // drawArrow(draw.t);

        // Restore original styles
        context.restore();

        // Draw the xAxis PI tick and the time
        context.fillText("a", xAxis + 59 + 3 * unit, 18 + xAxis);
        context.fillText("t = " + Math.floor(Math.abs(draw.seconds)), 10, 20);

        // Update the time and draw again
        draw.seconds = draw.seconds - .007;
        draw.t = draw.seconds * Math.PI;
        wx.drawCanvas({
            canvasId: 'my_canvas',
            actions: context.getActions()
        })
        this.timer = setTimeout(this.draw, 1);
    },
    drawSine: function (t, context) {
        // Set the initial x and y, starting at 0,0 and translating to the origin on
        // the canvas.
        var x = t;
        var y = Math.sin(x);
        context.moveTo(yAxis, unit * y + xAxis);

        // Loop to draw segments
        for (var i = yAxis; i <= width; i += 10) {
            x = t + (-yAxis + i) / unit;
            y = Math.sin(x);
            context.lineTo(i, unit * y + xAxis);
        }
    }
})