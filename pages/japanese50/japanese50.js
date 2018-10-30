// pages/japanese50/japanese50.js

const jp = {
    items: [
        [{
                hiragana: 'あ',
                katakana: 'ア',
                en: 'a',
                index: 0,
                subindex: 0,
            },
            {
                hiragana: 'い',
                katakana: 'イ',
                en: 'i',
                index: 0,
                subindex: 1,
            },
            {
                hiragana: 'う',
                katakana: 'ウ',
                en: 'u',
                index: 0,
                subindex: 2,
            },
            {
                hiragana: 'え',
                katakana: 'エ',
                en: 'e',
                index: 0,
                subindex: 3,
            },
            {
                hiragana: 'お',
                katakana: 'オ',
                en: 'o',
                index: 0,
                subindex: 4,
            },
        ],
        [{
                hiragana: 'か',
                katakana: 'カ',
                en: 'ka',
                index: 1,
                subindex: 0,
            },
            {
                hiragana: 'き',
                katakana: 'キ',
                en: 'ki',
                index: 1,
                subindex: 1,
            },
            {
                hiragana: 'く',
                katakana: 'ク',
                en: 'ku',
                index: 1,
                subindex: 2,
            },
            {
                hiragana: 'け',
                katakana: 'ケ',
                en: 'ke',
                index: 1,
                subindex: 3,
            },
            {
                hiragana: 'こ',
                katakana: 'コ',
                en: 'ko',
                index: 1,
                subindex: 4,
            },
        ],
    ]
}

function swap(arr, idxObj0, idxObj1) {
    // console.log(idxObj0, idxObj1);
    // console.log(arr[idxObj0[0]][idxObj0[1]], arr[idxObj1[0]][idxObj1[1]]);
    let temp = arr[idxObj0[0]][idxObj0[1]];
    arr[idxObj0[0]][idxObj0[1]] = arr[idxObj1[0]][idxObj1[1]];
    arr[idxObj1[0]][idxObj1[1]] = temp;
    // console.log(arr[idxObj0[0]][idxObj0[1]], arr[idxObj1[0]][idxObj1[1]]);
}

function shuffle(array) {
    var itemLength = array[0].length;
    var currentIndex = array.length * itemLength,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        let index0 = Math.floor(currentIndex / itemLength);
        let subindex0 = currentIndex % itemLength;
        let index1 = Math.floor(randomIndex / itemLength);
        let subindex1 = randomIndex % itemLength;
        swap(array, [index0, subindex0], [index1, subindex1]);
    }
    return array;
}

Page({
    data: {
        type: 2, //0平假名 1片假名 2都显示,
        displayEn: 0,
        finish:false,
        jp: null,
        selected: [-1, -1],
    },
    onLoad: function(options) {
        jp.items = shuffle(jp.items);
        this.setData({
            jp
        });
    },
    tap(e) {
        let {
            index,
            subindex
        } = e.currentTarget.dataset;
        // console.log(index, subindex);
        let {
            selected,
            jp
        } = this.data;
        let update = {};

        update.selected = [index, subindex];
        if (selected[0] > -1 && selected[1] > -1) {
            if ((selected[0] == index && selected[1] != subindex) || selected[0] != index) {
                swap(jp.items, selected, [index, subindex]);
                update.jp = jp;
                if (this.check(jp.items)) {
                    update.finish = true;
                }
            }
            update.selected = [-1, -1];
        }

        this.setData(update);
    },
    shuffle() {
        jp.items = shuffle(jp.items);
        this.setData({
            jp,
            finish:false,
        });
    },
    check(items) {
        let isCorrect = true;
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items[i].length; j++) {
                let {index, subindex} = items[i][j];
                if (!(index == i && subindex == j)) {
                    isCorrect = false;
                    break;
                }
            }
            if(!isCorrect) {
                break;
            }
        }
        return isCorrect;
    }
})