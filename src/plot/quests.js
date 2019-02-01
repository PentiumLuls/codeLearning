export const quests = [
    {
        title: "Война индусов Z",
        quests:
            [
///////////////////////////////////////quest 1////////////////////////////////////////////////////////////
            {
                title: "Чистая функция. Туториал 1",
                text: `В этом задании ты будешь писать функции-предикаты. Они принимают какое-нибудь значение,
                сравнивают его с каким-то условием и возвращают true или false. Позже эти функции будут тебе пригодятся`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напиши функции isBlack и isSquare, которые принимают прямоугольник
//И возвращают соответствующие данные.
//P.S. Все цвета будут написаны в lowercase.

const rectangle = {
    color: 'red',
    width:4,
    height:4,
};

terminal.log("Hello world");

function isBlack(rectangle) {
    //YOUR CODE
}

function isSquare(rectangle) {
    //YOUR CODE
}

terminal.log(isBlack(rectangle));
terminal.log(isSquare(rectangle));`,
                hints: [
                    "Функция должна возвращать True или False"
                ],
                test: {
                    code: `let valid = true;
                    const rectangle2 = {
                        color: 'black',
                        width:4,
                        height: 3,
                    }
                    const rectangle3 = {
                        color: 'red',
                        width:8,
                        height: 8,
                    }       
                            describe("quest1", function() { 
   
   it("should return true when the rectangle color is black",function() { 
      expect(isBlack(rectangle2)).toEqual(true); 
   }); 
   it("should return false when the rectangle is not square",function() { 
      expect(isSquare(rectangle2)).toEqual(false); 
   }); 
   it("should return false when the rectangle color is not black",function() { 
      expect(isBlack(rectangle3)).toEqual(false); 
   }); 
   it("should return true when the rectangle is square",function() { 
      expect(isSquare(rectangle3)).toEqual(true); 
   });

});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
                    answer: `//Напиши функции isBlack и isSquare, которые принимают прямоугольник
//И возвращают соответствующие данные.
//P.S. Все цвета будут написаны в lowercase.

const rectangle = {
    color: 'red',
    width:4,
    height:4,
};

terminal.log("Hello world");

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function isSquare(rectangle) {
    return rectangle.width == rectangle.height;
}

terminal.log(isBlack(rectangle));
terminal.log(isSquare(rectangle));`
                }
            },
///////////////////////////////////////quest 2////////////////////////////////////////////////////////////
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
            },
///////////////////////////////////////quest 3////////////////////////////////////////////////////////////
            {
                title: "Чистая функция. Туториал 2",
                text: `В этом задании ты будешь писать функцию-конвертер. Она принимает какое-нибудь значение
                и возвращает другое значение. Позже, эта функция тебе пригодится.`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напиши функцию perimeter, которая принимает прямоугольник
//и возвращает результат проверки.

const rectangle = {
    color: 'red',
    width: 5,
    height: 5,
    
};

function perimeter(rectangle) {
    //YOUR CODE
}

terminal.log(perimeter(rectangle));`,
                hints: [
                    "Функция должна возвращать 1 число"
                ],
                test: {
                    code: `let valid = true;
                    const rectangle2 = {
                        color: 'black',
                        width: 3,
                        height: 5,
                        
                    }
                    const rectangle3 = {
                        color: 'black',
                        width: 10,
                        height: 20,
                        
                    }
                             if(perimeter(rectangle2) !== 16){valid = false};
                            
                            describe("quest3", function() { 
   
   it("should return perimeter of the rectangle",function() { 
      expect(perimeter(rectangle2)).toEqual(16); 
   }); 
   it("should return perimeter of the rectangle",function() { 
      expect(perimeter(rectangle3)).toEqual(60); 
   }); 
});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
                    answer: `//Напиши функцию perimeter, которая принимает прямоугольник
//и возвращает результат проверки.

const rectangle = {
    color: 'red',
    width: 5,
    height: 5,
    
};

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}

terminal.log(perimeter(rectangle));`
                }
            },
///////////////////////////////////////quest 4////////////////////////////////////////////////////////////
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
            },
///////////////////////////////////////quest 5////////////////////////////////////////////////////////////
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
            },
///////////////////////////////////////quest 6////////////////////////////////////////////////////////////
            {
                title: "Чистая функция. Туториал 3",
                text: `В этом задании ты будешь писать функцию-аккумулятор. Позже эта функция тебе пригодится.`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Напиши функцию add, которая возвращает суму двух чисел.

const a = 5;
const b = 10;

function add(a, b) {
    //YOUR CODE
}

terminal.log(add(a,b));`,
                hints: [
                    "Функция должна возвращать одно число"
                ],
                test: {
                    code: `describe("quest 6", function() {

   it("should return the sum of two numbers",function() {
      expect(add(1,7)).toEqual(8);
   });
   it("should return the sum of two numbers",function() {
      expect(add(50,51)).toEqual(101);
   });
   
});
 const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
                    answer: `//Напиши функцию add, которая возвращает суму двух чисел.

const a = 5;
const b = 10;

function add(a, b) {
    return a + b;
}

terminal.log(add(a,b));`
                }
            },
