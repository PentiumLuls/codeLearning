export const quest5 =
    {
        title: "Сыр... созданый в бездне",
        text: `Корова восхищена вашими навыками функционального программирования, а индус и не думает вас отпускать. Оказывается, функции множественной подойки ему тоже недостаточно, ведь у всего индусского поселения закончились запасы сыра. Корова устало вздыхает. Вы молча задаётесь вопросом, откуда здесь вообще индус и корова, и почему она даёт красное молоко.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Допиши функцию 'makeCheeseHelper', которая возвращает массив порций сыра.
//1 порция сыра = 2 молока * e;
//Причем, с каждой новой порцией 'e' уменьшается на 0.20

const cow = {milk: 10};

function makeCheese(cow) {
    const newCow = {...cow};
    const cheeses = [];
    return makeCheeseHelper(newCow, cheeses, 1)
}

function makeCheeseHelper(cow, cheeses, e) {
    //YOUR CODE
}

terminal.log(makeCheese(cow));`,
        hints: [
            "Try to make recursion until the 'cow.milk' === 0 And then return cheeses",
            "Try to round portions by using 'toFixed(1)'"
        ],
        test: {
            code: `function makeCheeseTEST(cow) {
    const newCow = {...cow};
    const cheeses = [];
    return makeCheeseHelperTEST(newCow, cheeses, 1)
}

function makeCheeseHelperTEST(cow, cheeses, e) {
    if (cow.milk === 0) return cheeses;
    else {
        cheeses.push((2 * e).toFixed(1));
        cow.milk -= 2;
        return makeCheeseHelperTEST(cow, cheeses, e - 0.20);
    }
}
            
            describe("5", function() {

               it("should return portions of cheese using formula",function() {
                  expect(makeCheese({milk: 10})).toEqual(makeCheeseTEST({milk: 10}));
                  expect(makeCheese({milk: 6})).toEqual(makeCheeseTEST({milk: 6}));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//Допиши функцию 'makeCheeseHelper', которая возвращает массив порций сыра.
//1 порция сыра = 2 молока * e;
//Причем, с каждой новой порцией 'e' уменьшается на 0.20

const cow = {milk: 10};

function makeCheese(cow) {
    const newCow = {...cow};
    const cheeses = [];
    return makeCheeseHelper(newCow, cheeses, 1)
}

function makeCheeseHelper(cow, cheeses, e) {
    if (cow.milk === 0) return cheeses;
    else {
        cheeses.push((2 * e).toFixed(1));
        cow.milk -= 2;
        return makeCheeseHelper(cow, cheeses, e - 0.20);
    }
}

terminal.log(makeCheese(cow));`
        }
    };
