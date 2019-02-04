export const quest7 =
    {
        title: "Демоны функциональной школы",
        text: `У твоего героя и лучшей девушки поселения свадьба! Все индусы гуляют, а ты не можешь не нарадоваться тому,
                        что в Аду создана первая семья.
                        Но гад Мефистофель не разделяет вашей радости. Он послал на ваше поселение отряд элитных демонов. 
                        К счастью, раньше Карада достала кое-какие  отчёты о составе армии Мефистофеля.
                        Теперь тебе нужно быстро найти информацию о членах элитного отряда А, после чего посчитать их средние боевые навыки. 
                        Только это поможет тебе и индусам победить чертов!`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `//Посчитай сумму рейтинга и количество всех демонов в формате 
//{sum:970, membersAmount:3}
//Которые входят в легион А и с рейтингом больше 510

const demons = [
    {name: 'Charun',legion:'A',health:400,weapon:'sword',attack:40},
    {name: 'Asag',legion:'A',health:420,weapon:'spear',attack:20},
    {name: 'Bakasura',legion:'B',health:400,weapon:'sword',attack:45},
    {name: 'Corson',legion:'A',health:350,weapon:'sword',attack:60},
    {name: 'Anzu',legion:'B',health:400,weapon:'spear',attack:30}
];

function IsLegionA(demon) {
    return demon.legion == 'A';
}

function  combatRaiting(demon) {
    return  demon.health * 1.2 + demon.attack + 1.5;
}

function raitingMore510(raiting) {
    return raiting > 510;
}

function calcTotal(a, b) {
    //YOUR CODE
}

const total = //YOUR CODE
const averageRaiting = total.sum / total.membersAmount;

terminal.log(total);
terminal.log(averageRaiting);`,
        hints: [
            "HINT 1"
        ],
        test: {
            code: `describe("7", function() {

               it("should return total raiting and amount of members that have raiting more than 510 and belongs to legion A",function() {
                  expect(total).toEqual(demons
    .filter(IsLegionA)
    .map(combatRaiting)
    .filter(raitingMore510)
    .reduce(calcTotal, {sum: 0, membersAmount: 0}));
               });

            });
                  const report = runSpecs();
                        for (var i = 0; i < report.passed.length; i++) {
                          reporterLog(report.descriptions[i], report.passed[i])
                        }
                        if (report.passed.indexOf(false) === -1) { true } else false;`,


            answer: `//Посчитай сумму рейтинга и количество всех демонов в формате 
//{sum:970, membersAmount:3}
//Которые входят в легион А и с рейтингом больше 510

const demons = [
    {name: 'Charun',legion:'A',health:400,weapon:'sword',attack:40},
    {name: 'Asag',legion:'A',health:420,weapon:'spear',attack:20},
    {name: 'Bakasura',legion:'B',health:400,weapon:'sword',attack:45},
    {name: 'Corson',legion:'A',health:350,weapon:'sword',attack:60},
    {name: 'Anzu',legion:'B',health:400,weapon:'spear',attack:30}
];

function IsLegionA(demon) {
    return demon.legion == 'A';
}

function  combatRaiting(demon) {
    return  demon.health * 1.2 + demon.attack + 1.5;
}

function raitingMore510(raiting) {
    return raiting > 510;
}

function calcTotal(a, b) {
    return {
        ...a,
        sum: a.sum + b,
        membersAmount: a.membersAmount + 1
    };
}

const total = demons
    .filter(IsLegionA)
    .map(combatRaiting)
    .filter(raitingMore510)
    .reduce(calcTotal, {sum: 0, membersAmount: 0});
const averageRaiting = total.sum / total.membersAmount;

terminal.log(total);
terminal.log(averageRaiting);`
        }
    };