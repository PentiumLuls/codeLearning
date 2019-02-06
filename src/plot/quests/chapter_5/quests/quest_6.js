export const quest6 =
    {
        title: "6",
        text: ``,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: ``,
        hints: [
            "HINT 1"
        ],
        test: {
            code: `describe("6", function() {

               it("should ",function() {
                  expect().toEqual();
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//

const firms = [
    {name: 'name1', cheeseWeight: 5},
    {name: 'name2', cheeseWeight: 45},
    {name: 'name3', cheeseWeight: 19}
];

function maxWeight(firms, n, maxobj) {
    if (n === firms.length) return maxobj;
    return maxWeight(firms, n + 1, maxWeightHelper(firms[n], maxobj));
}

function maxWeightHelper(A, B) {
    return A.cheeseWeight < B.cheeseWeight ? B : A;
}

function findWinner(firms) {
    return maxWeight(firms, 0, firms[0]).name;
}

terminal.log(findWinner(firms));`
        }
    };