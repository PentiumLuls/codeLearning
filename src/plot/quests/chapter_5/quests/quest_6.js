export const quest6 =
    {
        title: "6",
        text: ``,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Реализуй функции 'maxWeightHelper' и 'maxWeight'

const firms = [
    {name: 'Mozzarella', cheeseWeight: 5},
    {name: 'Cheddar', cheeseWeight: 45},
    {name: 'Brie', cheeseWeight: 19}
];

function maxWeightHelper(A, B) {
    //Should return cheese with max weight
}

function maxWeight(firms, n, maxobj) {
    //Should return cheese with max weight
}

function findWinner(firms) {
    return maxWeight(firms, 0, firms[0]).name;
}

terminal.log(findWinner(firms));`,
        hints: [
            "Try to make recursion until the 'n === firms.length' And then return cheese with max weight"
        ],
        test: {
            code: `function maxWeightHelperTEST(A, B) {
    return A.cheeseWeight < B.cheeseWeight ? B : A;
}

function maxWeightTEST(firms, n, maxobj) {
    if (n === firms.length) return maxobj;
    return maxWeightTEST(firms, n + 1, maxWeightHelperTEST(firms[n], maxobj));
}

            describe("6", function() {

               it("Function 'maxWeightHelper' should return one of two object with max weight",function() {
                  expect(maxWeightHelper({name: '1', cheeseWeight: 3},{name: '2', cheeseWeight: 7},)).toEqual({name: '2', cheeseWeight: 7});
               });
               it("Function 'maxWeight' should return object with max weight",function() {
                  expect(maxWeight(firms, 0, firms[0])).toEqual(maxWeightTEST(firms, 0, firms[0]));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Реализуй функции 'maxWeightHelper' и 'maxWeight'

const firms = [
    {name: 'Mozzarella', cheeseWeight: 5},
    {name: 'Cheddar', cheeseWeight: 45},
    {name: 'Brie', cheeseWeight: 19}
];

function maxWeightHelper(A, B) {
    return A.cheeseWeight < B.cheeseWeight ? B : A;
}

function maxWeight(firms, n, maxobj) {
    if (n === firms.length) return maxobj;
    return maxWeight(firms, n + 1, maxWeightHelper(firms[n], maxobj));
}

function findWinner(firms) {
    return maxWeight(firms, 0, firms[0]).name;
}

terminal.log(findWinner(firms));`
        }
    };