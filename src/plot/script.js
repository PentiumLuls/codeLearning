const persons =[{weapons:['sword']}, {weapons:['sword','stick']},{weapons:['stick']},{weapons:['sword']}];
function noWeapon(weapon){
      return (hindu)=>{
          return (hindu.weapons.indexOf(weapon) === -1) ?  1 : 0 ;
      }
};

const noSword = noWeapon('sword');

const noStick = noWeapon('stick');
function sum(a,b){
   return a + b;
}

const result1 = persons.map(noSword).reduce(sum,0);

const result2 = persons.map(noStick).reduce(sum,0);
console.log(result1)
console.log(result2)