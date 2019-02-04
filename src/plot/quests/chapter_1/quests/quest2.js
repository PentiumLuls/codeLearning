export const quest2 =
    {
        title: "Неуталимая жажда",
        text: `Ты открываешь глаза и видишь нескольких индусов, которые что-то обсуждают. Они говорят тебе: "Выбирай тех, кто изменит этот мир!", и дают карточки нескольки сотен индусов. Ничего не понимая, ты начинаешь их сортировать, чувствуя при этом только непреодалимую жажду мести...`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию isMale, которая принимает карточку индуса
//И возвращает его пригодность к войне.
//P.S. Индус считается пригодным, если он мужчина.

const person = {
    gender: 'female'
};

function isMale(hinduCard) {
    //YOUR CODE
}

terminal.log(isMale(person));`,
        hints: [
            "Функция должна возвращать True или False"
        ],
        test: {
            code: `let valid = true;
                    const hindu1 = {
                        gender: 'female'
                    }
                    const hindu2 = {
                        gender: 'male'
                    }
                    
                    describe("quest2", function() { 
   
   it("should return true when this indus is a male",function() { 
      expect(isMale(hindu2)).toEqual(true); 
   }); 
   it("should return false when this indus is not a male",function() { 
      expect(isMale(hindu1)).toEqual(false); 
   }); 
});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//Напиши функцию isMale, которая принимает карточку индуса
//И возвращает его пригодность к войне.
//P.S. Индус считается пригодным, если он мужчина.

const person = {
    gender: 'female'
};

function isMale(hinduCard) {
    return hinduCard.gender == 'male';
}

terminal.log(isMale(person));`
        }
    }