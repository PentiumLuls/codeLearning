export const quest5 =
    {
        title: "Даже палка стреляет раз в год",
        text: `Все радуются твоему таланту, но один из индусов говорит, что броня - это хорошо, но чем они драться будут? Тут ты понимаешь что все проблемы теперь будешь решать ты...`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию equipStick, которая возвращает карточку индуса с палкой.
//И если у индуса уже есть палка, то возвращает новую карточку, но без дополнительной палки.
//Только не забывай про чистоту твоей функции.
//И учти, что у индуса может уже быть несколько оружий разных типов.

const person = {
    gender: 'female',
    armor: true,
    weapons: []
};

function equipStick(hinduCard) {
    //YOUR CODE
}

terminal.log(equipStick(person));`,
        hints: [
            "Используй indexOf, чтобы проверить наличие палки у индуса",
            "Используй spread оператор (...) для создания новой карточки индуса"
        ],
        test: {
            code: `let valid = true;
                    const hindu1 = {
                        gender: 'female',
                        weapons: []
                    }
                    const hindu2 = {
                        gender: 'male',
                        weapons: ['stick, sword']
                    }
                    
                    describe("quest5", function() { 
   
   it("should add 'stick' to weapons of new indus card",function() { 
      expect(equipStick(hindu1)['weapons'][0]).toEqual('stick'); 
   });
   it("should not add 'stick' if it is already exist in weapons",function() { 
      expect(equipStick(hindu2)['weapons'].length).toEqual(2); 
   });
   it("should return the same card if 'stick' is already exist in weapons",function() { 
      expect(equipStick(hindu2)).toEqual(hindu2); 
   });
});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Напиши функцию equipStick, которая возвращает карточку индуса с палкой.
//И если у индуса уже есть палка, то возвращает новую карточку, но без дополнительной палки.
//Только не забывай про чистоту твоей функции.
//И учти, что у индуса может уже быть несколько оружий разных типов.

const person = {
    gender: 'female',
    armor: true,
    weapons: []
};

function equipStick(hinduCard) {
    const newHinduCard = Object.assign({}, hinduCard);
    if (newHinduCard.weapons.indexOf('stick') == -1) {
        newHinduCard.weapons.push('stick');
        return newHinduCard;
    }
    return {...hinduCard};
}

terminal.log(equipStick(person));`
        }
    }