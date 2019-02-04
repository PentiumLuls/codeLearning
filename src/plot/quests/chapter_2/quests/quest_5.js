export const quest5 =
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
            , "reduce должен возвратить одно число"
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
    };