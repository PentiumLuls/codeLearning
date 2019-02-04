export const quest1 =
    {
        title: "Чистая функция. Туториал 1",
        text: `В этом задании ты будешь писать функции-предикаты. Они принимают какое-нибудь значение,
                сравнивают его с каким-то условием и возвращают true или false. Позже эти функции будут тебе пригодятся`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функции isBlack и isSquare, которые принимают прямоугольник
//И возвращают соответствующие данные.
//P.S. Все цвета будут написаны в lowercase.

const rectangle = {
    color: 'red',
    width:4,
    height:4,
};

terminal.log("Hello world");

function isBlack(rectangle) {
    //YOUR CODE
}

function isSquare(rectangle) {
    //YOUR CODE
}

terminal.log(isBlack(rectangle));
terminal.log(isSquare(rectangle));`,
        hints: [
            "Функция должна возвращать True или False"
        ],
        test: {
            code: `let valid = true;
                    const rectangle2 = {
                        color: 'black',
                        width:4,
                        height: 3,
                    }
                    const rectangle3 = {
                        color: 'red',
                        width:8,
                        height: 8,
                    }       
                            describe("quest1", function() { 
   
   it("should return true when the rectangle color is black",function() { 
      expect(isBlack(rectangle2)).toEqual(true); 
   }); 
   it("should return false when the rectangle is not square",function() { 
      expect(isSquare(rectangle2)).toEqual(false); 
   }); 
   it("should return false when the rectangle color is not black",function() { 
      expect(isBlack(rectangle3)).toEqual(false); 
   }); 
   it("should return true when the rectangle is square",function() { 
      expect(isSquare(rectangle3)).toEqual(true); 
   });

});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//Напиши функции isBlack и isSquare, которые принимают прямоугольник
//И возвращают соответствующие данные.
//P.S. Все цвета будут написаны в lowercase.

const rectangle = {
    color: 'red',
    width:4,
    height:4,
};

terminal.log("Hello world");

function isBlack(rectangle) {
    return rectangle.color == 'black';
}

function isSquare(rectangle) {
    return rectangle.width == rectangle.height;
}

terminal.log(isBlack(rectangle));
terminal.log(isSquare(rectangle));`
        }
    }