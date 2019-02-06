export const quest2 =
    {
        title: "2",
        text: ``,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Чертовы коровы перечитались книг по математике. 
//Теперь, каждая их подойка происходит по формуле последовательности Фибоначи.
//С каждым разом мне нужно все большее количество ведер, а какое, неизвестно.
//Вот, если бы я знал количество молока при каждой подойке...
//Уууу... Братик помоги!

function MilkCow(n) {
    //YOUR CODE
}

terminal.log(MilkCow(2));
terminal.log(MilkCow(10));`,
        hints: [
            "Formula: F(n) = F(n - 1) + F(n - 2), where 'F' is your function"
        ],
        test: {
            code: `describe("2", function() {

               it("Function 'MilkCow' should return amount of milk in 'n' milking",function() {
                  expect(MilkCow(2)).toEqual(1);
                  expect(MilkCow(10)).toEqual(55);
                  expect(MilkCow(1)).toEqual(1);
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Чертовы коровы перечитались книг по математике. 
//Теперь, каждая их подойка происходит по формуле последовательности Фибоначи.
//С каждым разом мне нужно все большее количество ведер, а какое, неизвестно.
//Вот, если бы я знал количество молока при каждой подойке...
//Уууу... Братик помоги!

function MilkCow(n) {
    return n <= 1 ? n : MilkCow(n - 1) + MilkCow(n - 2);
}

terminal.log(MilkCow(2));
terminal.log(MilkCow(10));`
        }
    };
