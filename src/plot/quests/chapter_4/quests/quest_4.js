export const quest4 =
    {
        title: "Функциональная революция",
        text: `Для борьбы с беспорядками ты решаешь сформировать элитный отряд. Элитному отряду нужны дубинки для борьбы с гражданским населением, а также мечи, если демоны вдруг решат опять атаковать.
                `,
        regexps: [/(map)/g, /(reduce)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Посчитай количество мечей и палок массива индусов
//Функция hasWeapon() должна возвращать 1, если у индуса есть это оружие
//И 0 в обратном случае

const persons = [
    {weapons:['sword']},
    {weapons:['sword','stick']},
    {weapons:['stick']},
    {weapons:['sword']}
];

function sum(a, b) {
   return a + b;
}

function hasWeapon(weapon) {
    //YOUR CODE
}

const hasSword = hasWeapon('sword');
const hasStick = hasWeapon('stick');
const swordsAmount = //YOUR CODE
const sticksAmount = //YOUR CODE
terminal.log(swordsAmount, sticksAmount);`,
        hints: [
            "Use 'weapons.indexOf()' to find whether hindu has this weapon",
            "First use 'map' to transform person array to numbers using 'hasSword' or 'hasStick'",
            "Secondly, try to reduce that array to sum using current value - 0",
            "Oh God! just put this: reduce(sum, 0)"
        ],
        test: {
            code: `function hasWeaponTEST(weapon) {
      return (hindu) => {
          return (hindu.weapons.indexOf(weapon) !== -1) ? 1 : 0;
      };
}
const hasSwordTEST = hasWeaponTEST('sword');
const hasStickTEST = hasWeaponTEST('stick');
                     
                    describe("4", function() {

               it("hasWeapon() should return '1' or '0' depend on exists of weapon",function() {
                  expect(hasWeapon('sword')({weapons:['sword']})).toEqual(1);
                  expect(hasWeapon('sword')({weapons:['stick']})).toEqual(0);
                  expect(hasWeapon('stick')({weapons:['stick']})).toEqual(1);
                  expect(hasWeapon('stick')({weapons:['sword', 'stick']})).toEqual(1);
               });
               it("swords and sticks amount should equal to sum of swords and sticks that have hindus",function() {
                  expect(swordsAmount).toEqual(persons.map(hasSwordTEST).reduce(sum,0));
                  expect(sticksAmount).toEqual(persons.map(hasStickTEST).reduce(sum,0));
               });
            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Посчитай количество мечей и палок массива индусов
//Функция hasWeapon() должна возвращать 1, если у индуса есть это оружие
//И 0 в обратном случае

const persons = [
    {weapons:['sword']},
    {weapons:['sword','stick']},
    {weapons:['stick']},
    {weapons:['sword']}
];

function sum(a, b) {
   return a + b;
}

function hasWeapon(weapon) {
    return (hindu) => {
        return (hindu.weapons.indexOf(weapon) !== -1) ? 1 : 0;
    };
}

const hasSword = hasWeapon('sword');
const hasStick = hasWeapon('stick');
const swordsAmount = persons.map(hasSword).reduce(sum,0);
const sticksAmount = persons.map(hasStick).reduce(sum,0);
terminal.log(swordsAmount, sticksAmount);`
        }
    };