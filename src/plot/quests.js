export const quests = [
    {
        title: "1 глава",
        quests:
            [
                {
                    title: "Квест 1",
                    text: `Описание к квесту 1`,
                    regexps: [],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                    code: `//Напиши функции isBlack и isSquare, которые принимают прямоугольник
//и возвращают соответствующие данные.
//P.S. Все цвета будут написаны в lowercase.

const rectangle = {
    color: 'red',
    side1: 5,
    side2: 5,
    side3: 5,
    side4: 5,
}

function isBlack(rectangle) {

}

function isSquare(rectangle) {

}
                       `,
                    hints: [
                        "1Функция должна возвращать True или False",2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
                    ],
                    test: {
                        code: `let valid = true;
                    const rectangle2 = {
                        color: 'black',
                        side1: 4,
    side2: 1,
    side3: 2,
    side4: 5,
                    }
                             if(isBlack(rectangle2) !== true){valid = false};
                             if(isSquare(rectangle2) !== false){valid = false};
                            valid === true`,
                        answer: `function isBlack(rectangle) {
    return rectangle.color == 'black'
}

function isSquare(rectangle) {
    return rectangle.side1 == rectangle.side2 
        && rectangle.side1 == rectangle.side3 
        && rectangle.side1 == rectangle.side4;
}`
                    }
                },
                {
                    title: "Квест 2",
                    text: `Описание к квесту 2`,
                    regexps: [],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                    code: `//Напиши функцию perimeter, которая принимает прямоугольник и возвращает его периметр.

const rectangle = {
    color: 'red',
    side1: 5,
    side2: 5,
    side3: 5,
    side4: 5
}

function perimeter(rectangle) {

}

                       `,
                    hints: [
                        "Функция должна возвращать 1 число"
                    ],
                    test: {
                        code: `let valid = true;
                    const rectangle2 = {
                        color: 'black',
                        side1: 3,
                        side2: 5,
                        side3: 7,
                        side4: 9
                    }
                             if(perimeter(rectangle2) !== 24){valid = false};
                            valid === true`,
                        answer: `function perimeter(rectangle) {
    return rectangle.side1 + rectangle.side2 + rectangle.side3 + rectangle.side4;
}`
                    }
                },
                {
                    title: "Квест 3",
                    text: `Описание к квесту 3`,
                    regexps: [],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                    code: `//Напиши функцию add, которая принимает 2 числа и возвращает их сумму.

const number1 = 5;
const number2 = 10

function add(number1, number2) {

}
                       `,
                    hints: [
                        "Функция должна возвращать 1 число"
                    ],
                    test: {
                        code: `let valid = true;
                             if(add(23, 76) !== 99){valid = false};
                            valid === true`,
                        answer: ``
                    }
                }
            ]
    },
///////////////////////////////////////глава2////////////////////////////////////////////////////////////
///////////////////////////////////////глава2////////////////////////////////////////////////////////////
///////////////////////////////////////глава2////////////////////////////////////////////////////////////
    {
        title: "Кайся глупец",
        quests:
            [
                {
                    title: "Корова-функционист",
                    text: `АД, 2019 год н.э., вечер. Вы оказались в месте, отдалённо напоминающий приватный дом в Соловках. Перед вашим взором предстали   разрушенное имущество, злая корова и грустный индус.

                Индус просит вас подоить корову. Корова категорически против декларативной подойки. Вы решаете подоить её функциональным путём.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                    code: `//Здравствуй, Брат! Клята корова хочет функциональную подойку, помоги братику индусу.
//Напиши функцию milkACow, которая принимает корову и возвращает подоенную корову.

var cow = {
    milk: 10
}

function milkACow(cow) {
    cow.milk = 0
    return cow
}
                       `,
                    hints: [
                        "Функция не должна изменять внешние переменные",
                        "Попробуй как-то скопировать объект коровы"
                    ],
                    test: {
                        code: `let valid = true;
                             if(JSON.stringify(milkACow(cow)) !== JSON.stringify({milk: 0})){valid = false};
                             if(cow.milk !== 10){valid = false};
                             if(JSON.stringify(milkACow({milk: 33})) !== JSON.stringify({milk: 0})){valid = false};
                            valid === true`,
                        answer: `
function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    newcow.milk = 0;
    return newcow;
}
`
                    }
                },
                {
                    title: "Множественная дойка",
                    text: `Вы довольны, корова подоена, но индус всё ещё грустный. Оказывается, одиночной функции подойки коровы ему недостаточно, так как тот желает поделиться молоком с другими индусами. К сожалению, корова  может выдержать только ограниченное количество подоёк. Тем не менее, индус настаивает на возможности множественной подойки.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                    code: `//Брат, да ты крутой, как ты вообще умудрился попасть в функциональный ад?
//Мне пришло много заказов на молоко, напиши функцию milkACow, которая будет доить корову
//на определенное количество молока и возвращать корову, когда у нее закончиться молоко. Придерживайся 2 заповеди,
//я её толком не знаю, но попробуй использувать высшую и первоклассную функцию.
                
var cow = {
    milk: 10
}
                
function milkACow(cow, mass) {
    cow.milk -= mass
    if (cow.milk <= 0) {
        return cow
    }
}`,
                    test: {
                        code: `let valid = true;
                            let cow2 = {milk: 10}
                                let myCow = milkACow(cow2)
                                if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                                if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                                if(JSON.stringify(myCow(4)) !== JSON.stringify({milk: 0})){valid = false};
                                if(cow2.milk !== 10){valid = false};
                            valid === true`,
                        answer:`
function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    return function(int) {
        if (int >= newcow.milk) {
            newcow.milk = 0
            return newcow;
        }
    newcow.milk -= int   
    }
}`
                    }
                },
                {
                    title: "Адская экосистема",
                    text: `Корова восхищена вашими навыками функционального программирования, а индус и не думает вас отпускать. Оказывается, функции множественной подойки ему тоже недостаточно, ведь у всего индусского поселения закончились запасы сыра. Корова устало вздыхает. Вы молча задаётесь вопросом, откуда здесь вообще индус и корова, и почему она даёт красное молоко.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                    code: `//Мои братья-индусы хотят сырууу. Помоги нам сделать сыр,
//а я пойду его продавать на базар. Напиши функцию milkACow которая принимает корову и
//доит её по заказу клиентов, а когда молоко закончится, верни массив сыров.
//Попробуй сделать её такой же крутой, как и прошлую.
//Формула сыра: milk / 2.     

var cow = {
    milk: 10
}

let cheeses = []

function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses.push(maas / 2)
    if (cow.milk <= 0) {
        return cheeses
    }
}
`,
                    test: {
                        code: `let valid = true;
                    let cow2 = {milk: 10}
                        let myCow = milkACow(cow2)
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify([2, 2, 1])){valid = false};
                        if(cow2.milk !== 10){valid = false};
                    valid === true`,
                        answer: `function milkACow(cow) {
                        let newcow = Object.assign({}, cow);
                        let cheeses = []
                        return function(int) {
                            if (int >= newcow.milk) {
                                cheeses.push(newcow.milk / 2)
                                newcow.milk = 0
                                return cheeses;
                            }
                        newcow.milk -= int
                        cheeses.push(int / 2)   
                        }
                    }
                    `
                    }
                },
                {
                    title: "Звезда спасения индусов",
                    text: `Вы оказались в месте, где кроме индуса и коровы вас окружает ещё и изобилие молока и сыра. На сие чудо начинают сходиться другие индусы. У вашего индуса появляется идея начать продавать сыр местним торгашам, однако для этого его нужно сначала свесить. Множество индусских глаз теперь сфокусировано на вас.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                    code: `//Брат!! Мы успешны! Помоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напиши функцию milkACow, которая принимает корову,
//доит её по заказу клиентов, а когда молоко закончится, верни массу всего получившегося сыра.
//Но брат, избалованная корова хочет, что бы ты использовал стрелочные функции. Я думаю, что это 4 заповедь.

var cow = {
    milk: 10
}

let MassOfCheeses = []

function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses += mass / 2
    if (cow.milk <= 0) {
        return cheeses
    }
}
                `,
                    hints: [
                        "hint sample",
                        "hint sample2"
                    ],
                    test: {
                        code: `let valid = true;
                    let cow2 = {milk: 10}
                        let myCow = milkACow(cow2)
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(5)){valid = false};
                        if(cow2.milk !== 10){valid = false};
                    valid === true`,
                        answer: ``
                    }
                },
                {
                    title: "Легенда о великом ублажателе коров",
                    text: `Вы и ваш индусский друг смогли наладить производство сыра, после чего стали самыми успешными предприятелями в индусской деревне в Аду. Кажется, вами восхищается даже Мефистофель. На вырученные деньги вы решаете приобрести ещё несколько коров. Теперь вам каким-то образом нужно вести учёт полученного молока и сыра. Вся робота опять легла на вас. Корова понимающе вздыхает.`,
                    regexps: [/(return)/g, /(reduce)/g],
                    code: `//Брат!! Мы успешны! Помоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напиши функцию milkACow, которая принимает корову,
//доит её по заказу клиентов, а когда молоко закончится, верни массу всего получившегося сыра.
//Но брат, избалованная корова хочет, что бы ты использовал стрелочные функции. Я думаю, что это 4 заповедь.
                
var cow = {
    milk: 10
}
                
let MassOfCheeses = []
                
function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses += mass / 2
    if (cow.milk <= 0) {
        return cheeses
    }
}`,
                    hints: [
                        "hint sample",
                        "hint sample2"
                    ],
                    test: {
                        code: "sumRange(1, 10, 0)",
                        answer: `function sumRange(start, end, acc) {
                        if (start > end)
                            return acc;
                        return sumRange(start + 1, end, acc + start)
                    }`
                    }
                },
                {
                    title: "Начало легенды",
                    text: `Производство процветает, вырученные деньги вы решили вложить в развитие деревни, после чего она смогла гордо называться посёлком городского типа. Вас выбирают главой, однако у вашего индусского брата опять возникла проблема. Ему нужно посчитать общую массу сыра, который дают коровы, дающие больше чем 5 килограммов сыра. Вы в замешательстве, но ваш брат и не думает посвящать вас в детали. Вместо этого он даёт вам какие-то таинственные вещички, намекая, что используя их вы сможете решить эту задачу быстрее и эффективнее. Вы решаетесь использовать эти вещички.`,
                    regexps: [/(return)/g, /(reduce)/g],
                    code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                        "//mass of stones. I must to get to number of integer and returne summкаво.\n" +
                        "//boss say thet i must read first lav\n" +
                        "let stonesMass = [1, 3, 5]\n" +
                        "\n" +
                        "function calculateSumm(stones) {\n" +
                        "    //???\n" +
                        "}",
                    hints: [
                        "hint sample",
                        "hint sample2"
                    ],
                    test: {
                        code: "calculateSumm(stonesMass)",
                        answer: "stonesMass.reduce((a,b) => {return a+b})"
                    }
                },
            ]
    },
    {
        title: "3 глава",
        quests:
            [
                {
                    title: "квест 1 с2",
                    text: "задание на квест 1 с2",
                    regexps: "",
                    code: "",
                    test: ""
                },
                {
                    title: "квест 2 с2",
                    text: "задание на квест 2 с2",
                    regexps: "",
                    code: "",
                    test: ""
                },
                {
                    title: "квест 3 с2",
                    text: "задание на квест 3 с2",
                    regexps: "",
                    code: "",
                    test: ""
                }
            ]
    }
]
