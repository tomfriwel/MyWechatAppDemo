Page({
    data: {
        tires: []
    },
    onLoad: function(options) {
        this.add()
    },
    add() {
        let { tires} = this.data
        tires.unshift({
            positionIndex: null,
            position: [
                '前左',
                '前右',
                '后左',
                '后右',
            ],
            brandnames: [],
            brandnameIndex: null,
            series: [],
            seriesIndex: null,
            specifications: [],
            specificationsIndex: null,
            figure: [],
            figureIndex: null,
            image: null,
            tirebatchno: '',
            specId: '',
            time: (new Date()).getTime()
        })
        this.setData({
            tires
        })
    },
    positionPickerChange(e) {
        let {
            key,
            index
        } = e.currentTarget.dataset
        let tires = this.data.tires

        tires[index].positionIndex = +e.detail.value
        tires[index].time = (new Date()).getTime()

        console.log(tires[index])

        this.setData({tires})
    },
})