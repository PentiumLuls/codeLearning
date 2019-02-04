export const quest6 =
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
    };