export const quest6 =
    {
        title: "Персона",
        text: `Довольно иронично, что полноценную систему идентификации личности ты решаешь внедрить именно сейчас. Тем не менее, тебе как-то нужно регистрировать на индусов талоны на еду. Также тебе нужно знать имена и лица тех, кого ты собираешься казнить за измену.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Допиши функцию, которая создает новою карточку индуса с 
//задаными параметрами, используя каррирование
//Порядок свойств: город, наличие брони, оружие, имя, возраст

function createHinduCard(city) {
    //YOUR CODE
}

const createHinduCardTypeA = createHinduCard('Mumbai')(true)('sword');
const createHinduCardTypeB = createHinduCard('Delhi')(false);

const hindu1 = createHinduCardTypeA('Rachit')(40);
const hindu2 = createHinduCardTypeB ('stick')('Ojas')(27);
terminal.log(hindu1);
terminal.log(hindu2);`,
        hints: [
            "NOPE !"
        ],
        test: {
            code: `function createHinduCardTEST(city) {
    return function(armor) {
        return function(weapon) {
            return function(name) {
                return function(age) {
                    return {
                        city : city,
                        armor : armor,
                        weapon : weapon,
                        name : name,
                        age : age
                    };
                };
            };
        };
    };
}
                describe("6", function() {

               it("should return new hindu card with definite parameters",function() {
                  expect(createHinduCard('Mumbai')(true)('sword')('Rachit')(40)).toEqual(createHinduCardTEST('Mumbai')(true)('sword')('Rachit')(40));
                  expect(createHinduCard('Delhi')(false)('stick')('Ojas')(27)).toEqual(createHinduCardTEST('Delhi')(false)('stick')('Ojas')(27));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Допиши функцию, которая создает новою карточку индуса с 
//задаными параметрами, используя каррирование
//Порядок свойств: город, наличие брони, оружие, имя, возраст

function createHinduCard(city) {
    return function(armor) {
        return function(weapon) {
            return function(name) {
                return function(age) {
                    return {
                        city : city,
                        armor : armor,
                        weapon : weapon,
                        name : name,
                        age : age
                    };
                };
            };
        };
    };
}

const createHinduCardTypeA = createHinduCard('Mumbai')(true)('sword');
const createHinduCardTypeB = createHinduCard('Delhi')(false);

const hindu1 = createHinduCardTypeA('Rachit')(40);
const hindu2 = createHinduCardTypeB ('stick')('Ojas')(27);
terminal.log(hindu1);
terminal.log(hindu2);`
        }
    };