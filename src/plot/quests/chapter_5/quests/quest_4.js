export const quest4 =
    {
        title: "Звезда спасения индусов",
        text: `Вы оказались в месте, где кроме индуса и коровы вас окружает ещё и изобилие молока и сыра. На сие чудо начинают сходиться другие индусы. У вашего индуса появляется идея начать продавать сыр местним торгашам, однако для этого его нужно сначала свесить. Множество индусских глаз теперь сфокусировано на вас.`,
        regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
        code: `//Брат!! Мы успешны! ПОмоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напиши функцию milkACow которая принимает корову,
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
    };
