export const quest3 =
    {
        title: "Функциональная лагуна",
        text: `Ранее тобой были вооружены чуть ли не все индусы. В текущей ситуации от этого получилось больше вреда чем пользы. Несколько самых сильных индусов собрали вокруг себя небольшие отряды и пытаются захватить контроль над деревней. На фоне всего этого процветает контрабанда оружием.

                Всё, что ты пока что можешь сделать – уменьшить количество оружия в свободном плавании. `,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Допиши функцию, которая возвращает нового индуса без указанного оружия,
//Используя каррирование. Если у индуса есть 2 или более единицы
//Указаного оружия, убирает только одно.

const person = {weapons:['sword','stick'],};

function disarmWeapon(weapon) {
    return (hindu) => {
        //YOUR CODE
    };
}

disarmStick = disarmWeapon('stick');
disarmSword = disarmWeapon('sword');
terminal.log(person);
terminal.log(disarmStick(person));
terminal.log(disarmSword(person));`,
        hints: [
            "Use Object.assign({}, object) or spread operator {...hindu} to make copy of hindu card",
            "Use weapons.splice() to disarm person",
            "Function 'disarmWeapon' should return new person"
        ],
        test: {
            code: `function disarmWeaponTEST(weapon) {
    return (hindu) => {
        const newHindu = {...hindu};
        const find = newHindu.weapons.indexOf(weapon);
        if( find !== -1) {
            newHindu.weapons.splice(find,1);
        }
        return newHindu;
    };
}
                    
                    describe("3", function() {

               it("should return new indus with disarmed weapon",function() {
                  expect(disarmStick(person)).toEqual(disarmWeaponTEST('stick')(person));
                  expect(disarmSword(person)).toEqual(disarmWeaponTEST('sword')(person));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Допиши функцию, которая возвращает нового индуса без указанного оружия,
//Используя каррирование. Если у индуса есть 2 или более единицы
//Указаного оружия, убирает только одно.

const person = {weapons:['sword','stick'],};

function disarmWeapon(weapon) {
    return (hindu) => {
        const newHindu = {...hindu};
        const find = newHindu.weapons.indexOf(weapon);
        if( find !== -1) {
            newHindu.weapons.splice(find,1);
        }
        return newHindu;
    };
}

disarmStick = disarmWeapon('stick');
disarmSword = disarmWeapon('sword');
terminal.log(person);
terminal.log(disarmStick(person));
terminal.log(disarmSword(person));`
        }
    };