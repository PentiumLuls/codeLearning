export const quest3 =
    {
        title: "Адская экосистема",
        text: `Корова восхищена вашими навыками функционального программирования, а индус и не думает вас отпускать. Оказывается, функции множественной подойки ему тоже недостаточно, ведь у всего индусского поселения закончились запасы сыра. Корова устало вздыхает. Вы молча задаётесь вопросом, откуда здесь вообще индус и корова, и почему она даёт красное молоко.`,
        regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
        code: `//Мои братья индусы хотят сырууу. Помоги нам сделать сыр,
//а я пойду його продавать на базар. Напиши шункцию milkACow которая принимает корову,
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
    };
