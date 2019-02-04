export const quest6 =
    {
        title: "Герой из трущоб",
        text: `Тебе нужно как-то поднять боевой дух индусов. Для этого ты решаешь представить им в пример героя всего индусского племени.
                        Естественно, герой должен быть пригодным к войне, то есть иметь в наличии нормальное оружие и броню. 
                        Найди самого молодого пригодного солдата и верни его как героя.`,
        regexps: [/(filter)/g, /(map)/g, /(reduce)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Найди возраст настоящего героя! Он отличается такими качествами, как:
//Наличие брони и меча, и молодой возраст

const persons = [
    {name:'Farid', armor: true, weapon:'stick', age:21,},
    {name:'Chetan',armor: false, weapon:'sword', age:35,},
    {name:'Chetan',armor: false,weapon:'sword', age:50,},
    {name:'Anbu',  armor: false,weapon:'stick', age:20,},
    {name:'Aadhi', armor: true, weapon:'sword', age:46,}
];

function hasArmor(hindu) {
    return hindu.armor === true;
}

function hasSword(hindu) {
    return hindu.weapon == 'sword';
}

function getAge(hindu) {
    return hindu.age;
}

function min(a, b) {
    //YOUR CODE
}

const heroMinAge = //YOUR CODE
terminal.log(heroMinAge);`,
        hints: [
            "First of all, you should filter persons with sword and armor equipped",
            "To find the person with min age, you need to map persons to their age",
            "Use reduce to find person with min age"
        ],
        test: {
            code: `describe("6", function() {

               it("should return min age of fully equipped persons",function() {
                  expect(heroMinAge).toEqual(persons.filter(hasArmor).filter(hasSword).map(getAge).reduce(min));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Найди возраст настоящего героя! Он отличается такими качествами, как:
//Наличие брони и меча, и молодой возраст

const persons = [
    {name:'Farid', armor: true, weapon:'stick', age:21,},
    {name:'Chetan',armor: false, weapon:'sword', age:35,},
    {name:'Chetan',armor: false,weapon:'sword', age:50,},
    {name:'Anbu',  armor: false,weapon:'stick', age:20,},
    {name:'Aadhi', armor: true, weapon:'sword', age:46,}
];

function hasArmor(hindu) {
    return hindu.armor === true;
}

function hasSword(hindu) {
    return hindu.weapon == 'sword';
}

function getAge(hindu) {
    return hindu.age;
}

function min(a, b) {
    return a < b ? a : b;
}

const heroMinAge = persons
        .filter(hasArmor)
        .filter(hasSword)
        .map(getAge)
        .reduce(min);
terminal.log(heroMinAge);`
        }
    };