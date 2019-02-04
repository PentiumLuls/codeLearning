export const quest2 =
    {
        title: "Функционалист, боец индус. В поисках идеального плана",
        text: `Индусы голодают. После атаки демонов еды осталось очень мало. Тебе приходится устанавливать абсолютную тиранию.

                Все индусы теперь живут в многоквартирных бараках и ты начинаешь выдавать им талоны на еду. В такие моменты тебе очень не хватает Карады.
                
                Ты решаешь расписать план на 3 месяца.`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Посчитай сумму, нужную чтобы накормить 'hinduAmount' индусов в течении 
//'monthAmount' месяцев, с учетом того, что для 1 индуса на 1 месяц 
//это будет стоить 'eatCostPerMonth'.
//Формула: eatCostPerMonth * hinduAmount * monthAmount

const eatCostPerMonth = 50;
const hinduAmount = 100;
const monthAmount = 3;

function sumMoney(eatCostPerMonth) {
    //YOUR CODE
}

const result1 = sumMoney(eatCostPerMonth)(hinduAmount)(monthAmount);
terminal.log(result1);

const newBill = sumMoney(30)(200);
const result2 = newBill(2);
terminal.log(result2);`,
        hints: [
            "Try using carrying to return total sum"
        ],
        test: {
            code: `function sumMoneyTEST( eatCostPerMonth ) {
    return ( hinduAmount ) => {
        return( monthAmount ) => {
             return eatCostPerMonth * hinduAmount * monthAmount;
        };
    };
}
                    
                    describe("2", function() {
               it("should return the cost of food for a specified number of hindu, taking into account the price",function() {
                  expect(result1).toEqual(sumMoneyTEST(eatCostPerMonth)(hinduAmount)(monthAmount));
               });
               it("should return the cost of food for a specified number of hindu, taking into account the price",function() {
                  expect(sumMoney(30)(200)(2)).toEqual(12000);
               });
            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Посчитай сумму, нужную чтобы накормить 'hinduAmount' индусов в течении 
//'monthAmount' месяцев, с учетом того, что для 1 индуса на 1 месяц 
//это будет стоить 'eatCostPerMonth'.
//Формула: eatCostPerMonth * hinduAmount * monthAmount

const eatCostPerMonth = 50;
const hinduAmount = 100;
const monthAmount = 3;

function sumMoney(eatCostPerMonth) {
    return ( hinduAmount ) => {
        return( monthAmount ) => {
             return eatCostPerMonth * hinduAmount * monthAmount;
        };
    };
}

const result1 = sumMoney(eatCostPerMonth)(hinduAmount)(monthAmount);
terminal.log(result1);

const newBill = sumMoney(30)(200);
const result2 = newBill(2);
terminal.log(result2);`
        }
    };