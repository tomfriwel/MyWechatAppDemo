// pages/sortItems/sortItems.js
Page({
    data: {
        len: 50,
        L: 300,
        temp: {
            x: 25,
            y: 25,
            key: 0,
        },
        items: [
            {
                x: 25,
                y: 25,
                key: 0,
                selected: 0
            },
            {
                x: 75,
                y: 25,
                key: 1,
                selected: 0
            },
            {
                x: 125,
                y: 25,
                key: 2,
                selected: 0
            },
            {
                x: 175,
                y: 25,
                key: 3,
                selected: 0
            },
            {
                x: 225,
                y: 25,
                key: 4,
                selected: 0
            },
            {
                x: 275,
                y: 25,
                key: 5,
                selected: 0
            },
            {
                x: 25,
                y: 75,
                key: 6,
                selected: 0
            }
        ],
        startOffset: {
            ox: 0,
            oy: 0,
            x: 0,
            y: 0
        }
    },
    onLoad: function (options) {

    },
    onStart: function (e) {
        let index = e.currentTarget.dataset.index
        let items = this.data.items
        let len = this.data.len
        if (e.changedTouches.length == 1) {
            let touch = e.changedTouches[0]
            let item = items[index]
            let startOffset = {
                ox: item.x,
                oy: item.y,
                x: touch.clientX,
                y: touch.clientY
            }
            items[index].selected = 1
            console.log(startOffset)

            this.setData({
                startOffset,
                items
            })
        }
    },
    onMove: function (e) {
        let index = e.currentTarget.dataset.index
        let items = this.data.items
        let item = items[index]
        let startOffset = this.data.startOffset
        console.log(e)
        if (e.changedTouches.length == 1) {
            let touch = e.changedTouches[0]

            let min = 0
            let max = this.data.L
            let cx = touch.clientX < min ? min : (touch.clientX > max ? max : touch.clientX)
            let cy = touch.clientY < min ? min : (touch.clientY > max ? max : touch.clientY)

            item.x = cx - startOffset.x + startOffset.ox
            item.y = cy - startOffset.y + startOffset.oy
            items[index] = item

            // this.setData({
            //     items
            // })

            this.reSort(items, index)
        }
    },
    onEnd: function (e) {
        let index = e.currentTarget.dataset.index
        let items = this.data.items
        let item = items[index]
        let startOffset = this.data.startOffset
        console.log(e)
        if (e.changedTouches.length == 1) {
            let touch = e.changedTouches[0]

            let min = 0
            let max = this.data.L
            let cx = touch.clientX < min ? min : (touch.clientX > max ? max : touch.clientX)
            let cy = touch.clientY < min ? min : (touch.clientY > max ? max : touch.clientY)

            item.x = cx - startOffset.x + startOffset.ox
            item.y = cy - startOffset.y + startOffset.oy
            item.selected = 0
            items[index] = item

            // this.setData({
            //     items
            // })

            this.reSort(items)
        }
    },
    reSort: function (items, index) {
        // console.log(index)
        let { len, L } = this.data

        // console.log(Math.floor(items[index].y / len) * len / 2 + len / 2)

        let copyItems = items.slice(0)
        copyItems.forEach(function (item, index) {
            item.y = Math.floor(item.y / len) * len + len / 2
            copyItems[index] = item
        })
        let sortedItems = copyItems.sort(function (a, b) {
            if (a.y == b.y) {
                return a.x - b.x
            }
            else {
                return a.y - b.y
            }
        })

        console.log(items)

        console.log(copyItems)

        let x = len / 2
        let y = x

        // console.log(items)
        for (let index in sortedItems) {
            let i = parseInt(sortedItems[index].key)
            // if (index !== undefined && index == i) {

            // }
            // else {
                items[i].x = x
                items[i].y = y
            // }

            x += len
            if (x >= L) {
                x = len / 2
                y += len
            }
        }
        // console.log(items)

        this.setData({
            items: items
        })
    }
})