export const quest7 =
    {
        title: "Твоё имя...",
        text: `Now, there's no practical purpose in this particular exercise, but these skills might prove useful in the future.`,
        regexps: [/(reduce)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//You are presented with an array of names. Create an object with these names as fields.
//Make their values represent the number of times the names are mentioned in the array.


const names = ['Anbu','Chetan', 'Farid', 'Chetan','Farid','Chetan','Chetan']; 

function counter( names, name) {
    //YOUR CODE
}

const result = //YOUR CODE
terminal.log(result);`,
        hints: [
            "напиши функцию  которая проверяет наличие в объекте поля которое соответствует передаваемому в функцию имени,если поле присутствует: увеличивает поле на 1 ,иначе создает новое поле со значением 1 ",
            "используй reduce для  прохода по массиву"
            , "reduce должен возвратить объект"
        ],
        test: {
            code: `function counterTEST( names, name) {
   if(!(name in names)){
        names[name] = 1;
    } else {
        names[name] += 1;
    }
   return names; 
}
        
        describe("7", function() {
        
               it("should return new array with amounts of unique names",function() {
                  expect(result).toEqual({"Anbu":1,"Chetan":4,"Farid":2});
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
            answer: `//You are presented with an array of names. Create an object with these names as fields.
//Make their values represent the number of times the names are mentioned in the array.

const names = ['Anbu','Chetan', 'Farid', 'Chetan','Farid','Chetan','Chetan']; 

function counter( names, name) {
    const newNames = {...names}
    newNames[name] = names[name] ? names[name] + 1 : 1
   return newNames
}

const result = names.reduce(counter,{});
terminal.log(result);`
        }
    };