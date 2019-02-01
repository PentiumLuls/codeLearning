const persons1 = [{weapons:['sword','stick','bow']},{weapons:['sword','bow']}];
const persons2 = [{weapons:['bow']},{weapons:['bow']}];
weapons1 =['sword','stick']
weapons2 =['sword','spear']

function partial(fn) {

    return (...args) =>{

        return (..._arg) => {

            return fn(...args)(..._arg);
        }
    }
}


     

function disEquipWeapons(weapons){
    return (hinduses)=>{

       const  newHinduses = hinduses.concat().map((hindu)=>{
                weapons.forEach((weapon)=>{

                    const  find = hindu.weapons.indexOf(weapon)
                    
                    if( find !== -1){
                        hindu.weapons.splice(find,1);
                    }
               
                }
              
              )   
              return hindu ;   
            }
        )
        return newHinduses;
    }

}

function equipWeapons(weapons){
    return (hinduses)=>{

        const  newHinduses = hinduses.concat().map((hindu)=>{
            
                hindu.weapons = hindu.weapons.concat(weapons);
                return hindu;   
                }
            ) 
         return newHinduses;
    }
}



partial(disEquipWeapons)(weapons1)(persons1)
partial(equipWeapons)(weapons2)(persons2)
