export const quest3 =
    {
        title: "Map. Туториал 2",
        text: `Good, now the process of preparing the troops will go significantly faster.
         Also, let us hope that redoing  these quests will help you recover your memories faster.
        Now I’ll introduce you to the map function.As you can see, the array of rectangles is the same as before.
        You will need to write a function that returns the rectangle’s perimeter.
        Then use map with the said function to return the array of all of the rectangles’ perimeters. Good luck.`,
        regexps: [/(map)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Return the array with rectangles' perimeters.

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2;
}

const perimeters = //YOUR CODE
terminal.log(perimeters);`,
        hints: [
            'Используй map для того чтобы применить функцию perimeter для всех прямоугольников в массиве'
        ],
        test: {
            code: `describe("3", function() {

               it("should return array of rectangle perimeters",function() {
                  expect(perimeters).toEqual(rectangles.map(perimeter));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer:
                `//Return the array with rectangles' perimeters.

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function perimeter(rectangle) {
    return rectangle.width * 2 + rectangle.height * 2;
}

const perimeters = rectangles.map(perimeter);
terminal.log(perimeters);`
        }
    };