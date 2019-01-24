export const quests = [
    {
        title: "Война индусов Z",
        quests:
            [
///////////////////////////////////////quest 1////////////////////////////////////////////////////////////
            {
                title: "Чистая функция. Туториал 1",
                text: `В этом задании ты будешь писать функции предикаты. Они принимают какое нибуть значение,
                сравнивают его с каким то условием и возрощают true или false.`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функции isBlack и isSquare, которые принимают прямоугольник
//и возрощают соответствующие данные.
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
                    "Функция должна возрощать True или False"
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
///////////////////////////////////////quest 2////////////////////////////////////////////////////////////
            {
                title: "Неудалимая жажда",
                text: `Ты открываешь глаза и видишь нескольких индусов которые что то обсуждают, они говорят тебе: "Выбирай тех кто изменит этот мир!", и дают карточки нескольки сотен индусов. Ничего не понимая ты начинаеш их сортировать, чуйствуя при этом только непреодалимую жажду мести...`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функцию isUseful,которая определяет пригодность к войне
//P.S. Индус считается пригодным к войне если он мужчина.

const Aadityesh = {
    gender: 'female'
}

function isUseful(indus) {

}
                       `,
                hints: [
                    "Функция должна возрощать True или False"
                ],
                test: {
                    code: `let valid = true;
                    const indus1 = {
                        gender: 'female'
                    }
                    const indus2 = {
                        gender: 'male'
                    }
                    
                    if(isUseful(indus1) !== false){valid = false};
                    if(isUseful(indus2) !== true){valid = false};
                    valid === true`,
                    answer: `function isUseful(indus) {
    return indus.gender == 'male';
}`
                }
            },
///////////////////////////////////////quest 3////////////////////////////////////////////////////////////
            {
                title: "Чистая функция. Туториал 2",
                text: `В этом задании ты будешь писать функцию конвертер. Она принимает какое нибуть значение,
                и возвращает другое значение.`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функцию perimeter, которая принимает прямоугольник и возрощает его периметр.

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
                    "Функция должна возрощать 1 число"
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
///////////////////////////////////////quest 4////////////////////////////////////////////////////////////
            {
                title: "Надевай шмотки, проваливай",
                text: `Мастер поражен твоей способностью создания чистых функций! Теперь он хочет вручить солдатам броню. Ты не понемаеш почему броня сделана из ткани, но ты просто делаеш то, что тебе говорят.`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функцию setArmor,которая принимает карточку индуса
//и возрощает новую карточку с свойством armor: true.

const Aahvan = {
    gender: 'female',
    armor: false
}

function setArmor(indus) {

}
                       `,
                hints: [
                    "Функция должна возрощать новую карточку индуса",
                    "Используй assign чтобы скопировать карточку индуса"
                ],
                test: {
                    code: `let valid = true;
                    const indus1 = {
                        gender: 'female',
                        armor: false
                    }
                    const indus2 = {
                        gender: 'male',
                        armor: false
                    }
                    
                    if(setArmor(indus1)['armor'] !== true){valid = false};
                    if(indus1['armor'] !== false){valid = false};
                    if(setArmor(indus2)['armor'] !== true){valid = false};
                    if(indus2['armor'] !== false){valid = false};
                    valid === true`,
                    answer: `function setArmor(indus) {
    const newindus = Object.assign({}, indus);
    newindus.armor = true;
    return newindus;
}`
                }
            },
///////////////////////////////////////quest 5////////////////////////////////////////////////////////////
            {
                title: "Говорят, даже палка стреляет раз в год",
                text: `Все радуются твоему таланту но один из индусов говорит что броня это хорошо, но чем они драться будут? Тут ты понимаешь что все проблемы теперь будеш решать ты...`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функцию setStick,которая принимает карточку индуса
//и возрощает новую карточку с свойством weapon: ['stick'].
//И учти что у индуса может уже быть несколько оружий
//P.S. Продумай что бы если у индуса уже есть палка то функция ничего не возращала.

const Aadved = {
    gender: 'female',
    armor: true,
    weapon: []
}

function setStick(indus) {

}
                       `,
                hints: [
                    "Функция должна возрощать новую карточку индуса",
                    "Используй indexOf что бы проверить есть ли у индуса палка"
                ],
                test: {
                    code: `let valid = true;
                    const indus1 = {
                        gender: 'female',
                        weapon: []
                    }
                    const indus2 = {
                        gender: 'male',
                        weapon: ['sword','stick']
                    }
                    
                    if(setStick(indus1)['weapon'][0] !== 'stick'){valid = false};
                    if(indus1['weapon'].length !== 0){valid = false};
                    if(setStick(indus2) !== undefined){valid = false};
                    valid === true`,
                    answer: ``
                }
            },
///////////////////////////////////////quest 6////////////////////////////////////////////////////////////
            {
                title: "Чистая функция. Туториал 3",
                text: `В этом задании ты будешь писать функцию аккумулятор. Она принимает 2 значения,
                и возвращает 1 значение. Позже эта функция будет использоваться
                в reduce.`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функцию add, которая принимает 2 числа и возрощает их суму.

const number1 = 5;
const number2 = 10

function add(number1, number2) {

}
                       `,
                hints: [
                    "Функция должна возрощать 1 число"
                ],
                test: {
                    code: `let valid = true;
                             if(add(23, 76) !== 99){valid = false};
                            valid === true`,
                    answer: ``
                }
            },
///////////////////////////////////////quest 7////////////////////////////////////////////////////////////
            {
                title: "Отряд индусов быстрого функционирования",
                text: `Дела идут хорошо, тебе приносят стакан молока и просят объединить индусов в отряды, для лучшей продуктивности. Ты молча киваеш. Но тебя не покидает одна мысль, что ты вообще здесь делаеш и почему молоко красное...`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напишы функцию createGang,которая принимает 2 карточки индусов
//и возрощает карточку отряда такого типа: 
{members: [indus1.name, indus2.name], armors: [true, true], weapons: ['stick', 'stick']}.
//P.S. Продумай что бы если у 1 из индусов нету оружия то функция ничего не возращала.
//ОЧЕНЬ ВАЖНО!!! Порядок создания свойст обьекта должен быть такой как в примере выше.

const Aadhi = {
    name: 'Aadhi',
    gender: 'male',
    armor: true,
    weapon: ['sword', 'stick']
}

const Aadhunik = {
    name: 'Aadhunik',
    gender: 'male',
    armor: true,
    weapon: ['stick']
}

function createGang(indus1, indus2) {

}
                       `,
                hints: [
                    "Функция должна возрощать новую карточку индуса",
                    "Используй spread оператор для создания масива оружий"
                ],
                test: {
                    code: `let valid = true;
                    const indus1 = {
                        name: 'indus1',
                        gender: 'male',
                        armor: true,
                        weapon: []
                    }
                    const indus2 = {
                        name: 'indus2',
                        gender: 'male',
                        armor: true,
                        weapon: ['sword', 'stick']
                    }
                    const indus3 = {
                        name: 'indus3',
                        gender: 'male',
                        armor: true,
                        weapon: ['stick']
                    }
                    
                        if(JSON.stringify(createGang(indus2, indus3)) !== JSON.stringify({members: ['indus2', 'indus3'], armors: [true, true], weapons: ['sword' ,'stick', 'stick']})){valid = false};
                        if(JSON.stringify(createGang(indus1, indus2)) !== undefined){valid = false};
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
                title: "Корова функционист",
                text: `АД, 2019 год н.э., вечер. Вы оказались в месте, отдалённо напоминающий приватный дом в Соловках. Перед вашим взором предстали   разрушенное имущество, злая корова и грустный индус.

                Индус просит вас подоить корову. Корова категорически против декларативной подойки. Вы решаете подоить её функциональным путём.`,
                regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g,  /(filter)/g,],
                code: `//Здраствуй Брат! Клята корова хочет функциональную подойку, помоги братику индусу.
//Напишы функцию milkACow  которая принимает корову и возрощает подоеную корову.

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
                    "Попробуй как то скопировать обект коровы"
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
                code: `//Брат, да ты крутой, как ты воще умудрился попасть в функциональный ад?
//Мне пришо много заказов на молоко, напишы шункцию milkACow которая будет доить корову
//на определенное количество молока, и возрощать корову когда у нее закончиться молоко. Придержывайся 2 заповеде,
//я её толком не знаю но попробуй использувать высшую шункцию и первокласную.
                
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
                code: `//Мои братья индусы хотят сырууу. Помоги нам сделать сыр,
//а я пойду його продавать на базар. Напишы шункцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни масив сыров.
//Попробуй здалать её такой же крутой как о прошлую .
//формула сыру: milk / 2.     

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
                code: `//Брат!! Мы успешны! ПОмоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напишы функцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни массу всего сыра который получился.
//Но брат, избалованая корова хочет что бы ти использовал стрелочные функции, я думаю это 4 заповедь.

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
                code: `//Брат!! Мы успешны! ПОмоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напишы функцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни массу всего сыра который получился.
//Но брат, избалованая корова хочет что бы ти использовал стрелочные функции, я думаю это 4 заповедь.
                
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
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
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
    }
    
]