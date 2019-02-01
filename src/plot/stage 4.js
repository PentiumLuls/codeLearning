///// quest 1/////////
const rectangle = {
    color: 'red',
    width:4,
    height:4,
};

function hasColor(c){
    return function(r){
        return r.color == c;
    }
}
isBlack = hasColor('black')
console.log(isBlack(rectangle))
//////    //////
//////   //////
////// quest 3 /////
const person = {weapons:['sword','stick'],};

function disEquipWeapon(weapon){
            return (hindu)=>{
             
               const  newHindu = {...hindu}
               const find = newHindu.weapons.indexOf(weapon)
                 if( find !== -1){
                    newHindu.weapons.splice(find,1);
                 }
                 return newHindu;
              }
             } 


////// quest 4 //////

const persons =[{weapons:['sword']}, {weapons:['sword','stick']},{weapons:['stick']},{weapons:['sword']}];

function noWeapon(weapon){
      return (hindu)=>{
          return (hindu.weapons.indexOf(weapon) === -1) ?  1 : 0 ;
      }
}

const noSword = noWeapon('sword');

const noStick = noWeapon('stick');

function sum(a,b){
   return a + b;
}

const result1 = persons.map(noSword).reduce(sum,0);

const result2 = persons.map(noStick).reduce(sum,0);



////// quest 5 //////
const persons = [{legion:1,weapons:[]},
{legion:13,weapons:['sword']},
{legion:1,weapons:[]},];

function isLegion(legionNum){
    return (hindu) =>{
      return   hindu.legion == legionNum;
    }
}



function equipWeapon(weapon){
            return (hindu) =>{
                newHindu = {...hindu}
                newHindu.weapons.push(weapon)
                return newHindu
                  }
            }
          

const isLegion1 = isLegion(1);
const isLegion13 = isLegion(13);  
const equipSword = equipWeapon('sword')
const equipStick = equipWeapon('stick');
const result1 = persons.filter(isLegion1).map(equipSword);
const result2 = persons.filter(isLegion13).map(equipStick);






         

/////// quest 6 ///////
/////,armor,weapon,name,age
function createHinduCard( weapon ){
    
    return function( armor ){
        
        return function( city ){
            
            return function( name ){
                
                return function( age ){
                   
                    return {
                        city : city,
                        armor : armor,
                        weapon : weapon,
                        name : name,
                        age : age

                    }
                }
            }
        }
    }

}



const createHinduCardTypeA = createHinduCard('sword')(true)('Mumbai');
const createHinduCardTypeB  = createHinduCard('stick')(false);
const result1 = createHinduCardTypeA('Rachit')(40);
const result2 = createHinduCardTypeB ('Delhi')('Ojas')(27);
