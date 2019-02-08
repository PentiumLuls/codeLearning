export const quest5 =
{
    title: "5",
    text: `Нужно грамотно сформировать отряды, чтобы избежать суматохи в самый важный момент. 
        Также тебе нужно узнать, какой силой обладают твои воины, и хватит ли её на то, чтобы победить Мефисто и вернуться в реальный мир. Самое сложное начинается сейчас. Впереди тебя ожидает долгая ночь.`,
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

//Выбери всех индусов моложе 30 лет
//Вычисли их combatRaiting
//Выбери индусов с combatRaiting больше 510
//создай легион индусов с полями number:,size:,names:, и  с вспомогательним полем  sumCombatRaiting:
//Вспомогательное поле sumCombatRaiting = сумме рейтингов всех индусов в легионе
//Найди averageRaiting: и удали вспомогательное поле sumCombatRaiting
//Верни легион индусов с полями number,size,names,averageRaiting
        
const persons = [{name: 'Akarsh', age: 60, health: 400, attack: 40},
{name: 'Chirag', age: 23, health: 420, attack: 20},
{name: 'Reyansh', age: 25, health: 400, attack: 45},
{name: 'Shaan', age: 28, health: 350, attack: 60},
{name: 'Anzu', age: 45, health: 400, attack: 30}];
        
function IsAgeLess30(hindu) {
    return hindu.age < 30;
}
        
function combatRaiting(hindu) {
    const newHindu = {...hindu,
            combatRaiting: hindu.health * 1.2 + hindu.attack * 1.5
          };
    return newHindu;        
}
        
function raitingMore510(hindu) {
    return 510 < hindu.combatRaiting;
}
        
function createLegion(obj, hindu) {
    //YOUR CODE;
}
        
function averageRaiting(gang) {
    //YOUR CODE;
}
        
const createNewLegion =  //YOUR CODE;
terminal.log(createNewLegion(persons))`,
    hints: [
        "функция createLegion копирует обьект легион и добавляет в поле names имя индуса ,увеличивает численность  на 1 , добавляет CombatRaiting индуса к полю sumCombatRaiting легиона и возвращает новый легион",
        "функция averageRaiting(gang) createLegion копирует обьект легион добавляет  и вычисляет поле averageRaiting(средние значение CombatRaiting)  удаляет sumCombatRaiting возвращает новый легион"
    ],
    test: {
        code: `describe("", function() {

               it("should ",function() {
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

//Выбери всех индусов моложе 30 лет
//Вычисли их combatRaiting
//Выбери индусов с combatRaiting больше 510
//создай легион индусов с полями number:,size:,names:, и  с вспомогательним полем  sumCombatRaiting:
//Вспомогательное поле sumCombatRaiting = сумме рейтингов всех индусов в легионе
//Найди averageRaiting: и удали вспомогательное поле sumCombatRaiting
//Верни легион индусов с полями number,size,names,averageRaiting
                
const persons = [{name: 'Akarsh', age: 60, health: 400, attack: 40},
{name: 'Chirag', age: 23, health: 420, attack: 20},
{name: 'Reyansh', age: 25, health: 400, attack: 45},
{name: 'Shaan', age: 28, health: 350, attack: 60},
{name: 'Anzu', age: 45, health: 400, attack: 30}];
                
function IsAgeLess30(hindu) {
    return hindu.age < 30;
}
                
function combatRaiting(hindu) {
    const newHindu = {...hindu,
                    combatRaiting: hindu.health * 1.2 + hindu.attack * 1.5
            };
    return newHindu;        
}
                
function raitingMore510(hindu) {
    return 510 < hindu.combatRaiting;
}
                
function createLegion(obj, hindu) {
    const newobj = {...obj,
                    size: obj.size + 1,
                    sumCombatRaiting: obj.sumCombatRaiting + hindu.combatRaiting,
                };
    newobj.names.push(hindu.name)
    return newobj;
}
                
function averageRaiting(gang) {
    const newGang = {...gang,
                    averageRaiting: gang.sumCombatRaiting / gang.size
                    };
    delete newGang.sumCombatRaiting;
    return newGang;
}
                
const createNewLegion = ToolBox.compose(ToolBox.Filter(IsAgeLess30),
                               ToolBox.Map(combatRaiting),
                               ToolBox.Filter(raitingMore510),
                               ToolBox.Reduce(createLegion, {number: 6, size: 0, names: [], sumCombatRaiting: 0}),
                               averageRaiting)
                              
terminal.log(createNewLegion(persons))`
    }
};