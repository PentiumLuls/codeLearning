export const quest7 =
    {
        title: "Отряд индусов быстрого функционирования",
        text: `Дела идут хорошо, тебе приносят стакан молока и просят объединить индусов в отряды для лучшей продуктивности. Ты молча киваешь. Но тебя терзают мысли о том, почему же ты здесь всё-таки находишься и о красном молоке...`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию createGang,которая возвращает отряд такого типа: 
//{members: [hindu1.name, hindu2.name], armors: [true, true],
//weapons: ['stick', 'stick', 'sword']}.
//P.S. Функция должна возвращать такую же карточку отряда как входящая,
//если у рекрута нет оружия.

const person = {
    name: 'Aadhi',
    gender: 'male',
    armor: true,
    weapons: ['sword', 'stick']
};

const gang = {
    members: ['Dgasyd'],
    armors: [true],
    weapons: ['stick']
};

function joinGang(gangCard, hinduCard) {
    //YOUR CODE
}

terminal.log(joinGang(gang, person));`,
        hints: [
            "Функция всегда должна возвращать новый отряд индусов",
            "Используй spread оператор (...) для создания нового отряда"
        ],
        test: {
            code: `const person1 = {
    name: 'Aadhi1',
    gender: 'male',
    armor: true,
    weapons: ['sword', 'stick']
};
const person2 = {
    name: 'Aadhi2',
    gender: 'male',
    armor: false,
    weapons: []
};
const gang1 = {
    members: ['indus1name'],
    armors: [true],
    weapons: ['stick']
};

                       describe("quest 7", function() {

   it("should return gangCard without new member if he hasn't has any weapon",function() {
      expect(joinGang(gang1, person2)).toEqual({members: ['indus1name'],armors: [true],weapons: ['stick']});
   });
   it("should return new gangCard with new member",function() {
      expect(joinGang(gang1, person1)).toEqual({members: ['indus1name', 'Aadhi1'],armors: [true, true],weapons: ['stick','sword','stick']});
   });
   
});
 const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Напиши функцию createGang,которая возвращает отряд такого типа: 
//{members: [hindu1.name, hindu2.name], armors: [true, true],
//weapons: ['stick', 'stick', 'sword']}.
//P.S. Функция должна возвращать такую же карточку отряда как входящая,
//если у рекрута нет оружия.

const person = {
    name: 'Aadhi',
    gender: 'male',
    armor: true,
    weapons: ['sword', 'stick']
};

const gang = {
    members: ['Dgasyd'],
    armors: [true],
    weapons: ['stick']
};

function joinGang(gangCard, hinduCard) {
    if (hinduCard.weapons.length === 0) return gangCard;
    const newGangCard = Object.assign({}, gangCard);
    newGangCard.members.push(hinduCard.name);
    newGangCard.armors.push(hinduCard.armor);
    newGangCard.weapons.push(...hinduCard.weapons);
    return newGangCard;
}

terminal.log(joinGang(gang, person));`
        }
    }