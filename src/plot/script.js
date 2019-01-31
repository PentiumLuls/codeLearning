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
 
console.log(disEquipWeapon('sword')({weapons:['sword','stick']}))