export const quest5 =
    {
        title: "Индус, я выбираю тебя",
        text: `Ты решаешь всерьёз заняться своей армией. Ты обучаешь их всему и создаёшь кастовую систему.

                Теперь у тебя есть элитный 13 мусорской отряд, который экипирован для борьбы со всем в мире.  Остальные отряды – пушечное мясо для борьбы с демонами, но ты им об этом не говоришь.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Собери легионы воинов. Принадлежность к легиону 
//Указана в свойствах каждой персоны.
//Екипируй 1 легион мечами, 13 легион - палками.

const persons = [
    {legion:1, weapons:[]},
    {legion:13, weapons:['sword']},
    {legion:1, weapons:[]}
];

function isLegionN(legionNum) {
    //YOUR CODE
}

function equipWeapon(weapon) {
    //YOUR CODE
}

const isLegion1 = isLegionN(1);
const isLegion13 = isLegionN(13);

const equipSword = equipWeapon('sword');
const equipStick = equipWeapon('stick');

const legion1 = //YOUR CODE
const legion13 = //YOUR CODE

terminal.log(legion1);
terminal.log(legion13);`,
        hints: [
            "Use {...person} to make copy of person",
            "Use filter and then map to pack legions in right way",
        ],
        test: {
            code: `function equipWeaponTEST(weapon) {
    return (hindu) => {
        newHindu = {...hindu}
        newHindu.weapons.push(weapon);
        return newHindu;
    }
}
                    
                    describe("5", function() {

               it("function 'equipWeapon' should return new indus with armed weapon",function() {
                  expect(equipWeapon('sword')({legion:1, weapons:[]})).toEqual(equipWeaponTEST('sword')({legion:1, weapons:[]}));
                  expect(equipWeapon('sword')({legion:13, weapons:['sword']})).toEqual(equipWeaponTEST('sword')({legion:13, weapons:['sword']}));
               });
               it("function 'isLegionN' should return if person belongs to legion 'N'",function() {
                  expect(isLegionN(1)({legion:1, weapons:[]})).toEqual(true);
                  expect(isLegionN(1)({legion:13, weapons:[]})).toEqual(false);
                  expect(isLegionN(13)({legion:13, weapons:[]})).toEqual(true);
                  expect(isLegionN(13)({legion:1, weapons:[]})).toEqual(false);
               });
               it("legion 1 should consist of persons with sword and property 'legion' 1",function() {
                  expect(legion1).toEqual(persons.filter(isLegion1).map(equipSword));
               });
               it("legion 13 should consist of persons with stick and property 'legion' 13",function() {
                  expect(legion13).toEqual(persons.filter(isLegion13).map(equipStick));
               });
            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Собери легионы воинов. Принадлежность к легиону 
//Указана в свойствах каждой персоны.
//Екипируй 1 легион мечами, 13 легион - палками.

const persons = [
    {legion:1, weapons:[]},
    {legion:13, weapons:['sword']},
    {legion:1, weapons:[]}
];

function isLegionN(legionNum) {
    return (hindu) => {
      return hindu.legion == legionNum;
    };
}

function equipWeapon(weapon) {
    return (hindu) => {
        newHindu = {...hindu}
        newHindu.weapons.push(weapon);
        return newHindu;
    }
}

const isLegion1 = isLegionN(1);
const isLegion13 = isLegionN(13);

const equipSword = equipWeapon('sword');
const equipStick = equipWeapon('stick');

const legion1 = persons.filter(isLegion1).map(equipSword);
const legion13 = persons.filter(isLegion13).map(equipStick);

terminal.log(legion1);
terminal.log(legion13);`
        }
    };