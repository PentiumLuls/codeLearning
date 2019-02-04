export const quest2 =
    {
        title: "Кляти туристы",
        text: `В поселение индусов хлынул очень разный народ. Хоть мы и против наличия классовой системы, но как-то просеять население мы всё же должны. 
Для разминки попробуй вернуть только молодых (до 30 лет) вооружённых (с мечём) индусов с Дели. `,
        regexps: [/(filter)/g],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Отфильтруй индусов за местом жительства, наличием меча и возрастом

persons = [
    {name:'Farid',city:'Delhi',weapon:'sword',age:21},
    {name:'Anbu',city:'Delhi',weapon:'stick',age:18},
    {name:'Chetan',city:'Delhi',weapon:'sword',age:46},
    {name:'Rachit',city:'Mumbai',weapon:'sword',age:20},
    {name:'Chetan',city:'Mumbai',weapon:'sword',age:35}
];
   
function isFromDelhi(hindu){
    //YOUR CODE
}

function hasSword(hindu){
    return hindu.weapon == 'sword';
}

function isYoung(hindu){
    //Индус считается молодым, если ему меньше 30 лет
}

const result = //YOUR CODE
terminal.log(result);`,
        hints: [
            "Try to filter rectangles using method chaining - operator '.'"
        ],
        test: {
            code: `describe("2", function() {

               it("should return new array of persons with said descriptions",function() {
                  expect(result).toEqual(persons
            .filter(isFromDelhi)
            .filter(hasSword)
            .filter(isYoung));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Отфильтруй индусов за местом жительства, наличием меча и возрастом

persons = [
    {name:'Farid',city:'Delhi',weapon:'sword',age:21},
    {name:'Anbu',city:'Delhi',weapon:'stick',age:18},
    {name:'Chetan',city:'Delhi',weapon:'sword',age:46},
    {name:'Rachit',city:'Mumbai',weapon:'sword',age:20},
    {name:'Chetan',city:'Mumbai',weapon:'sword',age:35}
];
   
function isFromDelhi(hindu){
    return hindu.city == 'Delhi';
}

function hasSword(hindu){
    return hindu.weapon == 'sword';
}

function isYoung(hindu){
    return hindu.age < 30;
}

const result = persons
            .filter(isFromDelhi)
            .filter(hasSword)
            .filter(isYoung);
terminal.log(result);`
        }
    };