///// quest 3 ////
// верни строку которая содержит имя и локацию демона-генерала из 6 армии(у него самый большой combatRaiting )
// формат строки "name: " + demon.name + " location: " + demon.location
export const quest3 =
    {
        title: "2",
        text: `LEFT PANEL TEXT`,
        regexps: [],
        regexpsNone: [/(for)/g, /(while)/g, /(var)/g, /(let)/g],
        code: `// верни строку которая содержит имя и локацию демона-генерала из 6 армии(у него самый большой combatRaiting )
// формат строки "name: " +demon.name +" location: " + demon.location

const demons = [{name: 'Charun',army:3,combatRaiting:487,location:'Demon's castle'},
{name: 'Asag' ,army:6,combatRaiting:721,location:'Hell lake'},
{name: 'Bakasura',army:6,combatRaiting:785,location:'Dead garden'},
{name: 'Anzu',army:3,combatRaiting:557,location:'Dragon's fields'},];

function isArmy6(demon){
    return demon.army == 6;
}

function max(demonA,demonB){
    //YOUR CODE;
}

function showLocationAndName(demon){
    //YOUR CODE;
}

const findLeader = compose(Filter(isArmy6),
                          Reduce(maxRaiting),
                          showLocationAndName,
                          );

terminal.log(findLeader(demons)) `,
        hints: [
            ""

            
        ],
        test: {
            code: ``,
      answer:`// верни строку которая содержит имя и локацию демона-генерала из 6 армии(у него самый большой combatRaiting )
// формат строки "name: " +demon.name +" location: " + demon.location
      
const demons = [{name: 'Charun',army:3,combatRaiting:487,location:'Demons castle'},
{name: 'Asag' ,army:6,combatRaiting:721,location:'Hell lake'},
{name: 'Bakasura',army:6,combatRaiting:785,location:'Dead garden'},
{name: 'Anzu',army:3,combatRaiting:557,location:'Dragons fields'},];
      
function isArmy6(demon){
    return demon.army == 6;
}
      
function max(demonA,demonB){
    return demonA.combatRaiting < demonB.combatRaiting ?  demonB : demonA;
}
      
function showLocationAndName(demon){
    return "name: " +demon.name +" location: " + demon.location ;
}
      
const findLeader = compose(Filter(isArmy6),
                           Reduce(maxRaiting),
                           showLocationAndName,
                           );
      
terminal.log(findLeader(demons)) `  }
    };