///////////////////////////////////////quest 7////////////////////////////////////////////////////////////
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
        ]
    },

///////////////////////////////////////глава2////////////////////////////////////////////////////////////
///////////////////////////////////////глава2////////////////////////////////////////////////////////////
///////////////////////////////////////глава2////////////////////////////////////////////////////////////    
    {
        title: "Богиня благословляет этот прекрасный ад",
        quests:[

 ///////////////////////////////////////quest 1////////////////////////////////////////////////////////////           
            {
                title: "Filter. Туториал 1",
                text: `Listen here, you brat. Now that you have access to filter, map and reduce functions, make sure to use them wisely. 
                Here you have a collection of different colored rectangles. Return the array of black rectangles using the filter function. 
                You can also reuse chunks of code from the first chapter if you want.`,
                regexps: [/(filter)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `// Return an array with black rectangles

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

const blackRectangles = //YOUR CODE
terminal.log(blackRectangles);`,
                hints: [
                    'Иcпользуй isBlack в filter чтобы найти только черные прямоугольники',
                    'isBlack возвращает true или false',

                ],
                test: {
                    code: `

                            describe("1", function() {

   it("should return new array of black rectangles",function() {
   
      expect(blackRectangles).toEqual(rectangles.filter(isBlack));
   });
   
});
      const report = runSpecs();
            for (var i = 0; i < report.passed.length; i++) {
              reporterLog(report.descriptions[i], report.passed[i])
            }
            if (report.passed.indexOf(false) === -1) { true } else false;`,

                    answer: `// Return an array with black rectangles

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

const blackRectangles=rectangles.filter(isBlack);
terminal.log(blackRectangles);`
                }
            },
            ///////////////////////////////////////quest 2////////////////////////////////////////////////////////////
            {
                title: "Масштабная дискриминация",
                text: `it’s relieving to see that you are actually able to code.
                 It seems to me that the reason you were sent here lies in the lack of proper education,
                  which is a totally fixable issue.Now you have the opportunity to optimize the code you wrote before.
                   Remember how you sorted these people by their gender to send them to war with Mephisto? 
                   That was extremely sexist of you, but now you can sort all of them at once using filter.
                    Efficient, right?`,
                regexps: [/(filter)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Return the array with only males.

const persons = [{name:'Aadhi',gender:'male',},{name:'Anvi',gender:'female',}
,{name:'Kashvi',gender:'female',},{name:'Shaan',gender:'male',}
,{name:'Mahika',gender:'female',}];                    

function isMale(hindu) {
    return hindu.gender === 'male';
}

const men = //YOUR CODE
terminal.log(men);`,
                hints: [
                    'Иcпользуй isMale в filter чтобы найти только мужчин'
                ],
                test: {
                    code: `describe("2", function() {

               it("should return new array of men",function() {
                  expect(men).toEqual(persons.filter(isMale));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,

                    answer: `//Return the array with only males.

const persons = [{name:'Aadhi',gender:'male',},{name:'Anvi',gender:'female',}
,{name:'Kashvi',gender:'female',},{name:'Shaan',gender:'male',}
,{name:'Mahika',gender:'female',}];                    

function isMale(hindu) {
    return hindu.gender === 'male';
}

const men = persons.filter(isMale);
terminal.log(men);`
                }
            },
    ///////////////////////////////////////quest 3////////////////////////////////////////////////////////////
    {
        title: "Map. Туториал 2",
        text: `Good, now the process of preparing the troops will go significantly faster.
         Also, let us hope that redoing  these quests will help you recover your memories faster.
        Now I’ll introduce you to the map function.As you can see, the array of rectangles is the same as before.
        You will need to write a function that returns the rectangle’s perimeter.
        Then use map with the said function to return the array of all of the rectangles’ perimeters. Good luck.`,
        regexps: [/(map)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Return the array with rectangles' perimeters.

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2;
}

const perimeters = //YOUR CODE
terminal.log(perimeters);`,
                hints: [
                    'Используй map для того чтобы применить функцию perimeter для всех прямоугольников в массиве'
                ],
                test: {
                    code: `describe("3", function() {

               it("should return array of rectangle perimeters",function() {
                  expect(perimeters).toEqual(rectangles.map(perimeter));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer:
`//Return the array with rectangles' perimeters.

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2;
}

const perimeters = rectangles.map(perimeter);
terminal.log(perimeters);`
        }
    }, 
   ///////////////////////////////////////quest 4////////////////////////////////////////////////////////////    
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
    }, 
 ///////////////////////////////////////quest 5////////////////////////////////////////////////////////////
 {
    title: "Reduce. Туториал 3",
    text: `I hope your brain can still function, because we have one more artifact to cover.
    You are presented with the array of values. Find the maximum value using reduce.
     This shouldn’t be too hard for the lord and savior of Hindu people, right?`,
    regexps: [/(reduce)/g],
    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
    code: `//Find the maximum number in the array.

const numbers = [10,25,18,133,36,100];

function max(a, b) {
    //YOUR CODE
}     

const maxNumber = //YOUR CODE
terminal.log(maxNumber);`,
    hints: [
        "Напиши функцию max для сравнения 2 чисел",
        "Используй reduce для нахождение максимального числа"
        ,"reduce должен возвратить одно число"
    ],
    test: {
        code: `describe("5", function() {

               it("should return max number from numbers array",function() {
                  expect(maxNumber).toEqual(numbers.reduce(max));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
        answer: `//Find the maximum number in the array.

const numbers = [10,25,18,133,36,100];

function max(a, b) {
    return a < b ? b : a;
}     

const maxNumber = numbers.reduce(max);
terminal.log(maxNumber);`
    }
}, 
 ///////////////////////////////////////quest 6////////////////////////////////////////////////////////////
{
    title: "Reduce. Туториал 4",
    text: `Honestly, I am quite tired of giving you quests, so use the same reduce function to 
    calculate the sum of all of the numbers in the array. That should do the job.`,
    regexps: [/(reduce)/g],
    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
    code: `//Find the sum of number in the array.

const numbers = [10,25,18,133,36,100];

function sum(a, b) {
    //YOUR CODE
}

const total = //YOUR CODE
terminal.log(total);`,
    hints: [
        "Напиши функцию для суммирования двух чисел.",
        "Используй reduce для нахождение суммы чисел.",
        "reduce должен возвратить одно число."
    ],
    test: {
        code: `describe("6", function() {

               it("should return total sum of numbers",function() {
                  expect(total).toEqual(numbers.reduce(sum, 0));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
        answer: `//Find the sum of number in the array.

const numbers = [10,25,18,133,36,100];

function sum(a, b) {
    return a + b;
}

const total = numbers.reduce(sum, 0);
terminal.log(total);`
                }
            },
            ///////////////////////////////////////quest 7////////////////////////////////////////////////////////////
            {
                title: "Твоё имя...",
                text: ``,
                regexps: [/(reduce)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `// Создай обьект, полями которого будут уникальные имена в массиве names
// А значения полей будут соответствовать количеству повторений этого имени в массиве

const names = ['Anbu','Chetan', 'Farid', 'Chetan','Farid','Chetan','Chetan']; 

function counter( names, name) {
    //YOUR CODE
}

const result = //YOUR CODE
terminal.log(result);`,
                hints: [
                    "напиши функцию  которая проверяет наличие в объекте поля которое соответствует передаваемому в функцию имени,если поле присутствует: увеличивает поле на 1 ,иначе создает новое поле со значением 1 ",
                    "используй reduce для  прохода по массиву"
                    , "reduce должен возвратить объект"
                ],
                test: {
                    code: `function counterTEST( names, name) {
   if(!(name in names)){
        names[name] = 1;
    } else {
        names[name] += 1;
    }
   return names; 
}
        
        describe("7", function() {
        
               it("should return new array with amounts of unique names",function() {
                  expect(result).toEqual({"Anbu":1,"Chetan":4,"Farid":2});
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
                    answer: `// Создай обьект, полями которого будут уникальные имена в массиве names
// А значения полей будут соответствовать количеству повторений этого имени в массиве

const names = ['Anbu','Chetan', 'Farid', 'Chetan','Farid','Chetan','Chetan']; 

function counter( names, name) {
    const newNames = {...names}
    newNames[name] = names[name] ? names[name] + 1 : 1
   return newNames
}

const result = names.reduce(counter,{});
terminal.log(result);`
                }
            },
        ]
    },

///////////////////////////////////////глава3////////////////////////////////////////////////////////////
///////////////////////////////////////глава3////////////////////////////////////////////////////////////
///////////////////////////////////////глава3////////////////////////////////////////////////////////////     
    {
        title: "Функция жанра повседневность",
        quests: [
            {
                title: "Чейнинг методов. Туториал 1",
                text: `Раньше ты научился пользоваться функциями filter, map и reduce. Сейчас же попробуй множественное их использование.
Перед собой ты видишь набор прямоугольников с разными параметрами. Твоя задача – вернуть только чёрные квадраты. Удачи.`,
                regexps: [/(filter)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `// Отфильтрируй-ка мне черные квадраты

const rectangles = [
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:5,height:3,},{color: 'red',width:4,height:4,}
];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function isSquare(rectangle) {
    return rectangle.width == rectangle.height;
}

const blackSquares = //YOUR CODE
terminal.log(blackSquares);`,
                hints: [
                    "Try to filter rectangles using method chaining - operator '.'"
                ],
                test: {
                    code: `describe("1", function() {
    
                   it("should return new array of black squares",function() {
                      expect(blackSquares).toEqual(rectangles.filter(isBlack).filter(isSquare));
                   });
    
                });
                      const report = runSpecs();
                            for (var i = 0; i < report.passed.length; i++) {
                              reporterLog(report.descriptions[i], report.passed[i])
                            }
                            if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `// Отфильтрируй-ка мне черные квадраты

const rectangles = [
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:5,height:3,},{color: 'red',width:4,height:4,}
];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function isSquare(rectangle) {
    return rectangle.width == rectangle.height;
}

const blackSquares = rectangles.filter(isBlack).filter(isSquare);
terminal.log(blackSquares);`
                }
            },
            {
                title: "Кляти туристы",
                text: `В поселение индусов хлынул очень разный народ. Хоть мы и против наличия классовой системы, но как-то просеять население мы всё же должны. 
Для разминки попробуй вернуть только молодых (до 30 лет) вооружённых (с мечём) индусов с Дели. `,
                regexps: [/(filter)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Отфильтруй индусов за местом жительства, наличием меча и возрастом

persons = [
    {name:'Farid',city:'Delhi',weapon:'sword',age:21},
    {name:'Anbu',city:'Delhi',weapon:'stick',age:18},
    {name:'Chetan',city:'Delhi',weapon:'sword',age:46},
    {name:'Rachit',city:'Mumbai',weapon:'sword',age:20},
    {name:'Chetan',city:'Mumbai',weapon:'sword',age:35}
];
   
function isFromDelhi(hindu){
    //YOUR CODE
}

function hasSword(hindu){
    return hindu.weapon == 'sword';
}

function isYoung(hindu){
    //Индус считается молодым, если ему меньше 30 лет
}

const result = //YOUR CODE
terminal.log(result);`,
                hints: [
                    "Try to filter rectangles using method chaining - operator '.'"
                ],
                test: {
                    code: `describe("2", function() {

               it("should return new array of persons with said descriptions",function() {
                  expect(result).toEqual(persons
            .filter(isFromDelhi)
            .filter(hasSword)
            .filter(isYoung));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//Отфильтруй индусов за местом жительства, наличием меча и возрастом

persons = [
    {name:'Farid',city:'Delhi',weapon:'sword',age:21},
    {name:'Anbu',city:'Delhi',weapon:'stick',age:18},
    {name:'Chetan',city:'Delhi',weapon:'sword',age:46},
    {name:'Rachit',city:'Mumbai',weapon:'sword',age:20},
    {name:'Chetan',city:'Mumbai',weapon:'sword',age:35}
];
   
function isFromDelhi(hindu){
    return hindu.city == 'Delhi';
}

function hasSword(hindu){
    return hindu.weapon == 'sword';
}

function isYoung(hindu){
    return hindu.age < 30;
}

const result = persons
            .filter(isFromDelhi)
            .filter(hasSword)
            .filter(isYoung);
terminal.log(result);`
                }
            },
            {
                title: "Чейнинг методов. Туториал 2",
                text: `Давай рассмотрим задачку чуть посложнее.
Перед собой ты видишь уже знакомый набор прямоугольников. Верни только один чёрный прямоугольник с максимальным периметром.`,
                regexps: [/(map)/g, /(filter)/g, /(reduce)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Найди максимальный периметр среди черных прямоугольников

const rectangles = [
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:7,},{color: 'black',width:2,height:4, },
];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}

function max(a, b) {
    return a < b ? b : a;
}

const maxPerimeterOfBlackRects = //YOUR CODE
terminal.log(maxPerimeterOfBlackRects);`,
                hints: [
                    "First, you should filter black rectangles",
                    "Calculate perimeter using map",
                    "Then find max perimeter",
                    "Use reduce to find max perimeter"
                ],
                test: {
                    code: `describe("3", function() {

               it("should return max perimeter of black rectangles",function() {
                  expect(maxPerimeterOfBlackRects).toEqual(rectangles.filter(isBlack).map(perimeter).reduce(max, 0));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//Найди максимальный периметр среди черных прямоугольников

const rectangles = [
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:7,},{color: 'black',width:2,height:4, },
];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}

function max(a, b) {
    return a < b ? b : a;
}

const maxPerimeterOfBlackRects = rectangles
                .filter(isBlack)
                .map(perimeter)
                .reduce(max, 0);
terminal.log(maxPerimeterOfBlackRects);`
                }
            },
            {
                title: "Майнкрафт - это жызнь",
                text: `Всем индусам нужно где-то жить, но каким-то образом они ещё не смогли построить ни одного дома,
                 а всё потому что они никак не могут нарезать доски.
                Как известно каждому жителю функционального ада, лучшие доски получаются из демонического дуба. Сделай из брёвен
                дуба доски и посчитай их количество. Из одного бревна получается 4 доски.`,
                regexps: [/(filter)/g, /(map)/g, /(reduce)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Сделай доски из дуба и посчитай их сумму

logs = [
    {type:'Oak',amount:13},
    {type:'Oak',amount:6},
    {type:'Pine',amount:6},
    {type:'Oak',amount:23},
    {type:'Pine',amount:19}
];

function makeBoards(tree) {
    return tree.amount * 4;
}

function  sum(a, b) {
    return a + b;
}

function isOak(tree){
    //YOUR CODE
}

const oakBoards = //YOUR CODE
terminal.log(oakBoards);`,
                hints: [
                    "You should filter oak logs",
                    "Then try to make boards from logs",
                    "Finally, calculate the sum of oak boards"
                ],
                test: {
                    code: `describe("4", function() {

               it("should return sum of oak boards",function() {
                  expect(oakBoards).toEqual(logs.filter(isOak).map(makeBoards).reduce(sum,0));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//Сделай доски из дуба и посчитай их сумму

logs = [
    {type:'Oak',amount:13},
    {type:'Oak',amount:6},
    {type:'Pine',amount:6},
    {type:'Oak',amount:23},
    {type:'Pine',amount:19}
];

function makeBoards(tree) {
    return tree.amount * 4;
}

function  sum(a, b) {
    return a + b;
}

function isOak(tree){
    return tree.type == 'Oak';
}

const oakBoards = logs
            .filter(isOak)
            .map(makeBoards)
            .reduce(sum,0);
terminal.log(oakBoards);`
                }
            },
            {
                title: "Девушка функционального поведения",
                text: `Нет ничего важнее для функционирующей общины чем институт семьи. 
                Но твои воины-индусы достойны только лучшего.
                Всем известно, что лучших индусских девушек зовут Анви и ни одна порядочная девушка не будет слушать буржуйскую музыку.
                Отбери девушек по этим параметрам, а потом верни самую молодую из них.`,
                regexps: [/(filter)/g, /(reduce)/g],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Найди девушку с подходящими параметрами: Имя - Anvi,
//Любимая музыка - indian, с минимальным возрастом

const persons = [
    {name:'Anvi', music:'Indian', age:56},
    {name:'Kiara',music:'Indian', age:40},
    {name:'Anvi', music:'American', age:14},
    {name:'Anvi', music:'Indian', age:21},
    {name:'Ghuihad', music:'Indian', age:8},
    {name:'Anvi', music:'American',age:29}
];

function isAnvi(hindu) {
   return  hindu.name == 'Anvi';
}

function isLikesIndianMusic(hindu) {
    //YOUR CODE
}

function minAge(hinduA, hinduB) {
    //Должен возвратить индуску с меньшим возрастом
}
const recommendedWife = //YOUR CODE
terminal.log(recommendedWife);`,
                hints: [
                    "Try using reduce to find person with min age"
                ],
                test: {
                    code: `function isAnviTEST(hindu) {
   return  hindu.name == 'Anvi';
}

function isLikesIndianMusicTEST(hindu) {
    return hindu.music == 'Indian';
}

function minAgeTEST(hinduA, hinduB) {
    return hinduA.age < hinduB.age ? hinduA : hinduB;
}
                    describe("5", function() {

               it("should return person with said parameters",function() {
                  expect(recommendedWife).toEqual(persons.filter(isAnviTEST).filter(isLikesIndianMusicTEST).reduce(minAgeTEST));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//Найди девушку с подходящими параметрами: Имя - Anvi,
//Любимая музыка - indian, с минимальным возрастом

const persons = [
    {name:'Anvi', music:'Indian', age:56},
    {name:'Kiara',music:'Indian', age:40},
    {name:'Anvi', music:'American', age:14},
    {name:'Anvi', music:'Indian', age:21},
    {name:'Ghuihad', music:'Indian', age:8},
    {name:'Anvi', music:'American',age:29}
];

function isAnvi(hindu) {
   return  hindu.name == 'Anvi';
}

function isLikesIndianMusic(hindu) {
    return hindu.music == 'Indian';
}

function minAge(hinduA, hinduB) {
    return hinduA.age < hinduB.age ? hinduA : hinduB;
}
const recommendedWife = persons
               .filter(isAnvi)
               .filter(isLikesIndianMusic)
               .reduce(minAge);
terminal.log(recommendedWife);`
                }
            },
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
            },
            {
                title: "Демоны функциональной школы",
                text: `У твоего героя и лучшей девушки поселения свадьба! Все индусы гуляют, а ты не можешь не нарадоваться тому,
                        что в Аду создана первая семья.
                        Но гад Мефистофель не разделяет вашей радости. Он послал на ваше поселение отряд элитных демонов. 
                        К счастью, раньше Карада достала кое-какие  отчёты о составе армии Мефистофеля.
                        Теперь тебе нужно быстро найти информацию о членах элитного отряда А, после чего посчитать их средние боевые навыки. 
                        Только это поможет тебе и индусам победить чертов!`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Посчитай сумму рейтинга и количество всех демонов в формате 
//{sum:970, membersAmount:3}
//Которые входят в легион А и с рейтингом больше 510

const demons = [
    {name: 'Charun',legion:'A',health:400,weapon:'sword',attack:40},
    {name: 'Asag',legion:'A',health:420,weapon:'spear',attack:20},
    {name: 'Bakasura',legion:'B',health:400,weapon:'sword',attack:45},
    {name: 'Corson',legion:'A',health:350,weapon:'sword',attack:60},
    {name: 'Anzu',legion:'B',health:400,weapon:'spear',attack:30}
];

function IsLegionA(demon) {
    return demon.legion == 'A';
}

function  combatRaiting(demon) {
    return  demon.health * 1.2 + demon.attack + 1.5;
}

function raitingMore510(raiting) {
    return raiting > 510;
}

function calcTotal(a, b) {
    //YOUR CODE
}

const total = //YOUR CODE
const averageRaiting = total.sum / total.membersAmount;

terminal.log(total);
terminal.log(averageRaiting);`,
                hints: [
                    "HINT 1"
                ],
                test: {
                    code: `describe("7", function() {

               it("should return total raiting and amount of members that have raiting more than 510 and belongs to legion A",function() {
                  expect(total).toEqual(demons
    .filter(IsLegionA)
    .map(combatRaiting)
    .filter(raitingMore510)
    .reduce(calcTotal, {sum: 0, membersAmount: 0}));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//Посчитай сумму рейтинга и количество всех демонов в формате 
//{sum:970, membersAmount:3}
//Которые входят в легион А и с рейтингом больше 510

const demons = [
    {name: 'Charun',legion:'A',health:400,weapon:'sword',attack:40},
    {name: 'Asag',legion:'A',health:420,weapon:'spear',attack:20},
    {name: 'Bakasura',legion:'B',health:400,weapon:'sword',attack:45},
    {name: 'Corson',legion:'A',health:350,weapon:'sword',attack:60},
    {name: 'Anzu',legion:'B',health:400,weapon:'spear',attack:30}
];

function IsLegionA(demon) {
    return demon.legion == 'A';
}

function  combatRaiting(demon) {
    return  demon.health * 1.2 + demon.attack + 1.5;
}

function raitingMore510(raiting) {
    return raiting > 510;
}

function calcTotal(a, b) {
    return {
        ...a,
        sum: a.sum + b,
        membersAmount: a.membersAmount + 1
    };
}

const total = demons
    .filter(IsLegionA)
    .map(combatRaiting)
    .filter(raitingMore510)
    .reduce(calcTotal, {sum: 0, membersAmount: 0});
const averageRaiting = total.sum / total.membersAmount;

terminal.log(total);
terminal.log(averageRaiting);`
                }
            },
        ]
    },
    {
        title: "STAGE 4",
        quests:
        [
            {
                title: "QUEST TITLE 1",
                text: `LEFT PANEL TEXT 1`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//SOME TEXT

const rectangle1 = {color:'red', width:4, height:4};
const rectangle2 = {color:'black', width:2, height:3};

function hasColor(color) {
    return function(rect) {
        //YOUR CODE
    };
}

const isBlack = hasColor('black');
terminal.log(isBlack(rectangle1));
terminal.log(isBlack(rectangle2));`,
                hints: [
                    "isBlack - function, that should return equality of rect color to black color"
                ],
                test: {
                    code: `function hasColorTEST(color) {
    return function(rect) {
        return rect.color == color;
    };
}
const isBlackTEST = hasColor('black');
                    
                    describe("1", function() {

               it("should return true if the rectangle color is black",function() {
                  expect(isBlack(rectangle2)).toEqual(isBlackTEST(rectangle2));
               });
               it("should return false if the rectangle color is not black",function() {
                  expect(isBlack(rectangle1)).toEqual(isBlackTEST(rectangle1));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//SOME TEXT

const rectangle1 = {color:'red', width:4, height:4};
const rectangle2 = {color:'black', width:2, height:3};

function hasColor(color) {
    return function(rect) {
        return rect.color == color;
    };
}

const isBlack = hasColor('black');
terminal.log(isBlack(rectangle1));
terminal.log(isBlack(rectangle2));`
                }
            },
            {
                title: "QUEST TITLE 2",
                text: `LEFT PANEL TEXT 2`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Посчитай сумму, нужную чтобы накормить 'hinduAmount' индусов в течении 
//'monthAmount' месяцев, с учетом того, что для 1 индуса на 1 месяц 
//это будет стоить 'eatCostPerMonth'.

const eatCostPerMonth = 50;
const hinduAmount = 100;
const monthAmount = 3;

function sumMoney( eatCostPerMonth ) {
    //YOUR CODE
}
const result1 = sumMoney(eatCostPerMonth)(hinduAmount)(monthAmount);
terminal.log(result1);

const newBill = sumMoney(30)(200);
const result2 = newBill(2);
terminal.log(result2);`,
                hints: [
                    "HINT 1"
                ],
                test: {
                    code: `describe("", function() {

               it("should ",function() {
                  expect().toEqual();
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


                    answer: `//Посчитай сумму, нужную чтобы накормить 'hinduAmount' индусов в течении 
//'monthAmount' месяцев, с учетом того, что для 1 индуса на 1 месяц 
//это будет стоить 'eatCostPerMonth'.

const eatCostPerMonth = 50;
const hinduAmount = 100;
const monthAmount = 3;

function sumMoney( eatCostPerMonth ) {
    return ( hinduAmount ) => {
        return( monthAmount ) => {
             return eatCostPerMonth * hinduAmount * monthAmount;
        };
    };
}
const result1 = sumMoney(eatCostPerMonth)(hinduAmount)(monthAmount);
terminal.log(result1);

const newBill = sumMoney(30)(200);
const result2 = newBill(2);
terminal.log(result2);`
                }
            },
            {
                title: "QUEST TITLE 3",
                text: `LEFT PANEL TEXT 3`,
                regexps: [],
                regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
                code: `//Допиши функцию, которая возвращает нового индуса без указанного оружия,
//Используя каррирование. Если у индуса есть 2 или более единицы
//Указаного оружия, убирает только одно.

const person = {weapons:['sword','stick'],};

function disarmWeapon(weapon) {
    return (hindu) => {
        //YOUR CODE
    }
}

disarmStick = disarmWeapon('stick');
disarmSword = disarmWeapon('sword');
terminal.log(person);
terminal.log(disarmStick(person));
terminal.log(disarmSword(person));`,
                hints: [
                    "HINT 1"
                ],
                test: {
                    code: `describe("", function() {

               it("should ",function() {
                  expect().toEqual();
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
    }
}

disarmStick = disarmWeapon('stick');
disarmSword = disarmWeapon('sword');
terminal.log(person);
terminal.log(disarmStick(person));
terminal.log(disarmSword(person));`
                }
            },
        ]
    },
///////////////////////////////////////глава5////////////////////////////////////////////////////////////
///////////////////////////////////////глава5////////////////////////////////////////////////////////////
///////////////////////////////////////глава5////////////////////////////////////////////////////////////
    {
        title: "Кайся глупец",
        quests:
            [
                {
                    title: "Корова-функционист",
                    text: `АД, 2019 год н.э., вечер. Вы оказались в месте, отдалённо напоминающий приватный дом в Соловках. Перед вашим взором предстали   разрушенное имущество, злая корова и грустный индус.

                Индус просит вас подоить корову. Корова категорически против объектно-ориентированной подойки. Вы решаете подоить её функциональным путём.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
                    code: `//Здравствуй, брат! Клята корова хочет функциональную подойку, помоги братику индусу.
//Напиши функцию milkACow, которая принимает корову и возвращает подоенную корову.

var cow = {
    milk: 10
}

function milkACow(cow) {
    cow.milk = 0
    return cow
}
                       `,
                    hints: [
                        "Функция не должна изменять внешние переменные",
                        "Попробуй как-то скопировать объект коровы"
                    ],
                    test: {
                        code: `let valid = true;
                             if(JSON.stringify(milkACow(cow)) !== JSON.stringify({milk: 0})){valid = false};
                             if(cow.milk !== 10){valid = false};
                             if(JSON.stringify(milkACow({milk: 33})) !== JSON.stringify({milk: 0})){valid = false};
                            valid === true`,
                        answer: `
function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    newcow.milk = 0;
    return newcow;
}
`
                    }
                },
                {
                    title: "Множественная дойка",
                    text: `Вы довольны, корова подоена, но индус всё ещё грустный. Оказывается, одиночной функции подойки коровы ему недостаточно, так как тот желает поделиться молоком с другими индусами. К сожалению, корова  может выдержать только ограниченное количество подоёк. Тем не менее, индус настаивает на возможности множественной подойки.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
                    code: `//Брат, да ты крутой, как ты вообще умудрился попасть в функциональный ад?
//Мне пришло много заказов на молоко. Напиши шункцию milkACow, которая будет доить корову
//на определенное количество молока и возвращать корову, когда у нее закончится молоко. Придерживайся  второй заповеди,
//я её толком не знаю, но попробуй использовать высшую и первоклассную функции.
                
var cow = {
    milk: 10
}
                
function milkACow(cow, mass) {
    cow.milk -= mass
    if (cow.milk <= 0) {
        return cow
    }
}`,
                    test: {
                        code: `let valid = true;
                            let cow2 = {milk: 10}
                                let myCow = milkACow(cow2)
                                if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                                if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                                if(JSON.stringify(myCow(4)) !== JSON.stringify({milk: 0})){valid = false};
                                if(cow2.milk !== 10){valid = false};
                            valid === true`,
                        answer: `
function milkACow(cow) {
    let newcow = Object.assign({}, cow);
    return function(int) {
        if (int >= newcow.milk) {
            newcow.milk = 0
            return newcow;
        }
    newcow.milk -= int   
    }
}`
                    }
                },
                {
                    title: "Адская экосистема",
                    text: `Корова восхищена вашими навыками функционального программирования, а индус и не думает вас отпускать. Оказывается, функции множественной подойки ему тоже недостаточно, ведь у всего индусского поселения закончились запасы сыра. Корова устало вздыхает. Вы молча задаётесь вопросом, откуда здесь вообще индус и корова, и почему она даёт красное молоко.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
                    code: `//Мои братья индусы хотят сырууу. Помоги нам сделать сыр,
//а я пойду його продавать на базар. Напиши шункцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни масив сыров.
//Попробуй здалать её такой же крутой как о прошлую .
//формула сыру: milk / 2.     

var cow = {
    milk: 10
}

let cheeses = []

function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses.push(maas / 2)
    if (cow.milk <= 0) {
        return cheeses
    }
}
`,
                    test: {
                        code: `let valid = true;
                    let cow2 = {milk: 10}
                        let myCow = milkACow(cow2)
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify([2, 2, 1])){valid = false};
                        if(cow2.milk !== 10){valid = false};
                    valid === true`,
                        answer: `function milkACow(cow) {
                        let newcow = Object.assign({}, cow);
                        let cheeses = []
                        return function(int) {
                            if (int >= newcow.milk) {
                                cheeses.push(newcow.milk / 2)
                                newcow.milk = 0
                                return cheeses;
                            }
                        newcow.milk -= int
                        cheeses.push(int / 2)   
                        }
                    }
                    `
                    }
                },
                {
                    title: "Звезда спасения индусов",
                    text: `Вы оказались в месте, где кроме индуса и коровы вас окружает ещё и изобилие молока и сыра. На сие чудо начинают сходиться другие индусы. У вашего индуса появляется идея начать продавать сыр местним торгашам, однако для этого его нужно сначала свесить. Множество индусских глаз теперь сфокусировано на вас.`,
                    regexps: [/(return)/g, /(function)/g, /(cow)/g, /(milk)/g, /(milkACow)/g],
                    regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(map)/g, /(reduce)/g, /(filter)/g, /(filter)/g,],
                    code: `//Брат!! Мы успешны! ПОмоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напиши функцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни массу всего сыра который получился.
//Но брат, избалованая корова хочет что бы ти использовал стрелочные функции, я думаю это 4 заповедь.

var cow = {
    milk: 10
}

let MassOfCheeses = []

function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses += mass / 2
    if (cow.milk <= 0) {
        return cheeses
    }
}
                `,
                    hints: [
                        "hint sample",
                        "hint sample2"
                    ],
                    test: {
                        code: `let valid = true;
                    let cow2 = {milk: 10}
                        let myCow = milkACow(cow2)
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(undefined)){valid = false};
                        if(JSON.stringify(myCow(4)) !== JSON.stringify(5)){valid = false};
                        if(cow2.milk !== 10){valid = false};
                    valid === true`,
                        answer: ``
                    }
                },
                {
                    title: "Легенда о великом ублажателе коров",
                    text: `Вы и ваш индусский друг смогли наладить производство сыра, после чего стали самыми успешными предприятелями в индусской деревне в Аду. Кажется, вами восхищается даже Мефистофель. На вырученные деньги вы решаете приобрести ещё несколько коров. Теперь вам каким-то образом нужно вести учёт полученного молока и сыра. Вся робота опять легла на вас. Корова понимающе вздыхает.`,
                    regexps: [/(return)/g, /(reduce)/g],
                    code: `//Брат!! Мы успешны! ПОмоги мне продавать сыр оптом и я посвящу тебя в истинного индуса.
//Напиши функцию milkACow которая принимает корову,
//доит её по заказу клиентов и когда молоко закончиться верни массу всего сыра который получился.
//Но брат, избалованая корова хочет что бы ти использовал стрелочные функции, я думаю это 4 заповедь.
                
var cow = {
    milk: 10
}
                
let MassOfCheeses = []
                
function milkACow(cow, mass) {
    cow.milk -= mass
    cheeses += mass / 2
    if (cow.milk <= 0) {
        return cheeses
    }
}`,
                    hints: [
                        "hint sample",
                        "hint sample2"
                    ],
                    test: {
                        code: "sumRange(1, 10, 0)",
                        answer: `function sumRange(start, end, acc) {
                        if (start > end)
                            return acc;
                        return sumRange(start + 1, end, acc + start)
                    }`
                    }
                },
                {
                    title: "Начало легенды",
                    text: `Производство процветает, вырученные деньги вы решили вложить в развитие деревни, после чего она смогла гордо называться посёлком городского типа. Вас выбирают главой, однако у вашего индусского брата опять возникла проблема. Ему нужно посчитать общую массу сыра, который дают коровы, дающие больше чем 5 килограммов сыра. Вы в замешательстве, но ваш брат и не думает посвящать вас в детали. Вместо этого он даёт вам какие-то таинственные вещички, намекая, что используя их вы сможете решить эту задачу быстрее и эффективнее. Вы решаетесь использовать эти вещички.`,
                    regexps: [/(return)/g, /(reduce)/g],
                    code: "//Hello may frend, my boss please me to create functional summ thet will be calculate\n" +
                        "//mass of stones. I must to get to number of integer and returne summ.\n" +
                        "//boss say thet i must read first lav\n" +
                        "let stonesMass = [1, 3, 5]\n" +
                        "\n" +
                        "function calculateSumm(stones) {\n" +
                        "    //???\n" +
                        "}",
                    hints: [
                        "hint sample",
                        "hint sample2"
                    ],
                    test: {
                        code: "calculateSumm(stonesMass)",
                        answer: "stonesMass.reduce((a,b) => {return a+b})"
                    }
                },
            ]
    }

]
