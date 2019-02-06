export const quest3 =
    {
        title: "3",
        text: ``,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Функция 'milkCows' принимает массив коров и число - с какой коровы начинать
//Дойку. 1 единица 'milk', что имеет корова равна 5 единицам молока.
//Не забудь убедиться, что коров для подойки может и не быть!

const cows = [{milk:10}, {milk:5}, {milk:0}];

function milkCows(cows, n) {
    //YOUR CODE
}

function Milk(milk){
   return 5 * milk;
}

terminal.log(milkCows(cows,0));
terminal.log(milkCows(cows,5));`,
        hints: [
            "Don`t forget about opportunity of undefined 'cows'!"
        ],
        test: {
            code: `function milkCowsTEST(cows, n) {
    if (n >= cows.length ) return 0;
    return MilkTEST(cows[n].milk) + milkCowsTEST(cows, n+1)
}

function MilkTEST(milk){
   return 5 * milk;
}
            
            describe("3", function() {

               it("'milkCows' should return sum of milk beginning from cow 'n'",function() {
                  expect(milkCows(cows,0)).toEqual(milkCowsTEST(cows,0));
                  expect(milkCows(cows,1)).toEqual(milkCowsTEST(cows,1));
                  expect(milkCows(cows,6)).toEqual(milkCowsTEST(cows,6));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,

            answer: `//Функция 'milkCows' принимает массив коров и число - с какой коровы начинать
//Дойку. 1 единица 'milk', что имеет корова равна 5 единицам молока.
//Не забудь убедиться, что коров для подойки может и не быть!

const cows = [{milk:10}, {milk:5}, {milk:0}];

function milkCows(cows, n) {
    if (n >= cows.length ) return 0;
    return Milk(cows[n].milk) + milkCows(cows,n+1);
}

function Milk(milk){
   return 5 * milk;
}

terminal.log(milkCows(cows,0));
terminal.log(milkCows(cows,5));`
        }
    };
