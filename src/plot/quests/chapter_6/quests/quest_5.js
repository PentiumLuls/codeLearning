export const quest5 =
{
    title: "5",
    text: `Нужно грамотно сформировать отряды, чтобы избежать суматохи в самый важный момент. 
        Также тебе нужно узнать, какой силой обладают твои воины, и хватит ли её на то, чтобы победить Мефисто и вернуться в реальный мир. Самое сложное начинается сейчас. Впереди тебя ожидает долгая ночь.`,
    regexps: [],
    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let )/g],
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

//Выбери всех индусов моложе 30 лет, посчитай их combatRaiting,
//Выбери индусов с combatRaiting больше 510 и создай легион индусов
//Верни легион индусов с полями number,size,names,averageRaiting
        
const persons = [
    {name: 'Akarsh', age: 60, health: 400, attack: 40},
    {name: 'Chirag', age: 23, health: 420, attack: 20},
    {name: 'Reyansh', age: 25, health: 400, attack: 45},
    {name: 'Reyansh', age: 19, health: 302, attack: 21}
];

function IsAgeLess30(hindu) {
    return hindu.age < 30;
}

function combatRaiting(hindu) {
    const newHindu = {...hindu,combatRaiting: hindu.health * 1.2
       + hindu.attack * 1.5};
    return newHindu;        
}

function raitingMore510(hindu) {
    return 510 < hindu.combatRaiting;
}

function createLegion(obj, hindu) {
    //Should return legion with fields: size and sumCombatRaiting:
    //sumCombatRaiting = total raiting of all members 
    //Where you should create new legion based on obj
}

function averageRaiting(legion) {
    //Should return legion with new field: 'averageRaiting' of members
    //And 'sumCombatRaiting' should be deleted
}

const createNewLegion = //YOUR CODE
terminal.log(createNewLegion(persons));`,
    hints: [
        "функция createLegion копирует обьект легион и добавляет в поле names имя индуса ,увеличивает численность  на 1 , добавляет CombatRaiting индуса к полю sumCombatRaiting легиона и возвращает новый легион",
        "функция averageRaiting(gang) createLegion копирует обьект легион добавляет  и вычисляет поле averageRaiting(средние значение CombatRaiting)  удаляет sumCombatRaiting возвращает новый легион"
    ],
    test: {
        code: `const createNewLegionTEST = ToolBox.compose(ToolBox.Filter(IsAgeLess30),
                    ToolBox.Map(combatRaiting),
                    ToolBox.Filter(raitingMore510),
                    ToolBox.Reduce(createLegion, {number: 6, size: 0, names: [], sumCombatRaiting: 0}),
                    averageRaiting);
        
        describe("5", function() {
               it("'createNewLegion' should return legion with said fields",function() {
                  expect(createNewLegion(persons).number).toEqual(createNewLegionTEST(persons).number);
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

//Выбери всех индусов моложе 30 лет, посчитай их combatRaiting,
//Выбери индусов с combatRaiting больше 510 и создай легион индусов
//Верни легион индусов с полями number,size,names,averageRaiting
        
const persons = [
    {name: 'Akarsh', age: 60, health: 400, attack: 40},
    {name: 'Chirag', age: 23, health: 420, attack: 20},
    {name: 'Reyansh', age: 25, health: 400, attack: 45},
    {name: 'Reyansh', age: 19, health: 302, attack: 21}
];

function IsAgeLess30(hindu) {
    return hindu.age < 30;
}

function combatRaiting(hindu) {
    const newHindu = {...hindu,combatRaiting: hindu.health * 1.2
       + hindu.attack * 1.5};
    return newHindu;        
}

function raitingMore510(hindu) {
    return 510 < hindu.combatRaiting;
}

function createLegion(obj, hindu) {
    const newobj = {
        ...obj,
        size: obj.size + 1,
        sumCombatRaiting: obj.sumCombatRaiting + hindu.combatRaiting
    };
    newobj.names.push(hindu.name);
    return newobj;
}

function averageRaiting(legion) {
    const newLegion = {
        ...legion,
        averageRaiting: legion.sumCombatRaiting / legion.size
    };
    delete newLegion.sumCombatRaiting;
    return newLegion;
}

const createNewLegion = ToolBox.compose(ToolBox.Filter(IsAgeLess30),
        ToolBox.Map(combatRaiting),
        ToolBox.Filter(raitingMore510),
        ToolBox.Reduce(createLegion, {number: 6, size: 0, names: [], sumCombatRaiting: 0}),
        averageRaiting);
terminal.log(createNewLegion(persons));`
    }
};