export const quest3 =
    {
        title: "Чейнинг методов. Туториал 2",
        text: `Давай рассмотрим задачку чуть посложнее.
Перед собой ты видишь уже знакомый набор прямоугольников. Верни только один чёрный прямоугольник с максимальным периметром.`,
        regexps: [/(map)/g, /(filter)/g, /(reduce)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Найди максимальный периметр среди черных прямоугольников

const rectangles = [
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:7,},{color: 'black',width:2,height:4, },
];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}

function max(a, b) {
    return a < b ? b : a;
}

const maxPerimeterOfBlackRects = //YOUR CODE
terminal.log(maxPerimeterOfBlackRects);`,
        hints: [
            "First, you should filter black rectangles",
            "Calculate perimeter using map",
            "Then find max perimeter",
            "Use reduce to find max perimeter"
        ],
        test: {
            code: `describe("3", function() {

               it("should return max perimeter of black rectangles",function() {
                  expect(maxPerimeterOfBlackRects).toEqual(rectangles.filter(isBlack).map(perimeter).reduce(max, 0));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Найди максимальный периметр среди черных прямоугольников

const rectangles = [
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:7,},{color: 'black',width:2,height:4, },
];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}

function max(a, b) {
    return a < b ? b : a;
}

const maxPerimeterOfBlackRects = rectangles
                .filter(isBlack)
                .map(perimeter)
                .reduce(max, 0);
terminal.log(maxPerimeterOfBlackRects);`
        }
    };