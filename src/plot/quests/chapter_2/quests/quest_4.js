export const quest4 =
    {
        title: "Броню народу!",
        text: `You are still far from being a good fighter, but you are making progress, which is probably a good thing.
        Once again, write a function that equips an armor if the Hindu guy doesn’t have any yet and use map to make 
        all of the guys equip the said armor. This task will help you lay the ground of an actual functional army.
         No pun intended, I am not the kind of person to make those and YOU should make SURE to remember that.`,
        regexps: [/(map)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Equip all of the Hindu with an armor.

const persons = [{gender: 'male',armor: true},{gender: 'male',armor: false},
    {gender: 'male',armor: false}];   

function equipArmor(hindu) {
    return {
        ...hindu,
        armor: true
    };
}

const equipedHindus = //YOUR CODE
terminal.log(equipedHindus);`,
        hints: [

            'Используй map для того, чтобы применить функцию equipArmor для всех карточек индуса в массиве.',
            'map должен возвратить массив индусов в броне.'
        ],
        test: {
            code: `describe("4", function() {

               it("should return new array of equipped in armor hindus",function() {
                  expect(equipedHindus).toEqual(persons.map(equipArmor));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//Equip all of the Hindu with an armor.

const persons = [{gender: 'male',armor: true},{gender: 'male',armor: false},
    {gender: 'male',armor: false}];   

function equipArmor(hindu) {
    return {
        ...hindu,
        armor: true
    };
}

const equipedHindus = persons.map(equipArmor);
terminal.log(equipedHindus);`
        }
    };