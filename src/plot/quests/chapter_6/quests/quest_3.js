export const quest3 =
    {
        title: "3",
        text: `LEFT PANEL TEXT`,
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
//Верни строку которая содержит имя и локацию демона с наибольшим
//показателем combatRaiting из 6 армии

const demons = [
    {name: 'Charun', army:3, combatRaiting:487, location:"Demon's castle"},
    {name: 'Asag' , army:6, combatRaiting:721, location:"Hell lake"},
    {name: 'Bakasura', army:6, combatRaiting:785, location:"Dead garden"}
];

function isArmy6(demon) {
    return demon.army == 6;
}

function showLocationAndName(demon) {
    return "name: " + demon.name + " location: " + demon.location;
}

function max(demonA,demonB) {
    //Should return demon with the highest combatRaiting
}

const findLeader = //YOUR CODE;
terminal.log(findLeader(demons));`,
        hints: [
            "You should use ToolBox methods to compose final result",
        ],
        test: {
            code: `const findLeaderTEST = ToolBox.compose(ToolBox.Filter(isArmy6),
                          ToolBox.Reduce(max),
                          showLocationAndName);
            
                  describe("3", function() {

               it("Method 'findLeader' should return name and location of demons with the highest combatRaiting from 6 army",function() {
                  expect(findLeader(demons)).toEqual(findLeaderTEST(demons));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,
      answer:`class ToolBox {
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
//Верни строку которая содержит имя и локацию демона с наибольшим
//показателем combatRaiting из 6 армии

const demons = [
    {name: 'Charun', army:3, combatRaiting:487, location:"Demon's castle"},
    {name: 'Asag' , army:6, combatRaiting:721, location:"Hell lake"},
    {name: 'Bakasura', army:6, combatRaiting:785, location:"Dead garden"}
];

function isArmy6(demon) {
    return demon.army == 6;
}

function showLocationAndName(demon) {
    return "name: " + demon.name + " location: " + demon.location;
}

function max(demonA,demonB) {
    return demonA.combatRaiting > demonB.combatRaiting ? demonA : demonB;
}

const findLeader = ToolBox.compose(ToolBox.Filter(isArmy6),
                          ToolBox.Reduce(max),
                          showLocationAndName);
terminal.log(findLeader(demons));`  }
    };
