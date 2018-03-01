// components/canvasComponent/canvasComponent.js
const canvasTemplate = require('../templates/canvasTemplate/canvasTemplate.js')

Component({
    properties: {

    },
    data: {
        w:300,
        h:300
    },
    ready: function () {
        console.log(1)
        canvasTemplate.init.apply(this, []);
        this.draw()


    },
    methods: {

    }
})
