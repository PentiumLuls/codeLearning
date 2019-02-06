export const quest7 =
    {
        title: "Индусская смесь",
        text: `Тебе нужно эффективно оружать и разоружать твоих солдат, так как количество бунтов только увеличилось. Однако большая часть населения всё ещё тебя поддерживает, хоть это количество и уменьшается каждый день.`,
        regexps: [],
        regexpsNone: [/(for )/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Функция "disEquipWeapons" должна разоружать индусов указазанным оружием,
//А "equipWeapons" - наоборот.

const persons1 = [{weapons:['sword','stick','bow']},{weapons:['sword','bow']}];
const persons2 = [{weapons:['bow']},{weapons:['bow']}];
const weapons1 =['sword','stick'];
const weapons2 =['sword','spear'];

function partial(func) {
    return (...args) => {
        return (..._arg) => {
            return func(...args)(..._arg);
        };
    };
}

function disEquipWeapons(weapons) {
    return (hindus) => {
       //YOUR CODE
    };
}

function equipWeapons(weapons) {
    return (hindus) => {
        //YOUR CODE
    };
}

terminal.log(partial(disEquipWeapons)(weapons1)(persons1));
terminal.log(partial(equipWeapons)(weapons2)(persons2));`,
        hints: [
            "Try using 'weapons.forEach' inside 'map' function"
        ],
        test: {
            code: `function partialTEST(func) {
    return (...args) => {
        return (..._arg) => {
            return func(...args)(..._arg);
        };
    };
}

function disEquipWeaponsTEST(weapons) {
    return (hindus) => {
        const newHindus = [...hindus];
        return newHindus.map((hindu) => {
            weapons.forEach((weapon) => {
                const find = hindu.weapons.indexOf(weapon);
                if (find !== -1)
                    hindu.weapons.splice(find, 1);
            });
            return hindu;
        });
    };
}

function equipWeaponsTEST(weapons) {
    return (hindus) => {
        const newHindus = [...hindus];
        return newHindus.map((hindu) => {
            hindu.weapons = hindu.weapons.concat(weapons);
            return hindu;
        });
    };
}
            
            describe("7", function() {

               it("Function 'disEquipWeapons' should return new persons without 'weapons' given from carrying",function() {
                  expect(partial(disEquipWeapons)(weapons1)(persons1)).toEqual(partialTEST(disEquipWeaponsTEST)(weapons1)(persons1));
               });
               it("Function 'equipWeapons' should return new persons with 'weapons' given from carrying",function() {
                  expect(partial(equipWeapons)(weapons2)(persons2)).toEqual(partialTEST(equipWeaponsTEST)(weapons2)(persons2));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Функция "disEquipWeapons" должна разоружать индусов указазанным оружием,
//А "equipWeapons" - наоборот.

const persons1 = [{weapons: ['sword', 'stick', 'bow']}, {weapons: ['sword', 'bow']}];
const persons2 = [{weapons: ['bow']}, {weapons: ['bow']}];
const weapons1 = ['sword', 'stick'];
const weapons2 = ['sword', 'spear'];

function partial(func) {
    return (...args) => {
        return (..._arg) => {
            return func(...args)(..._arg);
        };
    };
}

function disEquipWeapons(weapons) {
    return (hindus) => {
        const newHindus = [...hindus];
        return newHindus.map((hindu) => {
            weapons.forEach((weapon) => {
                const find = hindu.weapons.indexOf(weapon);
                if (find !== -1)
                    hindu.weapons.splice(find, 1);
            });
            return hindu;
        });
    };
}

function equipWeapons(weapons) {
    return (hindus) => {
        const newHindus = [...hindus];
        return newHindus.map((hindu) => {
            hindu.weapons = hindu.weapons.concat(weapons);
            return hindu;
        });
    };
}

terminal.log(partial(disEquipWeapons)(weapons1)(persons1));
terminal.log(partial(equipWeapons)(weapons2)(persons2));`
        }
    };