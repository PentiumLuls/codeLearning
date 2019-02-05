export const quest1 =
    {
        title: "Корова-функционист",
        text: `АД, 2019 год н.э., вечер. Вы оказались в месте, отдалённо напоминающий приватный дом в Соловках. Перед вашим взором предстали   разрушенное имущество, злая корова и грустный индус.

                Индус просит вас подоить корову. Корова категорически против объектно-ориентированной подойки. Вы решаете подоить её функциональным путём.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функции pow и factorial, которые подносят в степень
//И считает факториал, соответсвенно.

function pow(a, n) {
    //YOUR CODE
}


function factorial(a) {
    //YOUR CODE
}

terminal.log("2^3 = " + pow(2, 3));
terminal.log("1! = " + factorial(1));
terminal.log("5! = " + factorial(5));`,
        hints: [
            "xd"
        ],
        test: {
            code: `describe("1", function() {

               it("result of 'pow' should equal to 'a' to the power 'n'",function() {
                  expect(pow(5, 1)).toEqual(5);
                  expect(pow(3, 7)).toEqual(2187);
               });
               it("Function'factorial' should return factorial of number",function() {
                  expect(factorial(1)).toEqual(1);
                  expect(factorial(10)).toEqual(3628800);
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Напиши функции pow и factorial, которые подносят в степень
//И считает факториал, соответсвенно.

function pow(a, n) {
    if (n === 1) return a;
        return a * pow(a, n-1);
}


function factorial(a) {
    if (a === 1) return 1;
    return a * factorial(a-1);
}

terminal.log("2^3 = " + pow(2, 3));
terminal.log("1! = " + factorial(1));
terminal.log("5! = " + factorial(5));`
        }
    };
