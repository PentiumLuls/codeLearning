const demons = [{name: 'Charun',army:'A',health:400,weapon:'sword',attack:40}
 ,{name: 'Asag',army:'A',health:420,weapon:'spear',attack:20}
 ,{name: 'Bakasura',army:'B',health:400,weapon:'sword',attack:45}
 ,{name: 'Corson',army:'A',health:350,weapon:'sword',attack:60}
 ,{name: 'Anzu',army:'B',health:400,weapon:'spear',attack:30}]

function IsArmyA(demon){
    return demon.army == 'A'
}


function  calcCombatRaiting(demon){
    return  demon.health * 1.2 + demon.attack * 1.5
    
}

function raitingMore510(raiting){

    return 510 < raiting;
}

function sum(a,b){
    return a + b ;
}

 const result = demons.filter(IsArmyA)
                      .map(calcCombatRaiting)
                      .filter(raitingMore510)
                      .reduce(sum,0)
console.log(result);
