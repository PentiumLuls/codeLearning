export const quest4 =
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
    };