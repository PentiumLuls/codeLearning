export const quest2 =
    {
        title: "Множественная дойка",
        text: `Вы довольны, корова подоена, но индус всё ещё грустный. Оказывается, одиночной функции подойки коровы ему недостаточно, так как тот желает поделиться молоком с другими индусами. К сожалению, корова  может выдержать только ограниченное количество подоёк. Тем не менее, индус настаивает на возможности множественной подойки.`,
        regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
        code: `//Брат, да ты крутой, как ты вообще умудрился попасть в функциональный ад?
//Мне пришло много заказов на молоко. Напиши шункцию milkACow, которая будет доить корову
//на определенное количество молока и возвращать корову, когда у нее закончится молоко. Придерживайся  второй заповеди,
//я её толком не знаю, но попробуй использовать высшую и первоклассную функции.
                
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
            answer: `
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
    };
