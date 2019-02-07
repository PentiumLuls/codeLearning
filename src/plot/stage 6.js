//вставлять в каждый уровень
const compose = (...fns) => (arg) => 
  fns.reduce((composed, f) => f(composed),arg)


function Filter(callback) {
    return (mass) => mass.filter(callback);
}
function Reduce(callback,...arg) {
    return (mass) => mass.reduce(callback,...arg);
}
function Map(callback) {
      return (mass) => mass.map(callback);
}

////// quest 1 //////

//туториал по композиции
// нужно найти максимальный периметр черного прямоугольника;
const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'black',width:4,height:4, },
{color: 'black',width:5,height:5,},{color: 'white',width:4,height:2,},{color: 'red',width:5,height:5,}];

function isBlack(rectangle) {
    return rectangle.color == 'black';
    };

function perimeter(rectangle) {
        return rectangle.width*2 + rectangle.height*2;
}  

const result = compose (
               Filter(isBlack),
               Map(perimeter),
               Reduce(Math.max)
               )(rectangles)

///// quest 2 ////
//сделай мечи для солдат 
//выбери только железо
//подсчитай количество железа
// пять единиц железа = один меч
// верни количество сделанных мечей
const materials  = [{type:'iron',amount:20},{type:'wood',amount:13},{type:'iron',amount:40}] ;

function isIron(material) {
    return material.type == 'iron';
}

function sumIron(total,iron){
    return total + iron.amount;
} 

function makeSwords(amount){
    return amount / 5
} 

const swordFactory = compose(
                      Filter(isIron),
                      Reduce(sumIron,0),
                      makeSwords)

console.log(swordFactory(materials))



///// quest 3 ////
// верни имя и локацию демона-генерала из 6 армии(у него самый большой combatRaiting )

const demons = [{name: 'Charun',army:3,combatRaiting:487,location:'Demon`s castle'},
{name: 'Asag' ,army:6,combatRaiting:721,location:'Hell lake'},
{name: 'Bakasura',army:6,combatRaiting:785,location:'Dead garden'},
{name: 'Anzu',army:3,combatRaiting:557,location:'Dragon`s fields'},]

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
                          )
console.log(findLeader(demons)) ;


///// quest 4 ////
//выбери только солдат из 26 легиона
//сними с них все оружие
//экипируй их оружием из weapons2
const persons = [{legion:26,weapons:['stick','bow']},
{legion:1,weapons:['sword','bow']},{legion:26,weapons:['stick',]},
{legion:1,weapons:['spear']}] ;

const weapons2 =['sword','spear'];

function equipWeapons(weapons){
    return (hindu)=>{

        const  newHindu = {...hindu};            
        newHindu.weapons = newHindu.weapons.concat(weapons);
                              
            
         return newHindu;
    }
}

function disEquipWeapons(hindu){
    newHindu = {...hindu}
    newHindu.weapons = []
    return newHindu
}    

function isLegion(legionNum){
        return (hindu) =>{
          return   hindu.legion == legionNum;
        }
    }

     
 const equipWeaponLeg26 = equipWeapons(weapons2) ;
 const isLegion26 = isLegion(26);

 const createLegion26 = compose(
                    Filter(isLegion26),
                    Map(disEquipWeapons),
                    Map(equipWeaponLeg26)
                    )

console.log(createLegion26(persons)) 

///// quest 5 ////
//выбери всех индусов моложе 30 лет
//вычисли combatRaiting: здоровье* 1.2 + атака * 1.5}
//выбери индусов с combatRaiting больше 510
//создай легион индусов с полями number:6,size:0,names:[], sumCombatRaiting:0
// найди средний сombatRaiting и удали вспомогательное поле sumCombatRaiting;

const persons = [{name: 'Akarsh',age:60,health:400,attack:40 },
{name: 'Chirag',age:23,health:420,attack:20},
{name: 'Reyansh',age:25,health:400,attack:45},
{name: 'Shaan',age:28,health:350,attack:60},
{name: 'Anzu',age:45,health:400,attack:30}]

function IsAgeLess30(hindu){
     return hindu.age < 30;
 }

function  combatRaiting(hindu){
    const newHindu = {...hindu,
                      combatRaiting: hindu.health * 1.2 + hindu.attack * 1.5};
    return  newHindu;
    
}

function raitingMore510(hindu){

    return 510 < hindu.combatRaiting;
}

function createLegion(obj,hindu){
       const newobj =  {...obj,
                size:obj.size +1,
                sumCombatRaiting:obj.sumCombatRaiting + hindu.combatRaiting,
            };
       newobj.names.push(hindu.name) 
       return  newobj;       
       }

function averageRaiting(gang){
     const newGang = {...gang,
        averageRaiting: gang.sumCombatRaiting/gang.size};
     delete newGang.sumCombatRaiting;
    return newGang;
 }          

 const result = compose(Filter(IsAgeLess30),
                            Map(combatRaiting),
                            Filter(raitingMore510),
                            Reduce(createLegion,{number:6,size:0,names:[], sumCombatRaiting:0}),
                            averageRaiting
                            )(persons)
 console.log(result)
 ///// quest 6 ////// 
 //выбери все легионы которые находятся 'Demon`s castle'
 //возврати массив очков атаки легионов
 //найди сумму урона(сложи все  очки атаки)
 //вычисли изменения урона(modDamage)
 //отними урон от здоровья дьявола
 //проверь победили ли мы дьявола (здоровье <= 0) ? true : false
 //верни сообщения 'We win!!! если' true или  We lose!!! если false
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
 return (bool) ? 'We win!!!' :'We lose!!!' 
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

                       





