export const quest3 =
    {
        title: "Чистая функция. Туториал 2",
        text: `В этом задании ты будешь писать функцию-конвертер. Она принимает какое-нибудь значение
                и возвращает другое значение. Позже, эта функция тебе пригодится.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Напиши функцию perimeter, которая принимает прямоугольник
//и возвращает результат проверки.

const rectangle = {
    color: 'red',
    width: 5,
    height: 5,
    
};

function perimeter(rectangle) {
    //YOUR CODE
}

terminal.log(perimeter(rectangle));`,
        hints: [
            "Функция должна возвращать 1 число"
        ],
        test: {
            code: `let valid = true;
                    const rectangle2 = {
                        color: 'black',
                        width: 3,
                        height: 5,
                        
                    }
                    const rectangle3 = {
                        color: 'black',
                        width: 10,
                        height: 20,
                        
                    }
                             if(perimeter(rectangle2) !== 16){valid = false};
                            
                            describe("quest3", function() { 
   
   it("should return perimeter of the rectangle",function() { 
      expect(perimeter(rectangle2)).toEqual(16); 
   }); 
   it("should return perimeter of the rectangle",function() { 
      expect(perimeter(rectangle3)).toEqual(60); 
   }); 
});
      const report = runSpecs();
      for (var i = 0; i < report.passed.length; i++) {
        reporterLog(report.descriptions[i], report.passed[i])
      }
      if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//Напиши функцию perimeter, которая принимает прямоугольник
//и возвращает результат проверки.

const rectangle = {
    color: 'red',
    width: 5,
    height: 5,
    
};

function perimeter(rectangle) {
    return rectangle.width*2 + rectangle.height*2;
}

terminal.log(perimeter(rectangle));`
        }
    }