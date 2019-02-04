export const quest1 =
    {
        title: "Частичное применение. Туториал 1",
        text: `Уууууу... достали эти фигуры`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Реализуй функцию использующую частичное применение для
//Проверки прямоугольников на цвет

const rectangle1 = {color:'red', width:4, height:4};
const rectangle2 = {color:'black', width:2, height:3};

function hasColor(color) {
    return function(rect) {
        //YOUR CODE
    };
}

const isBlack = hasColor('black');
terminal.log(isBlack(rectangle1));
terminal.log(isBlack(rectangle2));`,
        hints: [
            "isBlack - function, that should return equality of rect color to black color"
        ],
        test: {
            code: `function hasColorTEST(color) {
    return function(rect) {
        return rect.color == color;
    };
}
const isBlackTEST = hasColorTEST('black');
                    
                    describe("1", function() {

               it("should return true if the rectangle color is black",function() {
                  expect(isBlack(rectangle2)).toEqual(isBlackTEST(rectangle2));
               });
               it("should return false if the rectangle color is not black",function() {
                  expect(isBlack(rectangle1)).toEqual(isBlackTEST(rectangle1));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Реализуй функцию использующую частичное применение для
//Проверки прямоугольников на цвет

const rectangle1 = {color:'red', width:4, height:4};
const rectangle2 = {color:'black', width:2, height:3};

function hasColor(color) {
    return function(rect) {
        return rect.color == color;
    };
}

const isBlack = hasColor('black');
terminal.log(isBlack(rectangle1));
terminal.log(isBlack(rectangle2));`
        }
    };