export const quests = [
    {
        title: "Кайся глупец",
        quests: 
        [
            {
                title: "Индусская катастрофа",
                text: `Всего 30 лет назад преисподняя пустовала... И тогда появился он...
                ПЕРВЫЙ ИНДУС. Зразу же после него в ад начали прибывать тысячи индусов,
                их код был просто ужесен но и стоял дешево. И тогда большые компании поняли,
                что вместо 1 программиста с Европи, они могут нанять 20 индусов...
                Вот код одного из них... какой же он ужасный(. Помоги глупцу з его задачей!`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
            {
                title: "Индусская катастрофа",
                text: `Всего 30 лет назад преисподняя пустовала... И тогда появился он...
                ПЕРВЫЙ ИНДУС. Зразу же после него в ад начали прибывать тысячи индусов,
                их код был просто ужесен но и стоял дешево. И тогда большые компании поняли,
                что вместо 1 программиста с Европи, они могут нанять 20 индусов...
                Вот код одного из них... какой же он ужасный(. Помоги глупцу з его задачей!`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
            {
                title: "Индусская катастрофа",
                text: `Всего 30 лет назад преисподняя пустовала... И тогда появился он...
                ПЕРВЫЙ ИНДУС. Зразу же после него в ад начали прибывать тысячи индусов,
                их код был просто ужесен но и стоял дешево. И тогда большые компании поняли,
                что вместо 1 программиста с Европи, они могут нанять 20 индусов...
                Вот код одного из них... какой же он ужасный(. Помоги глупцу з его задачей!`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
            {
                title: "Индусская катастрофа",
                text: `Всего 30 лет назад преисподняя пустовала... И тогда появился он...
                ПЕРВЫЙ ИНДУС. Зразу же после него в ад начали прибывать тысячи индусов,
                их код был просто ужесен но и стоял дешево. И тогда большые компании поняли,
                что вместо 1 программиста с Европи, они могут нанять 20 индусов...
                Вот код одного из них... какой же он ужасный(. Помоги глупцу з его задачей!`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
            {
                title: "задание 5",
                text: `Всего 30 лет назад преисподняя пустовала... И тогда появился он...
                ПЕРВЫЙ ИНДУС. Зразу же после него в ад начали прибывать тысячи индусов,
                их код был просто ужесен но и стоял дешево. И тогда большые компании поняли,
                что вместо 1 программиста с Европи, они могут нанять 20 индусов...
                Вот код одного из них... какой же он ужасный(. Помоги глупцу з его задачей!`,
                regexps: [/(return)/g, /(reduce)/g],
                code: `//Brat.. hey... my boss told me create a function sumRange
                    var acc = 0;
                    for (var i = 1; i <= 10; ++i)
                        acc += i;
                    console.log(acc);`,
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
                title: "Индусская катастрофа",
                text: `Всего 30 лет назад преисподняя пустовала... И тогда появился он...
                ПЕРВЫЙ ИНДУС. Зразу же после него в ад начали прибывать тысячи индусов,
                их код был просто ужесен но и стоял дешево. И тогда большые компании поняли,
                что вместо 1 программиста с Европи, они могут нанять 20 индусов...
                Вот код одного из них... какой же он ужасный(. Помоги глупцу з его задачей!`,
                regexps: [/(return)/g, /(reduce)/g],
                code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                    "//mass of stones. I must to get to number of integer and returne summ.\n" +
                    "//boss say thet i must read first lav\n" +
                    "let stonesMass = [1, 3, 5]\n" +
                    "\n" +
                    "function calculateSumm(stones) {\n" +
                    "    //???\n" +
                    "}",
                test: {
                    code: "calculateSumm(stonesMass)",
                    answer: "stonesMass.reduce((a,b) => {return a+b})"
                }
            },
        ]
    },
    {
        title: "2 глава",
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