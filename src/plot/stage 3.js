/////// quest 1 //////
const rectangles = [{color: 'red',width:4,height:4,},
{color: 'black',width:2, height:2,},{color: 'white',width:6,height:9,},
{color: 'black',width:3,height:3,},{color: 'black',width:4,height:4, },
{color: 'black',width:5,height:5,},{color: 'white',width:4,height:2,},{color: 'red',width:5,height:5,}];

function isBlack(rectangle) {
    return rectangle.color == 'black';
    };

function isSquare(rectangle) {
        return rectangle.width == rectangle.height;
    }
const blackSquares = rectangles.filter(isBlack).filter(isSquare);





////// quest 2 ///////
persons = [{name:'Farid',city:'Delhi',weapon:'sword',age:21},
,{name:'Anbu',city:'Delhi',weapon:'stick',age:18}
,{name:'Chetan',city:'Delhi',weapon:'sword',age:28}
,{name:'Rachit',city:'Delhi',weapon:'sword',age:40}
,{name:'Chetan',city:'Mumbai',weapon:'sword',age:35}
,{name:'Aadhi',city:'Delhi',weapon:'sword',age:21}]
   
function isFromDelhi(hindu){
    return hindu.city == 'Delhi';
}

function hasSword(hindu){
    return hindu.weapon == 'sword';
}

function isYoung(hindu){
    return hindu.age < 30;
}

const result = persons.filter(isFromDelhi)
                      .filter(hasSword)
                      .filter(isYoung)







/////// quest 3 ///////
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
function max(a, b) {
        return a < b ? b : a;
    } 

const maxNumber = rectangles.filter(isBlack)
                            .map(perimeter)
                            .reduce(max, 0);      




////// quest 4 //////
trees = [{type:'Oak',amount:13}
,{type:'Oak',amount:6}
,{type:'Pine',amount:6}
,{type:'Oak',amount:23}
,{type:'Pine',amount:19}]

function isOak(tree){
    return tree.type == 'Oak';
}

function makeBoards(tree){
    return tree.amount * 4;
}
function  sum(a, b) {
    return a + b ;
}
result = trees.filter(isOak)
              .map(makeBoards)
              .reduce(sum,0)



////// quest 5 ///////
const persons = [{name:'Anvi',music:'Indian',age:40}
,{name:'Kiara',music:'Indian',age:40}
,{name:'Anvi',music:'Indian',age:34}
,{name:'Anvi',music:'Indian',age:21}
,{name:'Anvi',music:'American',age:36}]

function isAnvi(hindu){
   return  hindu.name == 'Anvi' ;
}

function likesIndianMusic(hindu){
    return hindu.music == 'Indian' ;
}


function minAge(hinduA, hinduB) {
    return hinduA.age < hinduB.age ? hinduA : hinduB;
}
const wife = persons.filter(isAnvi)
                    .filter(likesIndianMusic)
                    .reduce( minAge)



////// quest 6 ///////

const persons = [{name:'Farid',armor: true,weapon:'sword',age:21,}
,{name:'Chetan',armor: true,weapon:'sword',age:35,}
,{name:'Chetan',armor: false,weapon:'sword',age:50,}
,{name:'Anbu',armor: false,weapon:'stick',age:20,}
,{name:'Aadhi',armor: true,weapon:'sword',age:46,}
,{name:'Ojas',armor: true,weapon:'stick',age:28,}
,{name:'Rachit',armor: true,weapon:'sword',age:60,}]

function hasArmor(hindu){
    return hindu.armor == true;
}

function hasSword(hindu){
    return hindu.weapon == 'sword';
}

function getAge(hindu){
    return hindu.age;
}

function min(a, b) {
    return a < b ? a : b;
} 
const minAge = persons.filter(hasArmor)
                      .filter(hasSword)
                      .map(getAge)
                      .reduce(min);

                


////// quest 7 //////



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




