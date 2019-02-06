const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed),arg)


function Filter(callback) {
    return (mass) => mass.filter(callback)
}
function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback,...arg)
}
function Map(callback) {
      return (mass) => mass.map(callback)
}

const legions  = [{number:13,size:4,names:['Hiran','Jayesh','Ojas','Ranbir'], attack: 300, location:'Demon`s castle'},
{number:26,size:4,names:['Arnav','Himmat','Mitul','Pranay'], attack: 366, location:'Demon`s castle'},
{number:6,size:6,names:['Ojas','Faiyaz','Rohan','Tushar','Aarav','Madhup'], attack: 353, location:'Hell lake'}] ;
const data = {number:13,day:'Friday',shield:false};
const devil = {health :510};
 
function isCastle(legion){
    return  legion.location == 'Demon`s castle';
}

function getAttackScope(legion){
  return legion.attack;
}
function sum(a,b){
    return a + b;
}
function modDamage(data){
    return (damage) =>{
        const modNumber = (data.number == 13) ? 0.1 : 0;
        const modDay = (data.day == 'Friday') ? 0.13 : 0;
        const modShield = (data.shield == true) ? 0.4 : 0;
        return damage *(1 - modNumber - modDay - modShield)
    }
}

function attack(target){
    return(damage) => {
            return target.health - damage;
    }
}
function IsWin(health){
 return health <= 0;
}

function answer(bool){
 return (bool) ? 'We win!!!' :' We lose!!!' 
}
const attackDevil = compose(
                          Filter(isCastle),
                          Map(getAttackScope),
                          Reduce(sum,0),
                          modDamage(data),
                          attack(devil),
                          IsWin,
                          answer
                          )
console.log(attackDevil(legions))                          


