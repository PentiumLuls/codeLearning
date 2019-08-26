export const quest6 =
    {
        title: "Оваримоногатари",
        text: `Отряды сформированы, индусы экипированы, а Карада взволновано поправляет свои волосы. 
        Пришло время финальной битвы. Перед замком стоит его хазяин и улыбается вам.
        Сейчас или никогда, ты не можешь оплошать. Ты должен вернуть всех этих людей в реальный мир!`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `class ToolBox {
    static compose(...fns) {
        return (arg) =>
                fns.reduce((composed, f) => f(composed), arg);
            }
                                
    static Filter(callback) {
        return (mass) => mass.filter(callback);
            }
                                
    static Reduce(callback, ...arg) {
        return (mass) => mass.reduce(callback, ...arg);
            }
                                
    static Map(callback) {
        return (mass) => mass.map(callback);
            }      
}
//выбери все легионы которые находятся в 'Demon's castle'
//возврати массив очков атаки легионов
//найди сумму урона(сложи все  очки атаки)
//вычисли изменения урона(modDamage) принимает обьект data и возвращает измененный урон
//формулы модификации урона
//modNumber = (data.number == 13) ? 0.1 : 0;
//modDay = (data.day == 'Friday') ? 0.13 : 0;
//modShield = (data.shield == true) ? 0.4 : 0;
//формула изменения урона
//damage * (1 - modNumber - modDay - modShield)
//отними урон от здоровья дьявола
//проверь победили ли мы дьявола 
//верни сообщения 'We win!!! если' true или  We lose!!! если false

const legions = 
[{number: 13,size: 4,names: ['Hiran', 'Jayesh', 'Ojas', 'Ranbir'],attack: 300,location:"Demon's castle"},
{number: 26, size: 4, names: ['Arnav', 'Himmat', 'Mitul', 'Pranay'], attack: 366, location:"Demon's castle"},
{number: 6,size: 6,names: ['Ojas', 'Faiyaz', 'Rohan', 'Tushar', 'Aarav', 'Madhup'],attack: 353,location:'Hell lake'}];

const data = {number: 13, day: 'Friday', shield: false};

const devil = {health: 510};

function isCastle(legion) {
    return legion.location == "Demon's castle";
}

function getAttackScope(legion) {
    return legion.attack;
}

function sum(a, b) {
    return a + b;
}

function modDamage(data) {
    //YOUR CODE;
}

function attack(target) {
    //YOUR CODE;
}

function IsWin(health) {
    //YOUR CODE;
}

function answer(bool) {
    //YOUR CODE;
}

const attackDevil = //YOUR CODE;

console.log(attackDevil(legions));`,
        hints: [
            " функция IsWin (здоровье <= 0) ? true : false",
        ],
        test: {
            code: `describe("", function() {

               it("should return result of battle",function() {
                  expect().toEqual();
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `class ToolBox {
    static compose(...fns) {
        return (arg) =>
                fns.reduce((composed, f) => f(composed), arg);
        }
                                            
    static Filter(callback) {
        return (mass) => mass.filter(callback);
        }
                                            
    static Reduce(callback, ...arg) {
        return (mass) => mass.reduce(callback, ...arg);
        }
                                            
    static Map(callback) {
        return (mass) => mass.map(callback);
        }      
}

//выбери все легионы которые находятся  в 'Demon's castle'
//возврати массив очков атаки легионов
//найди сумму урона(сложи все  очки атаки)
//вычисли изменения урона(modDamage) принимает обьект data и возвращает измененный урон
//формулы модификации урона
//modNumber = (data.number == 13) ? 0.1 : 0;
//modDay = (data.day == 'Friday') ? 0.13 : 0;
//modShield = (data.shield == true) ? 0.4 : 0;
//формула изменения урона
//damage * (1 - modNumber - modDay - modShield)
//отними урон от здоровья дьявола
//проверь победили ли мы дьявола (здоровье <= 0) ? true : false
//верни сообщения 'We win!!! если' true или  We lose!!! если false

const legions = 
[{number: 13,size: 4,names: ['Hiran', 'Jayesh', 'Ojas', 'Ranbir'],attack: 300,location:"Demon's castle"},
{number: 26, size: 4, names: ['Arnav', 'Himmat', 'Mitul', 'Pranay'], attack: 366, location:"Demon's castle"},
{number: 6,size: 6,names: ['Ojas', 'Faiyaz', 'Rohan', 'Tushar', 'Aarav', 'Madhup'],attack: 353,location:'Hell lake'
    }];
const data = {number: 13, day: 'Friday', shield: false};
const devil = {health: 510};

function isCastle(legion) {
    return legion.location == "Demon's castle";
}

function getAttackScope(legion) {
    return legion.attack;
}

function sum(a, b) {
    return a + b;
}

function modDamage(data) {
    return (damage) => {
        const modNumber = (data.number == 13) ? 0.1 : 0;
        const modDay = (data.day == 'Friday') ? 0.13 : 0;
        const modShield = (data.shield == true) ? 0.4 : 0;
        return damage * (1 - modNumber - modDay - modShield);
    };
}

function attack(target) {
    return (damage) => {
        return target.health - damage;
    };
}

function IsWin(health) {
    return health <= 0;
}

function answer(bool) {
    return (bool) ? 'We win!!!' : 'We lose!!!';
}

const attackDevil = ToolBox.compose(
    ToolBox.Filter(isCastle),
    ToolBox.Map(getAttackScope),
    ToolBox.Reduce(sum, 0),
    modDamage(data),
    attack(devil),
    IsWin,
    answer
);

terminal.log(attackDevil(legions));`
        }
    };