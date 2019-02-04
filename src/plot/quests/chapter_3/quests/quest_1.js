export const quest1 =
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
    };