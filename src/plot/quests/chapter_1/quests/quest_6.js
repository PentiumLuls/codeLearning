export const quest6 =
    {
        title: "Чистая функция. Туториал 3",
        text: `В этом задании ты будешь писать функцию-аккумулятор. Позже эта функция тебе пригодится.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию add, которая возвращает суму двух чисел.

const a = 5;
const b = 10;

function add(a, b) {
    //YOUR CODE
}

terminal.log(add(a,b));`,
        hints: [
            "Функция должна возвращать одно число"
        ],
        test: {
            code: `describe("quest 6", function() {

   it("should return the sum of two numbers",function() {
      expect(add(1,7)).toEqual(8);
   });
   it("should return the sum of two numbers",function() {
      expect(add(50,51)).toEqual(101);
   });
   
});
 const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//Напиши функцию add, которая возвращает суму двух чисел.

const a = 5;
const b = 10;

function add(a, b) {
    return a + b;
}

terminal.log(add(a,b));`
        }
    }