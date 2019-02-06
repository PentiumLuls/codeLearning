export const quest4 =
    {
        title: "4",
        text: ``,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию 'factorialHelper' используя хвостовую рекурсию
//И пример 'pow'

function powHelper(total, n, a) {
    if (n === 0) return total;
    return powHelper(total * a, n - 1, a);
}

function pow(a, n) {
    return powHelper(1, n, a);
}

function factorialHelper(a, total) {
    //YOUR CODE
}

function factorial(a) {
    //YOUR CODE
}

terminal.log("7^0 = " + pow(7, 0));
terminal.log("2^3 = " + pow(2, 3));
terminal.log("1! = " + factorial(1));
terminal.log("5! = " + factorial(5));`,
        hints: [
            "Use 'pow' example"
        ],
        test: {
            code: `describe("4", function() {

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
            answer: `//Напиши функцию 'factorialHelper' используя хвостовую рекурсию
//И пример 'pow'

function powHelper(total, n, a) {
    if (n === 0) return total;
    return powHelper(total * a, n - 1, a);
}

function pow(a, n) {
    return powHelper(1, n, a);
}

function factorialHelper(a, total) {
    if (a === 1) return total;
    return factorialHelper(a - 1, total * a);
}

function factorial(a) {
    return factorialHelper(a, 1);
}

terminal.log("7^0 = " + pow(7, 0));
terminal.log("2^3 = " + pow(2, 3));
terminal.log("1! = " + factorial(1));
terminal.log("5! = " + factorial(5));`
        }
    };
