export const quest2 =
    {
        title: "Мастера меча",
        text: `После того, как твои воспоминания вернулись к тебе, ты пару дней не мог опомниться. Этот чёртов Мефисто посмел отобрать у тебя твоего брата, воспоминания о нём и твою деревню. Пора дать ему отпор.

        Ты сзываешь народное собрание и рассказываешь индусам о всём, что с тобой произошло, и кто на самом деле виноват во всех их бедах. Вы начинаете экипировать армию.
        
        Ты разыскиваешь лучших кузнецов города, чтобы те сделали тебе нужное оружие.
        `,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `class ToolBox { 
    static compose(...fns) { 
        return (arg) =>
            fns.reduce((composed, f) => f(composed), arg);
    }

    static Filter(callback) {
        return (mass) => mass.filter(callback);
    }

    static Reduce(callback, ...arg) {
        return (mass) => mass.reduce(callback, ...arg);
    }

    static Map(callback) {
        return (mass) => mass.map(callback);
    }
}

//Cделай мечи для солдат
//Пять единиц железа = один меч
//Верни количество сделанных мечей

const materials  = [
    {type:'iron',amount:20},
    {type:'wood',amount:13},
    {type:'iron',amount:40}
];

function isIron(material) {
    return material.type == 'iron';
}

function sumIron(total, iron) {
    return total + iron.amount;
}

function makeSwords(amount) {
    return amount / 5;
}

const swordFactory = //YOUR CODE
terminal.log(swordFactory(materials));`,
        hints: [
            "используй функциональные версии Filter,Reduce в compose",
        ],
        test: {
            code: `const swordFactoryTEST = ToolBox.compose(
                            ToolBox.Filter(isIron),
                            ToolBox.Reduce(sumIron,0),
                            makeSwords);
            
            describe("2", function() {

               it("sword factory should return amount of swords depends on materials",function() {
                  expect(swordFactory(materials)).toEqual(swordFactoryTEST(materials));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `class ToolBox { 
    static compose(...fns) { 
        return (arg) =>
            fns.reduce((composed, f) => f(composed), arg);
    }

    static Filter(callback) {
        return (mass) => mass.filter(callback);
    }

    static Reduce(callback, ...arg) {
        return (mass) => mass.reduce(callback, ...arg);
    }

    static Map(callback) {
        return (mass) => mass.map(callback);
    }
}

//Cделай мечи для солдат
//Пять единиц железа = один меч
//Верни количество сделанных мечей

const materials  = [
    {type:'iron',amount:20},
    {type:'wood',amount:13},
    {type:'iron',amount:40}
];

function isIron(material) {
    return material.type == 'iron';
}

function sumIron(total, iron) {
    return total + iron.amount;
}

function makeSwords(amount) {
    return amount / 5;
}

const swordFactory = ToolBox.compose(
                            ToolBox.Filter(isIron),
                            ToolBox.Reduce(sumIron,0),
                            makeSwords);
terminal.log(swordFactory(materials));`
        }
    };