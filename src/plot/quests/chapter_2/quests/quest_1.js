export const quest1 =
    {
        title: "Filter. Туториал 1",
        text: `Listen here, you brat. Now that you have access to filter, map and reduce functions, make sure to use them wisely. 
                Here you have a collection of different colored rectangles. Return the array of black rectangles using the filter function. 
                You can also reuse chunks of code from the first chapter if you want.`,
        regexps: [/(filter)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `// Return an array with black rectangles

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

const blackRectangles = //YOUR CODE
terminal.log(blackRectangles);`,
        hints: [
            'Иcпользуй isBlack в filter чтобы найти только черные прямоугольники',
            'isBlack возвращает true или false',

        ],
        test: {
            code: `

                            describe("1", function() {

   it("should return new array of black rectangles",function() {
   
      expect(blackRectangles).toEqual(rectangles.filter(isBlack));
   });
   
});
      const report = runSpecs();
            for (var i = 0; i < report.passed.length; i++) {
              reporterLog(report.descriptions[i], report.passed[i])
            }
            if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `// Return an array with black rectangles

const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:3, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'green',width:4,height:7, },
{color: 'black',width:3,height:5,},{color: 'black',width:4,height:2,},];

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

const blackRectangles=rectangles.filter(isBlack);
terminal.log(blackRectangles);`
        }
    }