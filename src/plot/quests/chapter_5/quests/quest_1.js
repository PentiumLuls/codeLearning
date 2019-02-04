export const quest1 =
    {
        title: "Корова-функционист",
        text: `АД, 2019 год н.э., вечер. Вы оказались в месте, отдалённо напоминающий приватный дом в Соловках. Перед вашим взором предстали   разрушенное имущество, злая корова и грустный индус.

                Индус просит вас подоить корову. Корова категорически против объектно-ориентированной подойки. Вы решаете подоить её функциональным путём.`,
        regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
        code: `//Здравствуй, брат! Клята корова хочет функциональную подойку, помоги братику индусу.
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
    };
