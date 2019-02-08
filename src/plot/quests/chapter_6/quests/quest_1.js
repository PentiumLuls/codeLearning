export const quest1 =
    {
        title: "Pipe. Туториал 1",
        text: `Опять фигуры, вокруг фигуры, вся жизнь – фигуры. Ты окружён болью и абстракционизмом. Тебе некуда бежать.
        `,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `// найди максимальный периметр черного прямоугольника;

const rectangles = [
{color: 'black', width:2, height:2},
{color: 'white', width:6, height:9},
{color: 'black', width:3, height:3},
{color: 'black', width:4, height:5}
];

const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed), arg);

function Filter(callback) {
    return (mass) => mass.filter(callback);
}

function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback, ...arg);
}

function Map(callback) {
    return (mass) => mass.map(callback);
}

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2;
}

function max(a, b) {
    return a > b ? a : b;
}

const result = //YOUR CODE
terminal.log(result);`,
        hints: [
            "используй функцию compose",
             "используй функциональные версии Filter,Map,Reduce в compose"
        ],
        test: {
            code: `describe("1", function() {

               it("result should equal to max perimeter of black rectangles",function() {
                  expect(result).toEqual(compose(
                    Filter(isBlack),
                    Map(perimeter),
                    Reduce(max))
                    (rectangles));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


        answer: `// найди максимальный периметр черного прямоугольника;

const rectangles = [
{color: 'black', width:2, height:2},
{color: 'white', width:6, height:9},
{color: 'black', width:3, height:3},
{color: 'black', width:4, height:5}
];

const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed), arg);

function Filter(callback) {
    return (mass) => mass.filter(callback);
}

function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback, ...arg);
}

function Map(callback) {
    return (mass) => mass.map(callback);
}

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2;
}

function max(a, b) {
    return a > b ? a : b;
}

const result = compose(
                    Filter(isBlack),
                    Map(perimeter),
                    Reduce(max))
                    (rectangles);
terminal.log(result);`
        }
    };