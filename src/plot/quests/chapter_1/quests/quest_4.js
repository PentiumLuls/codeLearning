export const quest4 =
    {
        title: "Надевай шмотки, проваливай",
        text: `Все в комнате поражены твоей способностью создания чистых функций! Теперь они хотят вручить солдатам броню. Ты не понимаешь почему броня сделана из ткани, но ты просто чувствуешь, что это жизненно важно.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию equipArmor, которая принимает карточку индуса
//И возвращает новую, со свойством "armor: true" 
//Если у индуса уже есть броня, возрощает новую карточку ничего не меняя

const person = {
    gender: 'female',
    armor: false
};

function equipArmor(hinduCard) {
    //YOUR CODE
}

terminal.log(equipArmor(person));`,
        hints: [
            "Функция всегда должна возвращать новую карточку индуса",
            "Используй assign с пустым объектом в первом параметре для клонирования обекта"
        ],
        test: {
            code: `let valid = true;
                    const hindu1 = {
                        gender: 'female',
                        armor: false
                    };
                    const hindu2 = {
                        gender: 'male',
                        armor: false
                    };
                    const hindu3 = {
                        gender: 'male', armor: true
                    };
                    
                    describe("quest4", function() { 
   
   it("should return new card of indus with 'weapon' = true",function() { 
      expect(equipArmor(hindu1)).toEqual({gender: 'female',armor: true}); 
   }); 
   it("please, don't change the state of hinduCard",function() { 
      expect(hindu1['armor']).toEqual(false); 
   }); 

});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Напиши функцию equipArmor, которая принимает карточку индуса
//И возвращает новую, со свойством "armor: true" 
//Если у индуса уже есть броня, возрощает новую карточку ничего не меняя

const person = {
    gender: 'female',
    armor: false
};

function equipArmor(hinduCard) {
    if (hinduCard.armor === true) return {hinduCard};
    const newHinduCard = Object.assign({}, hinduCard);
    newHinduCard.armor = true;
    return newHinduCard;
}

terminal.log(equipArmor(person));`
        }
    }