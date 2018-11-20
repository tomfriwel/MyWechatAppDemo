// pages/drag/drag.js
console.log(wx.getSystemInfoSync())
const W = wx.getSystemInfoSync().windowWidth;
const H = wx.getSystemInfoSync().windowHeight;
const rate = 750.0 / W
console.log(rate);

const LEN = 100 / rate;
console.log(LEN);

Page({
    data: {
        items: [
            // {
            //     x: 10,
            //     y: 10,
            //     title: 1,
            //     color: 'red'
            // },
            // {
            //     x: 100,
            //     y: 140,
            //     title: 2,
            //     color: 'blue'
            // },
            // {
            //     x: 200,
            //     y: 100,
            //     title: 3,
            //     color: 'green'
            // },
            // {
            //     x: 230,
            //     y: 400,
            //     title: 4,
            //     color: 'pink'
            // },
            // {
            //     x: 30,
            //     y: 300,
            //     title: 5,
            //     color: 'yellow'
            // },
        ],
        scaleInfo: null
    },
    onLoad: function(options) {
        // let items = wx.getStorageSync('items');
        // if (items) {
        //     items = JSON.parse(items);
        //     this.setData({
        //         items
        //     })
        // }
        const z = this;
        wx.getImageInfo({
            src: '/images/tree.jpg',
            success: res => {
                console.log(res);
                z.adjust(res);
            }
        })
    },
    onReady: function() {

    },
    adjust: function({
        width,
        height
    }) {
        console.log(W / H);
        console.log(width / height);

        let scale_w = W;
        let scale_rate = W / width;
        let scale_h = height * scale_rate;

        console.log(`${scale_w}, ${scale_h}`);

        if (scale_h > H) {
            console.log('rescale')
            scale_h = H;
            scale_rate = H / height;
            scale_w = width * scale_rate;

            console.log(`${scale_w}, ${scale_h}`);
        }

        scale_w = scale_w.toFixed(0);
        scale_h = scale_h.toFixed(0);

        let baseInfos = [{
                x: 0.1,
                y: 0.1,
            },
            {
                x: 0.3,
                y: 0.3,
            },
            {
                x: 0.3,
                y: 0.6,
            },
            {
                x: 0.5,
                y: 0.7,
            },
            {
                x: 0.8,
                y: 0.3,
            },
        ];
        let colors = ['red', 'blue', 'green', 'pink', 'yellow'];

        let items = [];
        let ox = (W - scale_w) / 2;
        let oy = (H - scale_h) / 2;

        for (let i = 0; i < baseInfos.length; i++) {
            items.push({
                x: scale_w * baseInfos[i].x + ox,
                y: scale_h * baseInfos[i].y + oy,
                color: colors[i],
            });
        }

        this.setData({
            scaleInfo: {
                w: scale_w,
                h: scale_h,
                ox,
                oy,
            },
            items
        })
        console.log(this.data.scaleInfo);

    },
    startHandler: function(e) {
        // let {
        //     index
        // } = e.currentTarget.dataset
        // // console.log(e)
        // // console.log('start')
        // let {
        //     changedTouches
        // } = e
        // if (changedTouches.length == 1) {
        //     // let touch = changedTouches[0]
        //     // let {
        //     //     pageX,
        //     //     pageY
        //     // } = touch

        //     console.log(`start index:${index}`)
        //     let start = {
        //         // x: pageX - 25,
        //         // y: pageY - 25,
        //         index
        //     }
        //     this.setData({
        //         start
        //     })
        // }
    },
    endHandler: function(e) {
        let {
            index
        } = e.currentTarget.dataset
        // console.log(e)
        let {
            changedTouches
        } = e
        if (changedTouches.length == 1) {
            let touch = changedTouches[0]
            let {
                pageX,
                pageY
            } = touch
            // let {
            //     ox,
            //     oy
            // } = this.data.scaleInfo;

            let current = {
                x: pageX,
                y: pageY
            };
            // console.log(`end index:${index}`)
            console.log(`current:${current.x},${current.y}`);
            for (let i = 0; i < this.data.items.length; i++) {
                let ele = this.data.items[i];
                if (i == index) {
                    continue;
                }
                if (ele.x < current.x && ele.x + LEN > current.x && ele.y < current.y && ele.y + LEN > current.y) {
                    // console.log(`swap index:${i}`)
                    console.log('swap');
                    let temp = {
                        x: ele.x,
                        y: ele.y
                    };

                    // console.log(`swap s:(${this.data.items[index].x},${this.data.items[index].y})`);
                    // console.log(`swap s:(${this.data.items[i].x},${this.data.items[i].y})`);

                    this.data.items[i].x = this.data.items[index].x;
                    this.data.items[i].y = this.data.items[index].y;


                    this.data.items[index].x = temp.x;
                    this.data.items[index].y = temp.y;

                    // console.log(`swap e:(${this.data.items[index].x},${this.data.items[index].y})`);
                    // console.log(`swap e:(${this.data.items[i].x},${this.data.items[i].y})`);

                    break;
                } else {
                    console.log(`ele:${ele.x},${ele.y} - ${ele.x + LEN},${ele.y + LEN}`);
                }
            }
            // this.data.items[index] = {
            //     x: pageX - 25,
            //     y: pageY - 25
            // }
            this.setData({
                items: this.data.items
            })

            wx.setStorageSync('items', JSON.stringify(this.data.items));
        }
    }
})