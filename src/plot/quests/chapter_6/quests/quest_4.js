export const quest4 =
    {
        title: "Оружые, способное убить бога",
        text: `Кузнецы наконец-то выковали высококачественное оружие и тебе нужно заменить старье, 
имеющееся у индусов, на новую экипировку.
Ты со всех сил пытаешься повысить свои шансы.`,
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

//Выбери только солдат из 26 легиона
//Сними с них все оружие
//Экипируй их оружием из weapons2
//Возврати массив экипированных солдат

const persons = [
    {legion: 26,weapons: ['stick', 'bow']},
    {legion: 1, weapons: ['sword', 'bow']},
    {legion: 26,weapons: ['stick',]},
    {legion: 1, weapons: ['spear']}
];

const weapons1 = ['sword', 'spear'];

function isLegion(legionNum) {
    return (hindu) => {
        return hindu.legion == legionNum;
    };
}

function equipWeapons(newWeapons) {
    //YOUR CODE
}

function disEquipWeapons(hindu) {
    //YOUR CODE
}

const equipWeaponLeg26 = equipWeapons(weapons1);
const isLegion26 = isLegion(26);

const createLegion26 = //YOUR CODE
terminal.log(createLegion26(persons));`,
        hints: [
            "функция disEquipWeapons возвращает нового индуса с пустым массивом оружия",
            "функция equipWeapons принимает через карьирование сначала массив оружия потом индуса.Создает нового ииндуса и добавляет в его поле weapons аргумент newWeapons с помощью concat"
        ],
        test: {
            code: `const createLegion26TEST = ToolBox.compose(
            ToolBox.Filter(isLegion26),
            ToolBox.Map(disEquipWeapons),
            ToolBox.Map(equipWeaponLeg26));
            
            describe("4", function() {

               it("Method 'createLegion26' should return only members of 26 legion equiped in 'weapons1'",function() {
                  expect(createLegion26(persons)).toEqual(createLegion26TEST(persons));
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

//Выбери только солдат из 26 легиона
//Сними с них все оружие
//Экипируй их оружием из weapons2
//Возврати массив экипированных солдат

const persons = [
    {legion: 26,weapons: ['stick', 'bow']},
    {legion: 1, weapons: ['sword', 'bow']},
    {legion: 26,weapons: ['stick']},
    {legion: 1, weapons: ['spear']}
];

const weapons1 = ['sword', 'spear'];

function isLegion(legionNum) {
    return (hindu) => {
        return hindu.legion == legionNum;
    };
}

function equipWeapons(newWeapons) {
    return (hindu) => {
        const newHindu = {...hindu};
        newHindu.weapons = newHindu.weapons.concat(newWeapons);
        return newHindu;
    }
}

function disEquipWeapons(hindu) {
    newHindu = {...hindu};
    newHindu.weapons = [];
    return newHindu;
}

const equipWeaponLeg26 = equipWeapons(weapons1);
const isLegion26 = isLegion(26);

const createLegion26 = ToolBox.compose(
            ToolBox.Filter(isLegion26),
            ToolBox.Map(disEquipWeapons),
            ToolBox.Map(equipWeaponLeg26));
terminal.log(createLegion26(persons));`
        }
    };