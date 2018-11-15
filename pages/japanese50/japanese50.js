// pages/japanese50/japanese50.js

// 将打乱顺序的五十音图重新排序。
const jp = {
    // 清音
    items: [
        [{
                hiragana: 'あ',
                katakana: 'ア',
                en: 'a',
            },
            {
                hiragana: 'い',
                katakana: 'イ',
                en: 'i',
            },
            {
                hiragana: 'う',
                katakana: 'ウ',
                en: 'u',
            },
            {
                hiragana: 'え',
                katakana: 'エ',
                en: 'e',
            },
            {
                hiragana: 'お',
                katakana: 'オ',
                en: 'o',
            },
        ],
        [{
                hiragana: 'か',
                katakana: 'カ',
                en: 'ka',
            },
            {
                hiragana: 'き',
                katakana: 'キ',
                en: 'ki',
            },
            {
                hiragana: 'く',
                katakana: 'ク',
                en: 'ku',
            },
            {
                hiragana: 'け',
                katakana: 'ケ',
                en: 'ke',
            },
            {
                hiragana: 'こ',
                katakana: 'コ',
                en: 'ko',
            },
        ],
        [{
                hiragana: 'さ',
                katakana: 'サ',
                en: 'sa',
            },
            {
                hiragana: 'し',
                katakana: 'シ',
                en: 'shi',
            },
            {
                hiragana: 'す',
                katakana: 'ス',
                en: 'su',
            },
            {
                hiragana: 'せ',
                katakana: 'セ',
                en: 'se',
            },
            {
                hiragana: 'そ',
                katakana: 'ソ',
                en: 'so',
            },
        ],
        [{
                hiragana: 'た',
                katakana: 'タ',
                en: 'ta',
            },
            {
                hiragana: 'ち',
                katakana: 'チ',
                en: 'chi',
            },
            {
                hiragana: 'つ',
                katakana: 'ツ',
                en: 'tsu',
            },
            {
                hiragana: 'て',
                katakana: 'テ',
                en: 'te',
            },
            {
                hiragana: 'と',
                katakana: 'ト',
                en: 'to',
            },
        ],
        [{
                hiragana: 'な',
                katakana: 'ナ',
                en: 'na',
            },
            {
                hiragana: 'に',
                katakana: 'ニ',
                en: 'ni',
            },
            {
                hiragana: 'ぬ',
                katakana: 'ヌ',
                en: 'nu',
            },
            {
                hiragana: 'ね',
                katakana: 'ネ',
                en: 'ne',
            },
            {
                hiragana: 'の',
                katakana: 'ノ',
                en: 'no',
            },
        ],
        [{
                hiragana: 'は',
                katakana: 'ハ',
                en: 'ha',
            },
            {
                hiragana: 'ひ',
                katakana: 'ヒ',
                en: 'hi',
            },
            {
                hiragana: 'ふ',
                katakana: 'フ',
                en: 'fu',
            },
            {
                hiragana: 'へ',
                katakana: 'ヘ',
                en: 'he',
            },
            {
                hiragana: 'ほ',
                katakana: 'ホ',
                en: 'ho',
            },
        ],
        [{
                hiragana: 'ま',
                katakana: 'マ',
                en: 'ma',
            },
            {
                hiragana: 'み',
                katakana: 'ミ',
                en: 'mi',
            },
            {
                hiragana: 'む',
                katakana: 'ム',
                en: 'mu',
            },
            {
                hiragana: 'め',
                katakana: 'メ',
                en: 'me',
            },
            {
                hiragana: 'も',
                katakana: 'モ',
                en: 'mo',
            },
        ],
        [{
                hiragana: 'や',
                katakana: 'ヤ',
                en: 'ya',
            },
            {
                hiragana: 'い',
                katakana: 'イ',
                en: 'i',
            },
            {
                hiragana: 'ゆ',
                katakana: 'ユ',
                en: 'yu',
            },
            {
                hiragana: 'え',
                katakana: 'エ',
                en: 'e',
            },
            {
                hiragana: 'よ',
                katakana: 'ヨ',
                en: 'yo',
            },
        ],
        [{
                hiragana: 'ら',
                katakana: 'ラ',
                en: 'ra',
            },
            {
                hiragana: 'り',
                katakana: 'リ',
                en: 'ri',
            },
            {
                hiragana: 'る',
                katakana: 'ル',
                en: 'ru',
            },
            {
                hiragana: 'れ',
                katakana: 'レ',
                en: 're',
            },
            {
                hiragana: 'ろ',
                katakana: 'ロ',
                en: 'ro',
            },
        ],
        [{
                hiragana: 'わ',
                katakana: 'ワ',
                en: 'wa',
            },
            {
                hiragana: 'い',
                katakana: 'イ',
                en: 'i',
            },
            {
                hiragana: 'う',
                katakana: 'ウ',
                en: 'u',
            },
            {
                hiragana: 'え',
                katakana: 'エ',
                en: 'e',
            },
            {
                hiragana: 'を',
                katakana: 'ヲ',
                en: 'wo',
            },
        ],
        [{
            hiragana: 'ん',
            katakana: 'ン',
            en: 'n',
        }, ],
    ],
    // 浊音
    itemDull: [
        [{
                hiragana: 'が',
                katakana: 'ガ',
                en: 'ga',
            },
            {
                hiragana: 'ぎ',
                katakana: 'ギ',
                en: 'gi',
            },
            {
                hiragana: 'ぐ',
                katakana: 'グ',
                en: 'gu',
            },
            {
                hiragana: 'げ',
                katakana: 'ゲ',
                en: 'ge',
            },
            {
                hiragana: 'ご',
                katakana: 'ゴ',
                en: 'go',
            },
        ],
        [{
                hiragana: 'ざ',
                katakana: 'ザ',
                en: 'za',
            },
            {
                hiragana: 'じ',
                katakana: 'ジ',
                en: 'ji',
            },
            {
                hiragana: 'ず',
                katakana: 'ズ',
                en: 'zu',
            },
            {
                hiragana: 'ぜ',
                katakana: 'ゼ',
                en: 'ze',
            },
            {
                hiragana: 'ぞ',
                katakana: 'ゾ',
                en: 'zo',
            },
        ],
        [{
                hiragana: 'だ',
                katakana: 'ダ',
                en: 'da',
            },
            {
                hiragana: 'ぢ',
                katakana: 'ヂ',
                en: 'ji',
            },
            {
                hiragana: 'づ',
                katakana: 'ヅ',
                en: 'zu',
            },
            {
                hiragana: 'で',
                katakana: 'デ',
                en: 'de',
            },
            {
                hiragana: 'ど',
                katakana: 'ド',
                en: 'do',
            },
        ],
        [{
                hiragana: 'ば',
                katakana: 'バ',
                en: 'ba',
            },
            {
                hiragana: 'び',
                katakana: 'ビ',
                en: 'bi',
            },
            {
                hiragana: 'ぶ',
                katakana: 'ブ',
                en: 'bu',
            },
            {
                hiragana: 'べ',
                katakana: 'ベ',
                en: 'be',
            },
            {
                hiragana: 'ぼ',
                katakana: 'ボ',
                en: 'bo',
            },
        ],
        [{
                hiragana: 'が',
                katakana: 'ガ',
                en: 'ga',
            },
            {
                hiragana: 'ぎ',
                katakana: 'ギ',
                en: 'gi',
            },
            {
                hiragana: 'ぐ',
                katakana: 'グ',
                en: 'gu',
            },
            {
                hiragana: 'げ',
                katakana: 'ゲ',
                en: 'ge',
            },
            {
                hiragana: 'ご',
                katakana: 'ゴ',
                en: 'go',
            },
        ],
    ],
    // 半浊音
    itemHalf: [
        [{
                hiragana: 'ぱ',
                katakana: 'パ',
                en: 'pa',
            },
            {
                hiragana: 'ぴ',
                katakana: 'ピ',
                en: 'pi',
            },
            {
                hiragana: 'ぷ',
                katakana: 'プ',
                en: 'pu',
            },
            {
                hiragana: 'ぺ',
                katakana: 'ペ',
                en: 'pe',
            },
            {
                hiragana: 'ぽ',
                katakana: 'ポ',
                en: 'po',
            },
        ],
    ],
    // 拗音
    itemHard: [
        [{
                hiragana: 'きゃ',
                katakana: 'キャ',
                en: 'kya',
            },
            {
                hiragana: 'きゅ',
                katakana: 'キュ',
                en: 'kyu',
            },
            {
                hiragana: 'きょ',
                katakana: 'キョ',
                en: 'kyo',
            },
        ],
        [{
                hiragana: 'しゃ',
                katakana: 'シャ',
                en: 'sha',
            },
            {
                hiragana: 'しゅ',
                katakana: 'シュ',
                en: 'shu',
            },
            {
                hiragana: 'しょ',
                katakana: 'ショ',
                en: 'sho',
            },
        ],
        [{
                hiragana: 'ちゃ',
                katakana: 'チャ',
                en: 'cha',
            },
            {
                hiragana: 'ちゅ',
                katakana: 'チュ',
                en: 'chu',
            },
            {
                hiragana: 'ちょ',
                katakana: 'チョ',
                en: 'cho',
            },
        ],
        [{
                hiragana: 'にゃ',
                katakana: 'ニャ',
                en: 'nya',
            },
            {
                hiragana: 'にゅ',
                katakana: 'ニュ',
                en: 'nyu',
            },
            {
                hiragana: 'にょ',
                katakana: 'ニョ',
                en: 'nyo',
            },
        ],
        [{
                hiragana: 'ひゃ',
                katakana: 'ヒャ',
                en: 'hya',
            },
            {
                hiragana: 'ひゅ',
                katakana: 'ヒュ',
                en: 'hyu',
            },
            {
                hiragana: 'ひょ',
                katakana: 'ヒョ',
                en: 'hyo',
            },
        ],
        [{
                hiragana: 'みゃ',
                katakana: 'ミャ',
                en: 'mya',
            },
            {
                hiragana: 'みゅ',
                katakana: 'ミュ',
                en: 'myu',
            },
            {
                hiragana: 'みょ',
                katakana: 'ミョ',
                en: 'myo',
            },
        ],
        [{
                hiragana: 'りゃ',
                katakana: 'リャ',
                en: 'rya',
            },
            {
                hiragana: 'りゅ',
                katakana: 'リュ',
                en: 'ryu',
            },
            {
                hiragana: 'りょ',
                katakana: 'リョ',
                en: 'ryo',
            },
        ],
        [{
                hiragana: 'ぎゃ',
                katakana: 'ギャ',
                en: 'gya',
            },
            {
                hiragana: 'ぎゅ',
                katakana: 'ギュ',
                en: 'gyu',
            },
            {
                hiragana: 'ぎょ',
                katakana: 'ギョ',
                en: 'gyo',
            },
        ],
        [{
                hiragana: 'じゃ',
                katakana: 'ジャ',
                en: 'ja',
            },
            {
                hiragana: 'じゅ',
                katakana: 'ジュ',
                en: 'ju',
            },
            {
                hiragana: 'じょ',
                katakana: 'ジョ',
                en: 'jo',
            },
        ],
        [{
                hiragana: 'びゃ',
                katakana: 'ビャ',
                en: 'bya',
            },
            {
                hiragana: 'びゅ',
                katakana: 'ビュ',
                en: 'byu',
            },
            {
                hiragana: 'びょ',
                katakana: 'ビョ',
                en: 'byo',
            },
        ],
        [{
                hiragana: 'ぴゃ',
                katakana: 'ピャ',
                en: 'pya',
            },
            {
                hiragana: 'ぴゅ',
                katakana: 'ピュ',
                en: 'pyu',
            },
            {
                hiragana: 'ぴょ',
                katakana: 'ピョ',
                en: 'pyo',
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
    var currentIndex = 0, temporaryValue, randomIndex;
    array.map(items => {
        currentIndex += items.length;
    });
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
        displayEn: 1,
        finish: false,
        jp: null,
        selected: [-1, -1],
    },
    onLoad: function(options) {
        let items = jp.items;
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items[i].length; j++) {
                items[i][j].index = i;
                items[i][j].subindex = j;
            }
        }
        jp.items = items;
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
            finish: false,
        });
    },
    check(items) {
        let isCorrect = true;
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items[i].length; j++) {
                let {
                    index,
                    subindex
                } = items[i][j];
                if (!(index == i && subindex == j)) {
                    isCorrect = false;
                    break;
                }
            }
            if (!isCorrect) {
                break;
            }
        }
        return isCorrect;
    }
})